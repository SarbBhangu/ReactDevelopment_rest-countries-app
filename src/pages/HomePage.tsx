import { useEffect, useState } from "react";
import type { Country } from "../types/country";

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,cca3,population,region,capital,flags");

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = (await res.json()) as Country[];
        setCountries(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  if (loading) return <p style={{ padding: 24 }}>Loading countries...</p>;
  if (error) return <p style={{ padding: 24 }}>Error: {error}</p>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Where in the world?</h1>
      <p>Countries loaded: {countries.length}</p>

      <ul>
        {countries.slice(0, 20).map((c) => (
          <li key={c.cca3}>
            {c.name.common} — {c.region}
          </li>
        ))}
      </ul>
    </div>
  );
}

