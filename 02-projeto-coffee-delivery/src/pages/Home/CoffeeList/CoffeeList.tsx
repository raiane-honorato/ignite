import { coffeeList } from "../../../data/coffeeList";
import { CoffeeCard } from "./CoffeeCard/CoffeeCard";
import { CoffeeListSection } from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListSection>
      <h2>Nossos cafés</h2>
      <ul>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </ul>
    </CoffeeListSection>
  );
}
