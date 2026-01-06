type RegionFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RegionFilter({ value, onChange }: RegionFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "12px 16px",
        borderRadius: 6,
        border: "1px solid #333",
        background: "#222",
        color: "#fff",
        marginTop: 16,
      }}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
