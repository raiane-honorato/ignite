export enum PaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  MONEY = "MONEY",
}

export const paymentMethodDescription = {
  [PaymentMethod.CREDIT_CARD]: "Cartão de crédito",
  [PaymentMethod.DEBIT_CARD]: "Cartão de débito",
  [PaymentMethod.MONEY]: "Dinheiro",
};
