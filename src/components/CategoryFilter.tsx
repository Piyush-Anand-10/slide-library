import { categories, type Category } from "@/data/presentations";
import { cn } from "@/lib/utils";

type Props = {
  selected: Category;
  onSelect: (cat: Category) => void;
  counts: Record<string, number>;
};

export const CategoryFilter = ({ selected, onSelect, counts }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-semibold font-body transition-all duration-300",
            selected === cat
              ? "gradient-candy text-primary-foreground shadow-lg shadow-primary/25 scale-105"
              : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
          )}
        >
          {cat}
          {cat !== "All" && counts[cat] ? (
            <span className="ml-1.5 opacity-70">({counts[cat]})</span>
          ) : null}
        </button>
      ))}
    </div>
  );
};
