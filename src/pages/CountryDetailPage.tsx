import { Link } from "react-router-dom";
import type { Country } from "../types/country";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  const name = country.name.common;
  const population = country.population.toLocaleString();
  const region = country.region;
  const capital = country.capital?.[0] ?? "N/A";

  return (
    <Link
      to={`/country/${country.cca3}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #333",
          borderRadius: 8,
          overflow: "hidden",
          width: 260,
          background: "#222",
        }}
      >
        <img
          src={country.flags.png || country.flags.svg}
          alt={country.flags.alt || `Flag of ${name}`}
          style={{ width: "100%", height: 150, objectFit: "cover" }}
        />

        <div style={{ padding: 16 }}>
          <h3 style={{ margin: "0 0 12px 0" }}>{name}</h3>
          <p style={{ margin: "6px 0" }}>
            <strong>Population:</strong> {population}
          </p>
          <p style={{ margin: "6px 0" }}>
            <strong>Region:</strong> {region}
          </p>
          <p style={{ margin: "6px 0" }}>
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
