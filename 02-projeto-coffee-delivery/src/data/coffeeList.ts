import { CoffeeItem } from "../domains/CoffeeItem";
import { CoffeeTags } from "../domains/CoffeeTags";
import americano from "../assets/coffee/americano.png";
import arabe from "../assets/coffee/arabe.png";
import cafeComLeite from "../assets/coffee/cafeComLeite.png";
import cafeGelado from "../assets/coffee/cafeGelado.png";
import capuccino from "../assets/coffee/capuccino.png";
import chocolateQuente from "../assets/coffee/chocolateQuente.png";
import cubano from "../assets/coffee/cubano.png";
import expresso from "../assets/coffee/expresso.png";
import expressoCremoso from "../assets/coffee/expressoCremoso.png";
import havaiano from "../assets/coffee/havaiano.png";
import irlandes from "../assets/coffee/irlandes.png";
import latte from "../assets/coffee/latte.png";
import macchiato from "../assets/coffee/macchiato.png";
import mocaccino from "../assets/coffee/mocaccino.png";

export const coffeeList: CoffeeItem[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    priceInReais: 9.9,
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: [CoffeeTags.TRADITIONAL],
    image: expresso,
  },
  {
    id: 2,
    name: "Expresso Americano",
    priceInReais: 9.9,
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: [CoffeeTags.TRADITIONAL],
    image: americano,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    priceInReais: 9.9,
    description: "Café expresso tradicional com espuma cremosa",
    tags: [CoffeeTags.TRADITIONAL],
    image: expressoCremoso,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    priceInReais: 9.9,
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: [CoffeeTags.TRADITIONAL, CoffeeTags.COLD],
    image: cafeGelado,
  },
  {
    id: 5,
    name: "Café com Leite",
    priceInReais: 9.9,
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: [CoffeeTags.TRADITIONAL, CoffeeTags.WITH_MILK],
    image: cafeComLeite,
  },
  {
    id: 6,
    name: "Latte",
    priceInReais: 9.9,
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: [CoffeeTags.TRADITIONAL, CoffeeTags.WITH_MILK],
    image: latte,
  },
  {
    id: 7,
    name: "Capuccino",
    priceInReais: 9.9,
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: [CoffeeTags.TRADITIONAL, CoffeeTags.WITH_MILK],
    image: capuccino,
  },
  {
    id: 8,
    name: "Macchiato",
    priceInReais: 9.9,
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: [CoffeeTags.TRADITIONAL, CoffeeTags.WITH_MILK],
    image: macchiato,
  },
  {
    id: 9,
    name: "Mocaccino",
    priceInReais: 9.9,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: [CoffeeTags.TRADITIONAL, CoffeeTags.WITH_MILK],
    image: mocaccino,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    priceInReais: 9.9,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: [CoffeeTags.SPECIAL, CoffeeTags.WITH_MILK],
    image: chocolateQuente,
  },
  {
    id: 11,
    name: "Cubano",
    priceInReais: 9.9,
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: [CoffeeTags.SPECIAL, CoffeeTags.ALCOLIC, CoffeeTags.COLD],
    image: cubano,
  },
  {
    id: 12,
    name: "Havaiano",
    priceInReais: 9.9,
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: [CoffeeTags.SPECIAL],
    image: havaiano,
  },
  {
    id: 13,
    name: "Árabe",
    priceInReais: 9.9,
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: [CoffeeTags.SPECIAL],
    image: arabe,
  },
  {
    id: 14,
    name: "Irlandês",
    priceInReais: 9.9,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: [CoffeeTags.SPECIAL, CoffeeTags.ALCOLIC],
    image: irlandes,
  },
];
