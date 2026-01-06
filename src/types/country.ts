export type Country = {
  name: {
    common: string;
  };
  cca3: string;
  population: number;
  region: string;
  capital?: string[];
  flags: {
    svg?: string;
    png?: string;
    alt?: string;
  };
};
