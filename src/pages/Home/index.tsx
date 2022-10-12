import { Hero } from '../../components/Hero';
import { ProductCard } from '../../components/ProductCard';
import { products } from '../../modules/ordering/data';

export function Home() {
  return (
    <div className="flex flex-col items-start">
      <Hero />
      <h2 className="text-3xl font-extrabold mb-14">Nossos cafés</h2>
      <div className="flex flex-row flex-wrap gap-x-8 gap-y-10">
        {products.map((product, index) => (
          <ProductCard key={product.name} index={index} product={product} />
        ))}
      </div>
    </div>
  );
}
