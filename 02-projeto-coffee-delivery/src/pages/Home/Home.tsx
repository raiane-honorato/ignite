import { CoffeeList } from "./CoffeeList/CoffeeList";
import { Hero } from "./Hero/Hero";

export function Home() {
  return (
    <div>
      <Hero />
      <CoffeeList />
    </div>
  );
}
