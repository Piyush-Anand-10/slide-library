import { type Presentation } from "@/data/presentations";
import { Eye, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  presentation: Presentation;
  onView: (p: Presentation) => void;
  index: number;
};

export const PresentationCard = ({ presentation, onView, index }: Props) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Placeholder: in production, this would trigger a real file download
    const link = document.createElement("a");
    link.href = "#";
    link.download = `${presentation.title}.pptx`;
    alert(`Download will start for: ${presentation.title}.pptx\n(Replace with real file URL)`);
  };

  return (
    <div
      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={() => onView(presentation)}
    >
      {/* Gradient header */}
      <div className={`${presentation.gradient} h-36 flex items-center justify-center relative overflow-hidden`}>
        <span className="text-5xl drop-shadow-lg">{presentation.icon}</span>
        <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent" />
        
        {/* Slide count badge */}
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm text-foreground text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
          <FileText className="w-3 h-3" />
          {presentation.slideCount} slides
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-primary/80">
          {presentation.category}
        </span>
        <h3 className="font-heading font-bold text-lg mt-1 text-foreground leading-tight">
          {presentation.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {presentation.description}
        </p>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground font-medium">{presentation.fileSize}</span>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
              onClick={(e) => {
                e.stopPropagation();
                onView(presentation);
              }}
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 hover:bg-secondary/10 hover:text-secondary"
              onClick={handleDownload}
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
