import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useFormContext } from "react-hook-form";
import {
  PaymentMethod,
  paymentMethodDescription,
} from "../../../../domains/PaymentMethod";
import { defaultTheme } from "../../../../styles/themes/default";
import { CompleteOrderSection } from "./styles";

export function CompleteOrder() {
  const { register, watch, setValue } = useFormContext();

  const selectedPaymentMethod = watch("selectedPaymentMethod");

  const paymentMethodButtonList = [
    {
      value: PaymentMethod.CREDIT_CARD,
      description: paymentMethodDescription[PaymentMethod.CREDIT_CARD],
      icon: <CreditCard size={16} color={defaultTheme.purple} />,
    },
    {
      value: PaymentMethod.DEBIT_CARD,
      description: paymentMethodDescription[PaymentMethod.DEBIT_CARD],
      icon: <Bank size={16} color={defaultTheme.purple} />,
    },
    {
      value: PaymentMethod.MONEY,
      description: paymentMethodDescription[PaymentMethod.MONEY],
      icon: <Money size={16} color={defaultTheme.purple} />,
    },
  ];

  return (
    <CompleteOrderSection>
      <h2>Complete seu pedido</h2>
      <form>
        <section>
          <div className="section-description">
            <MapPinLine size={32} color={defaultTheme["yellow-dark"]} />
            <h3>Endereço de Entrega</h3>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
          <div className="input-wrapper">
            <input
              aria-label="CEP"
              id="postalCode"
              placeholder="CEP"
              {...register("address.postalCode")}
            ></input>

            <input
              aria-label="Rua"
              id="street"
              placeholder="Rua"
              {...register("address.street")}
            ></input>

            <input
              aria-label="Número"
              id="number"
              placeholder="Número"
              {...register("address.number")}
            ></input>

            <input
              aria-label="Complemento"
              id="additionalInfo"
              placeholder="Complemento"
              {...register("address.additionalInfo")}
            ></input>

            <input
              aria-label="Cidade"
              id="city"
              placeholder="Cidade"
              {...register("address.city")}
            ></input>

            <input
              aria-label="UF"
              id="state"
              placeholder="UF"
              {...register("address.state")}
            ></input>
          </div>
        </section>

        <section>
          <div className="section-description">
            <CurrencyDollar size={32} color={defaultTheme["purple"]} />
            <h3>Pagamento</h3>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
          <ul className="buttons-wrapper">
            {paymentMethodButtonList.map((button) => (
              <button
                type="button"
                key={button.value}
                onClick={() =>
                  setValue("selectedPaymentMethod", button.value, {
                    shouldValidate: true,
                  })
                }
                aria-selected={button.value === selectedPaymentMethod}
              >
                {button.icon}
                {button.description}
              </button>
            ))}
          </ul>
        </section>
      </form>
    </CompleteOrderSection>
  );
}
