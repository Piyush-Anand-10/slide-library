import { type Presentation } from "@/data/presentations";
import { X, ChevronLeft, ChevronRight, Download, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  presentation: Presentation;
  onClose: () => void;
};

export const PresentationViewer = ({ presentation, onClose }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
        <div className="flex-1 flex items-center justify-center p-8 bg-muted/50 relative">
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
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <Button onClick={goPrev} disabled={currentSlide === 1} variant="outline" className="gap-2 rounded-full">
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>

          {/* Slide indicator */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: Math.min(presentation.slideCount, 10) }, (_, i) => {
              const slideNum = Math.min(
                Math.max(currentSlide - 4, 1) + i,
                presentation.slideCount
              );
              return (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(slideNum)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    slideNum === currentSlide
                      ? "gradient-candy w-6 shadow-md"
                      : "bg-border hover:bg-muted-foreground/30"
                  }`}
                />
              );
            })}
            <span className="text-xs text-muted-foreground ml-2 font-medium">
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
