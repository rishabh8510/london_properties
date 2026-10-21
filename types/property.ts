export interface PropertyHighlight {
  label: string;
  value: string;
}

export interface Property {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  address: string;
  size: string;
  suitableFor: string;
  price: string;
  tenure: string;
  status: string;
  epc: string;
  image: string;
  description: string;
  features: string[];
  highlights: PropertyHighlight[];
}
