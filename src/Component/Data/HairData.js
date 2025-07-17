import Shampoo from "../../img/shampoo.jpg";
import Conditioner from "../../img/conditioner.jpg";
import oil from "../../img/hair-oil.jpg";
import mask from "../../img/mask.jpg";

const HairData = [
  {
    id: 9,
    img: Shampoo,
    price : 400,
    name: "Revitalizing Shampoo",
    title: "Gently cleanses while restoring moisture balanceddd.",
    category:'hair',
    num :1,
  },
  {
    id: 10,
    img: Conditioner,
    price : 500,
    name: "Hydrating Conditioner",
    title: "Leaves hair soft, silky, and manageable.",
    category:'hair',
    num :1,
  },
  {
    id: 11,
    img: oil,
    name: "Nourishing Hair Oil",
    price : 400,
    title: "Repairs damage and adds natural shine.",
    category:'hair',
    num :1,
  },
  {
    id: 12,
    img: mask,
    name: "Deep Conditioning Mask ",
    title: "Intensive treatment for dry or damaged hair.",
    price : 400,
      category:'hair',
      num :1,
  },
];

export default HairData;
