import { ShoppingCart } from 'phosphor-react';
import { useCallback, useContext, useState } from 'react';
import { OrderingContext } from '../../modules/ordering/context';
import { Product } from '../../modules/ordering/types';
import { formatBRL } from '../../utils/formatBRL';
import { Counter } from '../Counter';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { cart, addProduct } = useContext(OrderingContext);
  const [quantity, setQuantity] = useState(1);

  const onIncrease = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const onDecrease = useCallback(() => {
    setQuantity((prev) => Math.max(prev - 1, 0));
  }, []);

  const onAdd = useCallback(() => {
    addProduct(index, quantity);
  }, [addProduct, index, quantity]);

  return (
    <div className="card flex flex-col items-center bg-card w-64 h-80 px-5 pb-5 gap-2">
      <img src={product.imgUrl} className="-translate-y-5 scale-[1.2]" />
      <div className="flex flex-row gap-1">
        {product.tags.length > 0 ? (
          product.tags.map((tag) => (
            <div key={tag} className="tag bg-yellow-light text-yellow-dark">
              {tag}
            </div>
          ))
        ) : (
          <div className="tag select-none opacity-0">placeholder</div>
        )}
      </div>
      <h3 className="text-xl">{product.name}</h3>
      <p className="text-label text-sm text-center">{product.description}</p>
      <div className="flex-1" />
      <div className="flex w-full flex-row justify-between items-center font-bold">
        <h1 className="text-xs font-normal font-sans text-text">
          R${' '}
          <span className="text-2xl font-title font-extrabold">
            {formatBRL.format(product.price)}
          </span>
        </h1>
        <div className="flex gap-2 flex-row items-center ">
          <Counter
            quantity={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
          <button
            onClick={onAdd}
            className="btn-primary bg-purple-dark text-card hover:bg-purple "
          >
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
