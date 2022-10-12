import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import deliveryImg from '../../assets/Illustration.svg';
import { OrderingContext } from '../../modules/ordering/context';

export function OrderConfirmed() {
  const { deliveryInfo } = useContext(OrderingContext);

  if (
    !deliveryInfo ||
    !deliveryInfo.street ||
    !deliveryInfo.city ||
    !deliveryInfo.state ||
    !deliveryInfo.paymentMethod ||
    !deliveryInfo.number ||
    !deliveryInfo.neighborhood
  ) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col xl:items-start gap-10 mt-4 items-center">
      <div>
        <h1 className="text-yellow-dark text-3xl">Uhu! Pedido confirmado</h1>
        <p className="text-subtitle text-xl">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>
      <div className="flex flex-col-reverse xl:flex-row gap-10">
        <div className="card bg-red p-[1px] bg-gradient-to-br from-yellow to-purple">
          <div className="flex flex-col items-start bg-background h-full card p-10 gap-6 min-w-[576px]">
            <div className="flex flex-row items-center gap-3">
              <div className="bg-purple p-2 rounded-full text-background">
                <MapPin weight="fill" />
              </div>
              <div className="flex flex-col items-start">
                <p>
                  Entrega em{' '}
                  <span className="font-bold">{`${deliveryInfo.street}, ${deliveryInfo.number}`}</span>
                </p>
                <p>{`${deliveryInfo.neighborhood} - ${deliveryInfo.city}, ${deliveryInfo.state}`}</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="bg-yellow p-2 rounded-full text-background">
                <Clock weight="fill" />
              </div>
              <div className="flex flex-col items-start">
                <p>Previsão de entrega</p>
                <p className="font-bold">20 min - 30 min</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="bg-yellow-dark p-2 rounded-full text-background">
                <CurrencyDollar weight="fill" />
              </div>
              <div className="flex flex-col items-start">
                <p>Pagamento na entrega</p>
                <p className="font-bold">{deliveryInfo.paymentMethod}</p>
              </div>
            </div>
          </div>
        </div>
        <img src={deliveryImg} />
      </div>
    </div>
  );
}
