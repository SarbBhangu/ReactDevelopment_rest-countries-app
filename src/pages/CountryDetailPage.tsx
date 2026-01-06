import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Country } from "../types/country";

export default function CountryDetailPage() {
  const { code } = useParams();

  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountry() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}?fields=name,cca3,population,region,capital,flags,borders`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch country details");
        }

        const data = await response.json();
        const result = Array.isArray(data) ? data[0] : data;

        setCountry(result);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    if (code) {
      fetchCountry();
    }
  }, [code]);

  if (loading) return <p style={{ padding: 24 }}>Loading country...</p>;
  if (error) return <p style={{ padding: 24 }}>Error: {error}</p>;
  if (!country) return <p style={{ padding: 24 }}>Country not found.</p>;

  const name = country.name.common;
  const population = country.population.toLocaleString();
  const region = country.region;
  const capital = country.capital?.[0] ?? "N/A";
  const borders = country.borders ?? [];

  return (
    <div style={{ padding: 24 }}>
      <Link to="/">← Back</Link>

      <h1 style={{ marginTop: 16 }}>{name}</h1>

      <img
        src={country.flags.png || country.flags.svg}
        alt={country.flags.alt || `Flag of ${name}`}
        style={{ width: 320, marginTop: 12, borderRadius: 8 }}
      />

      <p style={{ marginTop: 16 }}>
        <strong>Population:</strong> {population}
      </p>
      <p>
        <strong>Region:</strong> {region}
      </p>
      <p>
        <strong>Capital:</strong> {capital}
      </p>

      <div style={{ marginTop: 24 }}>
        <strong>Border Countries:</strong>

        {borders.length === 0 ? (
          <p>None</p>
        ) : (
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginTop: 8,
            }}
          >
            {borders.map((border) => (
              <Link
                key={border}
                to={`/country/${border}`}
                style={{
                  padding: "6px 12px",
                  border: "1px solid #333",
                  borderRadius: 4,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {border}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


