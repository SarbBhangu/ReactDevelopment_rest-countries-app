export type Country = {
  name: { common: string };
  cca3: string;
  population: number;
  region: string;
  capital?: string[];
  borders?: string[];
  flags: { svg?: string; png?: string; alt?: string };
};

