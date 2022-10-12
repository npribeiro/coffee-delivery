import { Minus, Plus } from 'phosphor-react';

interface CounterProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function Counter({ quantity, onIncrease, onDecrease }: CounterProps) {
  return (
    <div className="flex flex-row bg-button rounded-md gap-1 p-2 w-[72px] justify-between text-purple">
      <button
        disabled={quantity === 1}
        className="disabled:text-label disabled:cursor-not-allowed"
        onClick={onDecrease}
      >
        <Minus className="text-base hover:text-purple-dark font-bold" />
      </button>
      <p className="leading-5 text-title font-normal">{quantity}</p>
      <button onClick={onIncrease}>
        <Plus className="text-base hover:text-purple-dark font-bold" />
      </button>
    </div>
  );
}
