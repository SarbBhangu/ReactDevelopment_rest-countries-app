type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "12px 16px",
        width: "100%",
        maxWidth: 400,
        marginTop: 16,
        borderRadius: 6,
        border: "1px solid #333",
        background: "#222",
        color: "#fff",
      }}
    />
  );
}
