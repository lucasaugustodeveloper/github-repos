import * as Yup from "yup";

export const headerValidation = Yup.object({
  username: Yup.string().required('Field not empty'),
})
