import * as yup from "yup";
import { EMAIL_REGEXP } from "../constants";

export const getContactFormSchema = (formatMessage) => {
  return yup.object().shape({
    email: yup
      .string()
      .trim()
      .required(formatMessage({ id: "emailRequired" }))
      .email(formatMessage({ id: "emailValid" }))
      .matches(EMAIL_REGEXP, formatMessage({ id: "emailValid" })),
    name: yup.string().required(formatMessage({ id: "nameRequired" })),
    message: yup.string().required(formatMessage({ id: "fieldIsRequired" }))
  });
};
