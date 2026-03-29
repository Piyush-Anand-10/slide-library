import { type Presentation } from "@/data/presentations";
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

type Props = {
  presentation: Presentation;
  onClose: () => void;
};

export const PresentationViewer = ({ presentation, onClose }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentAudio = presentation.audio?.[currentSlide - 1] ?? null;

  // Stop audio and reset when slide changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setAudioProgress(0);
    setAudioDuration(0);
  }, [currentSlide]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setAudioProgress(audio.currentTime);
    setAudioDuration(audio.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setAudioProgress(Number(e.target.value));
  };

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const goNext = () => setCurrentSlide((s) => Math.min(s + 1, presentation.slideCount));
  const goPrev = () => setCurrentSlide((s) => Math.max(s - 1, 1));
  const toggleFullscreen = () => setIsFullscreen((f) => !f);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className={`bg-card rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ${
          isFullscreen ? "w-full h-full rounded-none" : "w-[90vw] h-[85vh] max-w-5xl"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{presentation.icon}</span>
            <div>
              <h2 className="font-heading font-bold text-lg text-foreground">{presentation.title}</h2>
              <span className="text-xs text-muted-foreground">{presentation.category} • {presentation.fileSize}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" onClick={toggleFullscreen} className="hover:bg-primary/10 hover:text-primary">
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button size="icon" variant="ghost" onClick={onClose} className="hover:bg-destructive/10 hover:text-destructive">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Slide Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-muted/50 relative gap-4 overflow-hidden">
          {presentation.slides && presentation.slides.length > 0 ? (
            <>
              <div className="relative flex items-center justify-center w-full flex-1 min-h-0">
                <div className="relative shadow-xl rounded-2xl overflow-hidden max-h-full">
                  <img
                    key={currentSlide}
                    src={presentation.slides[currentSlide - 1]}
                    alt={`Slide ${currentSlide}`}
                    className="block max-w-full max-h-full w-auto h-auto animate-in fade-in duration-200"
                    style={{ maxHeight: currentAudio ? "calc(85vh - 220px)" : "calc(85vh - 160px)" }}
                  />
                  <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm font-medium">
                    {currentSlide} / {presentation.slideCount}
                  </div>
                </div>
              </div>

              {/* Audio Player */}
              {currentAudio && (
                <div className="w-full max-w-lg flex-shrink-0">
                  <audio
                    ref={audioRef}
                    src={currentAudio}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleTimeUpdate}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => { setIsPlaying(false); setAudioProgress(0); }}
                    preload="metadata"
                  />
                  <div className="bg-card border border-border rounded-2xl px-4 py-3 shadow-md flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="flex-shrink-0 w-9 h-9 rounded-full gradient-candy flex items-center justify-center shadow-md hover:opacity-90 transition-opacity"
                    >
                      {isPlaying
                        ? <Pause className="w-4 h-4 text-white" />
                        : <Play className="w-4 h-4 text-white ml-0.5" />
                      }
                    </button>
                    <div className="flex-1 flex flex-col gap-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span className="text-xs font-medium text-foreground truncate">Pronunciation Audio</span>
                        <span className="text-xs text-muted-foreground ml-auto flex-shrink-0">
                          {formatTime(audioProgress)} / {formatTime(audioDuration)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={audioDuration || 0}
                        step={0.01}
                        value={audioProgress}
                        onChange={handleSeek}
                        className="w-full h-1.5 rounded-full accent-primary cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className={`${presentation.gradient} rounded-2xl w-full max-w-3xl aspect-video flex flex-col items-center justify-center relative shadow-xl`}>
              <span className="text-6xl mb-4">{presentation.icon}</span>
              <h3 className="font-heading font-bold text-2xl text-primary-foreground drop-shadow-md">
                {presentation.title}
              </h3>
              <p className="text-primary-foreground/80 mt-2 text-sm font-body">
                Slide {currentSlide} of {presentation.slideCount}
              </p>
              <p className="text-primary-foreground/60 mt-6 text-xs font-body max-w-sm text-center px-4">
                Replace this placeholder with actual slide images from your PPTX files
              </p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <Button onClick={goPrev} disabled={currentSlide === 1} variant="outline" className="gap-2 rounded-full">
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>

          {/* Slide indicator */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs px-1">
            {Array.from({ length: presentation.slideCount }, (_, i) => {
              const slideNum = i + 1;
              const isActive = slideNum === currentSlide;
              return (
                <button
                  key={slideNum}
                  onClick={() => setCurrentSlide(slideNum)}
                  className={`flex-shrink-0 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "gradient-candy w-6 shadow-md"
                      : "w-2.5 bg-border hover:bg-muted-foreground/30"
                  }`}
                />
              );
            })}
            <span className="text-xs text-muted-foreground ml-2 font-medium whitespace-nowrap flex-shrink-0">
              {currentSlide}/{presentation.slideCount}
            </span>
          </div>

          <Button onClick={goNext} disabled={currentSlide === presentation.slideCount} variant="outline" className="gap-2 rounded-full">
            Next <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
