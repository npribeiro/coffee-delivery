export const productTags = [
  'tradicional',
  'gelado',
  'com leite',
  'especial',
  'alcoólico',
] as const;

export type ProductTag = typeof productTags[number];

export type Product = {
  name: string;
  imgUrl: string;
  tags: ProductTag[];
  price: number;
  description: string;
};

// product_index: quantity;
export type Cart = {
  [index: number]: number | undefined;
};

export const paymentMethods = [
  'Cartão de Crédito',
  'Cartão de Débito',
  'Dinheiro',
] as const;
export type PaymentMethod = typeof paymentMethods[number];

export type DeliveryInfo = {
  postalCode: string;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: PaymentMethod;
};
