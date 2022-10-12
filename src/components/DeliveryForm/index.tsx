import { MapPinLine } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { DeliveryInfo } from '../../modules/ordering/types';

export function DeliveryForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<DeliveryInfo>();

  return (
    <div className="rounded-md bg-card p-10 gap-8 flex flex-col">
      <div className="flex flex-row gap-2">
        <MapPinLine className="mt-1 text-yellow-dark text-xl" />
        <div>
          <p className="text-subtitle">Endereço de entrega</p>
          <p className="text-sm">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-[minmax(180px,_3fr)_minmax(250px,_4fr)_minmax(60px,_1fr)]">
        <input
          placeholder="CEP"
          {...register('postalCode')}
          className={`${
            errors.postalCode ? 'error' : ' '
          } focus:outline-0 focus:ring-1 focus:ring-yellow-dark`}
        />
        <div className="col-span-2" />
        <input
          placeholder="Rua"
          className={`${
            errors.street ? 'error' : ''
          } col-span-3 focus:outline-0 focus:ring-1 focus:ring-yellow-dark`}
          {...register('street')}
        />
        <input
          placeholder="Número"
          {...register('number')}
          className={`${
            errors.number ? 'error' : ''
          } focus:outline-0 focus:ring-1 focus:ring-yellow-dark`}
        />
        <input
          placeholder="Complemento"
          className={`${
            errors.complement ? 'error' : ''
          } col-span-2 focus:outline-0 focus:ring-1 focus:ring-yellow-dark`}
          {...register('complement')}
        />
        <input
          placeholder="Bairro"
          {...register('neighborhood')}
          className={`${
            errors.neighborhood ? 'error' : ' '
          } focus:outline-0 focus:ring-1 focus:ring-yellow-dark`}
        />
        <input
          aria-invalid="true"
          placeholder="Cidade"
          {...register('city')}
          className={`${
            errors.city ? 'error' : ' '
          } focus:outline-0 focus:ring-1 focus:ring-yellow-dark`}
        />
        <input
          className={`${
            errors.state ? 'error' : ' '
          } focus:outline-0 focus:ring-1 focus:ring-yellow-dark`}
          aria-invalid={!!errors.state}
          placeholder="UF"
          {...register('state')}
        />
      </div>
    </div>
  );
}
