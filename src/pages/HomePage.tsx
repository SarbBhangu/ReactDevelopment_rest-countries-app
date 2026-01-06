import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import type { Country } from "../types/country";

export default function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca3,population,region,capital,flags"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data: Country[] = await response.json();
        setCountries(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion = region ? country.region === region : true;

    return matchesSearch && matchesRegion;
  });

  if (loading) {
    return <p className="page-container">Loading countries...</p>;
  }

  if (error) {
    return <p className="page-container">Error: {error}</p>;
  }

  return (
    <div className="page-container">
      <h1>Where in the world?</h1>

      {/* Search + Filter */}
      <div className="filters-row">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      <p className="results-text">
        Showing {Math.min(filteredCountries.length, 20)} of{" "}
        {filteredCountries.length} results
      </p>

      {/* Countries Grid */}
      <div className="countries-grid">
        {filteredCountries.slice(0, 20).map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}




