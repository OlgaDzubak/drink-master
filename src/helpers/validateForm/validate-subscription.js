import * as Yup from 'yup';

 export const subscriptionSchema = Yup.object({
    email: Yup.string()
              .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, 'Incorrect email format')
              .required(`This field is required`),
  });