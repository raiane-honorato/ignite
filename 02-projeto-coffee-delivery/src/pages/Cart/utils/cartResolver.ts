import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { PaymentMethod } from "../../../domains/PaymentMethod";

const cartValidationSchema = zod.object({
  address: zod.object({
    street: zod.string().min(1),
    number: zod.string().min(1),
    additionalInfo: zod.string().optional(),
    city: zod.string().min(1),
    state: zod.string().length(2, "Deve conter 2 caracteres"),
    postalCode: zod.string().length(8, "Deve conter 8 caracteres"),
  }),
  selectedPaymentMethod: zod.nativeEnum(PaymentMethod),
});

export const cartResolver = zodResolver(cartValidationSchema);
