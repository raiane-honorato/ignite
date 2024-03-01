import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import coffeeImg from "../../../assets/hero-coffee.png";
import { HeroBackground, HeroContainer } from "./styles";

export function Hero() {
  return (
    <HeroBackground>
      <HeroContainer>
        <div>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="coffee-img">
          <img src={coffeeImg} className="coffee-img" />
        </div>
        <ListIcons />
      </HeroContainer>
    </HeroBackground>
  );
}

const ListIcons = () => {
  return (
    <ul className="list-icons">
      <li>
        <div className="icon-container">
          <ShoppingCart size={16} weight="fill" color="white" />
        </div>
        <span>Compra simples e segura</span>
      </li>
      <li>
        <div className="icon-container">
          <Package size={16} weight="fill" color="white" />
        </div>
        <span>Embalagem mantém o café intacto</span>
      </li>
      <li>
        <div className="icon-container">
          <Timer size={16} weight="fill" color="white" />
        </div>
        <span>Entrega rápida e rastreada</span>
      </li>
      <li>
        <div className="icon-container">
          <Coffee size={16} weight="fill" color="white" />
        </div>
        <span>O café chega fresquinho até você</span>
      </li>
    </ul>
  );
};
