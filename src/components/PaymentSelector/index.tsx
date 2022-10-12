import { CurrencyDollar } from 'phosphor-react';
import { useCallback, useContext, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { OrderingContext } from '../../modules/ordering/context';
import {
  DeliveryInfo,
  PaymentMethod,
  paymentMethods,
} from '../../modules/ordering/types';
import { PaymentMethodIcon } from '../PaymentMethodIcon';

export function PaymentSelector() {
  const { control } = useFormContext<DeliveryInfo>();

  const { deliveryInfo } = useContext(OrderingContext);
  const [selectedMethod, setSelectedMethod] = useState<
    PaymentMethod | undefined
  >(deliveryInfo && deliveryInfo.paymentMethod);

  const { field, fieldState } = useController({
    control,
    name: 'paymentMethod',
  });
  console.log(fieldState.error);

  const handleClick = useCallback(
    (method: PaymentMethod) => {
      setSelectedMethod(method);
      field.onChange(method);
    },
    [field],
  );

  return (
    <div className="rounded-md bg-card p-10 gap-8 flex flex-col">
      <div className="flex flex-row gap-2">
        <CurrencyDollar className="text-xl mt-1 text-purple" />
        <div>
          <p className="text-subtitle">Pagamento</p>
          <p className="text-sm">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-3" onBlur={field.onBlur}>
        {paymentMethods.map((paymentMethod) => (
          <button
            className={`${fieldState.error ? 'error' : ''} ${
              selectedMethod === paymentMethod ? 'selected' : ''
            } flex flex-row gap-2 bg-button p-4 h-12 flex-1 rounded-md text-xs uppercase items-center hover:bg-hover`}
            key={paymentMethod}
            onClick={() => handleClick(paymentMethod)}
            type="button"
          >
            <PaymentMethodIcon
              method={paymentMethod}
              iconProps={{ className: 'text-purple' }}
            />
            {paymentMethod}
          </button>
        ))}
      </div>
    </div>
  );
}
