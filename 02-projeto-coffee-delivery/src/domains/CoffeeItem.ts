import { CoffeeTags } from "./CoffeeTags";

export interface CoffeeItem {
  id: number;
  name: string;
  priceInReais: number;
  description: string;
  image: string;
  tags: CoffeeTags[];
}
