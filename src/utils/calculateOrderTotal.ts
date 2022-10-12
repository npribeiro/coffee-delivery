import { products } from '../modules/ordering/data';

export function calculateOrderTotal(
  cart: [number, number][],
  additional?: number,
): number {
  const itemsTotal = cart
    .map(([index, quantity]) => products[index].price * quantity)
    .reduce((acc, next) => acc + next, 0);
  return itemsTotal + (additional ?? 0);
}
