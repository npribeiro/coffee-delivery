import { ShoppingCart, Trash } from 'phosphor-react';
import { useCallback, useContext, useMemo } from 'react';
import { OrderingContext } from '../../modules/ordering/context';
import { products } from '../../modules/ordering/data';
import { formatBRL } from '../../utils/formatBRL';
import { Counter } from '../Counter';

interface OrderItemProps {
  index: number;
  quantity: number;
}

export function OrderItem({ index, quantity }: OrderItemProps) {
  const { cart, setProduct, removeProduct } = useContext(OrderingContext);

  const product = useMemo(() => products[index], [index]);

  const onIncrease = useCallback(() => {
    setProduct(index, quantity + 1);
  }, [index, quantity, setProduct]);

  const onDecrease = useCallback(() => {
    setProduct(index, quantity - 1);
  }, [index, quantity, setProduct]);

  return (
    <>
      <div className="flex flex-row w-full h-fit min-w-[370px] items-center gap-4">
        <img src={product.imgUrl} className="w-[64px] h-[64px]" />
        <div className="flex flex-col gap-3">
          <p className="text-subtitle">{product.name}</p>
          <div className="flex gap-2 flex-row items-center">
            <Counter
              quantity={quantity}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
            <button
              onClick={() => removeProduct(index)}
              className="btn-primary  uppercase bg-button"
            >
              <Trash className="text-purple" />
              remover{' '}
            </button>
          </div>
        </div>
        <div className="flex-1" />
        <h1 className="text-xs font-normal font-sans place-self-start text-text">
          R${' '}
          <span className="text-2xl font-title">
            {formatBRL.format(product.price * quantity)}
          </span>
        </h1>
      </div>
      <div className="my-6 w-full h-[1px] border-b border-b-button" />
    </>
  );
}
