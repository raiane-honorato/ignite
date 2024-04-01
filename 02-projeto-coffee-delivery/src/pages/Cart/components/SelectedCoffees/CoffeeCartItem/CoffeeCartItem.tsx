import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../../../contexts/cart/CartContext";
import { CartItem } from "../../../../../domains/Cart";
import { defaultTheme } from "../../../../../styles/themes/default";
import { CoffeeCartListItem } from "./styles";

export function CoffeeCartItem({ cartItem }: { cartItem: CartItem }) {
  const { coffee, amount } = cartItem;

  const { changeItemAmountInCart } = useContext(CartContext);

  const displayPrice = (coffee.priceInReais * amount).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CoffeeCartListItem key={coffee.id}>
      <img src={coffee.image} />
      <div className="name-amount-container">
        <span>{coffee.name}</span>
        <input
          type="number"
          id="minutesAmount"
          value={amount}
          onChange={(e) =>
            changeItemAmountInCart(coffee, parseInt(e.target.value))
          }
          placeholder="1"
          step={1}
          min={1}
          max={60}
        />
        <button onClick={() => changeItemAmountInCart(coffee, 0)}>
          <Trash size={16} color={defaultTheme.purple} />
          Remover
        </button>
      </div>
      <span className="price">{displayPrice}</span>
    </CoffeeCartListItem>
  );
}
