import { Bank, IconProps, CreditCard, Money } from 'phosphor-react';
import { PaymentMethod } from '../../modules/ordering/types';

interface PaymentMethodIconProps {
  method: PaymentMethod;
  iconProps?: IconProps;
}

export function PaymentMethodIcon({
  method,
  iconProps,
}: PaymentMethodIconProps) {
  switch (method) {
    case 'Cartão de Crédito':
      return <CreditCard {...iconProps} />;
    case 'Cartão de Débito':
      return <Bank {...iconProps} />;
    case 'Dinheiro':
      return <Money {...iconProps} />;
    default:
      return <></>;
  }
}
