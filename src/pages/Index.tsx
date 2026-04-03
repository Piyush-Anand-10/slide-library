import { useState, useMemo } from "react";
import { presentations, categories, type Category, type Presentation } from "@/data/presentations";
import { CategoryFilter } from "@/components/CategoryFilter";
import { PresentationCard } from "@/components/PresentationCard";
import { PresentationViewer } from "@/components/PresentationViewer";
import { SearchBar } from "@/components/SearchBar";
import { FileText } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [viewing, setViewing] = useState<Presentation | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    presentations.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return presentations.filter((p) => {
      const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, search]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="gradient-candy py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary-foreground/20"
              style={{
                width: `${60 + i * 40}px`,
                height: `${60 + i * 40}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `pulse ${3 + i * 0.5}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <FileText className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-semibold text-primary-foreground font-body">
              {presentations.length} Presentations
            </span>
          </div>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
            Exploring Sanskrit Vocabulary: A Categorized Study with Pronunciation Support
          </h1>
          <p className="text-primary-foreground/80 mt-4 text-lg font-body max-w-xl mx-auto">
            Browse, view, and download all project presentations organized by topic
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 -mt-6 relative z-20 pb-16">
        {/* Search + Filter */}
        <div className="bg-card rounded-2xl border border-border p-6 shadow-lg shadow-primary/5 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
            <SearchBar value={search} onChange={setSearch} />
            <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
              Showing {filtered.length} of {presentations.length}
            </span>
          </div>
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} counts={categoryCounts} />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <PresentationCard key={p.id} presentation={p} onView={setViewing} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🔍</span>
            <p className="text-muted-foreground font-body text-lg">No presentations found</p>
            <p className="text-muted-foreground/60 text-sm mt-1">Try a different search or category</p>
          </div>
        )}
      </main>

      {/* Viewer Modal */}
      {viewing && <PresentationViewer presentation={viewing} onClose={() => setViewing(null)} />}
    </div>
  );
};

export default Index;
