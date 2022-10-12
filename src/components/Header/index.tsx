import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import { OrderingContext } from '../../modules/ordering/context';

interface HeaderProps {
  hasScrolled: boolean;
}

export function Header({ hasScrolled }: HeaderProps) {
  const { cart } = useContext(OrderingContext);

  const itemsOnCart = useMemo(() => {
    const vals = Object.values(cart).filter(
      (val) => val !== undefined,
    ) as number[];
    return vals.reduce((acc, next) => acc + next, 0);
  }, [cart]);

  return (
    <div
      className={`flex-row px-40 py-8 flex justify-between z-20 transition-shadow ease-in-out delay-150 ${
        hasScrolled ? 'shadow-md' : 'shadow-transparent'
      }`}
    >
      <Link to="/">
        <img src={logo} />
      </Link>
      <div className="flex flex-row gap-2">
        <button className="btn-primary bg-purple-light text-purple-dark">
          <MapPin className="text-purple " weight="fill" />
          Paulínia, SP
        </button>
        <Link to="/checkout" className="btn-primary relative bg-yellow-light">
          {itemsOnCart > 0 && (
            <div className="absolute text-xs flex items-center font-bold leading-3 justify-center rounded-full bg-yellow-dark text-white w-[20px] h-[20px] -top-[10px] -right-[10px]">
              {itemsOnCart}
            </div>
          )}
          <ShoppingCart className="text-yellow-dark text-xl" weight="fill" />
        </Link>
      </div>
    </div>
  );
}
