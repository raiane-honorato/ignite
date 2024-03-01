import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/cart/CartContext";
import { CoffeeItem } from "../../../../domains/CoffeeItem";
import { ItemContainer } from "./styles";

export function CoffeeCard({ coffee }: { coffee: CoffeeItem }) {
  const [amount, setAmount] = useState<number>(1);
  const { addItemToCart } = useContext(CartContext);

  const displayPrice = coffee.priceInReais
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .slice(3);

  return (
    <ItemContainer>
      <img src={coffee.image} />
      <ul className="tag-list">
        {coffee.tags.map((tag) => (
          <li className="tag" key={`${coffee.id}-${tag}`}>
            {tag}
          </li>
        ))}
      </ul>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <div className="card-footer">
        <span>
          <span>R$ </span>
          <span>{displayPrice}</span>
        </span>

        <div>
          <input
            type="number"
            id="minutesAmount"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder="1"
            step={1}
            min={1}
            max={60}
          />
          <button>
            <ShoppingCart
              size={22}
              weight="fill"
              color="white"
              onClick={() => {
                addItemToCart(coffee, amount);
              }}
            />
          </button>
        </div>
      </div>
    </ItemContainer>
  );
}
