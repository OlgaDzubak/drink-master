import * as Yup from 'yup';

export const emailTokenSchema = Yup.object().shape({
  verificationToken: Yup.string().trim().required("Verificatiion code is required!"),
});