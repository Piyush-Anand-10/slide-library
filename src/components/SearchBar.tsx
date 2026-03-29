import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search presentations..."
        className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
      />
    </div>
  );
};
