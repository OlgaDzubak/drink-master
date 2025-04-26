import * as Yup from 'yup';
import {isValidFileType} from '../isValidFileType';

export const addDrinkSchema = Yup.object().shape({
      drink: Yup.string()
                .required('This field is required!')
                .min(2, "This field must be 2-30 symbols long")
                .max(35, "This field must be 2-35 symbols long"),
      description: Yup.string()
                      .required('This field is required!')
                      .min(25, "This field must be 25-234 symbols long")
                      .max(234, "This field must be 25-234 symbols long"),
      ingredients: Yup.array()
                      .of(Yup.object().shape({title: Yup.string().required('This field is required!'),
                                              measure: Yup.string().required('This field is required!')})),
      instructions: Yup.string()
                       .required('This field is required!')
                       .min(25, "This field must be 25-2000 symbols long")
                       .max(2000, "This field must be 25-2000 symbols long"),
      category: Yup.string()
                   .required('This field is required!'),
      glass: Yup.string()
                .required('This field is required!'),
      alcoholic: Yup.string()
                    .required('Select the type of drink'),
      drinkThumb: Yup.mixed()
                     .required('Drink photo is required!')
                     .test("is-valid-type", "Wrong file format! Only jpg, jpeg, png files are allowed", value => isValidFileType(value && value.name.toLowerCase(), "image"))
                     .test("is-valid-size", "Max allowed size is 100KB", value => value && value.size <= 102400)
    });