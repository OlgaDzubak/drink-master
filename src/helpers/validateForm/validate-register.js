import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
                .matches(/^([a-zA-Z\.\-\_]+)*([ ]{0,1})(([a-zA-Z]+)[0-9]*)$/, 'Name must start with a letter and can contain letters, numbers and symbols ". - _"')
                .min(2, 'Name must contain at least 2 characters')
                .max(30, 'Too much characters. 30 characters are allowed maximum')
                .trim()
                .required("Name is required"),
  birthdate: Yup.string()
                .matches(/^\d{2}\/\d{2}\/\d{4}$/i, 'Wrong date format',)
                .test('isValidDate', 'Wrong date', function (value) {

                          if (!value) return true; 

                          const parts = value.split('/');
                          const day = parseInt(parts[0], 10);
                          const month = parseInt(parts[1], 10);
                          const year = parseInt(parts[2], 10);
                          
                          const today = new Date();
                          const curDateStr = parts[2] + "-" + parts[1] + "-" + parts[0] + "T00:00:00";
                          const date_ = new Date(curDateStr);

                          if (
                              isNaN(day) ||
                              isNaN(month) ||
                              isNaN(year) ||
                              day < 1 ||
                              day > 31 ||
                              month < 1 ||
                              month > 12 ||
                              year < (today.getFullYear() - 120) || 
                              year > today.getFullYear() ||
                              date_ >= today) {
                                return false;
                              }
                              
                          return true;})
                .required("Birthdate is required"),
  email: Yup.string()
                .min(6, 'Email must contain at least 6 characters')
                .max(50, 'Too much characters. 50 characters are allowed maximum')
                .email('Wrong email format')
                .matches(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/, 'Wrong email format')
                .required("Email is required"),
  password: Yup.string()
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters')
                .min(8, 'Password must contain at least 8 characters')
                .max(30, 'Too much characters. 30 characters are allowed maximum')
                .trim()
                .required("Password is required"),
});
