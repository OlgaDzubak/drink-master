import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
            .max(50, 'Email is too long (maximum 50 symbols are allowed)')
            .email('Wrong format of email!')
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Wrong format of email!',)
            .required("Email is required!"),
  password: Yup.string()
               .min(6, 'Password is too short (6-30 symbols are allowed)')
               .max(30, 'Password is too long (6-30 symbols are allowed)')
               .trim()
               .required("Password is required!"),
});
