import expressoTradicionalImg from '../../assets/products/Type=Expresso.png';
import expressoAmericanoImg from '../../assets/products/Type=Americano.png';
import expressoCremosoImg from '../../assets/products/Type=Expresso Cremoso.png';
import expressoGeladoImg from '../../assets/products/Type=Café Gelado.png';
import cafeComLeiteImg from '../../assets/products/Type=Café com Leite.png';
import latteImg from '../../assets/products/Type=Latte.png';
import capuccinoImg from '../../assets/products/Type=Capuccino.png';
import macchiatoImg from '../../assets/products/Type=Macchiato.png';
import mocaccinoImg from '../../assets/products/Type=Mochaccino.png';
import chocolateQuenteImg from '../../assets/products/Type=Chocolate Quente.png';
import cubanoImg from '../../assets/products/Type=Cubano.png';
import havaianoImg from '../../assets/products/Type=Havaiano.png';
import arabeImg from '../../assets/products/Type=Árabe.png';
import irlandesImg from '../../assets/products/Type=Irlandês.png';
import { Product } from './types';

export const DELIVERY_COST = 3.5;

export const products: Product[] = [
  {
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    price: 9.9,
    description: 'O tradicional café feito com água quente e grãos moídos',
    imgUrl: expressoTradicionalImg,
  },
  {
    tags: ['tradicional'],
    name: 'Expresso Americano',
    price: 9.9,
    description: 'Expresso diluído, menos intenso que o tradicional',
    imgUrl: expressoAmericanoImg,
  },
  {
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    price: 9.9,
    description: 'Café expresso tradicional com espuma cremosa',
    imgUrl: expressoCremosoImg,
  },
  {
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    price: 9.9,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imgUrl: expressoGeladoImg,
  },
  {
    tags: ['tradicional', 'com leite'],
    name: 'Café com leite',
    price: 9.9,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imgUrl: cafeComLeiteImg,
  },
  {
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    price: 9.9,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imgUrl: latteImg,
  },
  {
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    price: 9.9,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imgUrl: capuccinoImg,
  },
  {
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    price: 9.9,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imgUrl: macchiatoImg,
  },
  {
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    price: 9.9,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imgUrl: mocaccinoImg,
  },
  {
    tags: ['especial', 'com leite'],
    name: 'Chocolate  Quente',
    price: 9.9,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imgUrl: chocolateQuenteImg,
  },
  {
    tags: ['especial', 'alcoólico'],
    name: 'Cubano',
    price: 9.9,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imgUrl: cubanoImg,
  },
  {
    tags: ['especial'],
    name: 'Havaino',
    price: 9.9,
    description: 'Bebida adocicada preparada com café e leite de coco',
    imgUrl: havaianoImg,
  },
  {
    tags: ['especial'],
    name: 'Árabe',
    price: 9.9,
    description: 'Bebida preparada com grão de café árabe e especiarias',
    imgUrl: arabeImg,
  },
  {
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    price: 9.9,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imgUrl: irlandesImg,
  },
];
