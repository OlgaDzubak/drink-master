import * as Yup from 'yup';

export const addDrinkSchema = Yup.object().shape({
      drink: Yup.string().required('This field is required!').min(2, "This field must be 2-30 symbols long").max(30, "This field must be 2-30 symbols long"),
      description: Yup.string().required('This field is required!').min(25, "This field must be 25-234 symbols long").max(234, "This field must be 25-234 symbols long"),
      ingredients: Yup.array().of(Yup.object().shape({ 
                                                      title: Yup.string().required('This field is required!'),
                                                      measure: Yup.string().required('This field is required!')
                                                    })),
      instructions: Yup.string().required('This field is required!'),
      category: Yup.string().required('This field is required!'),
      glass: Yup.string().required('This field is required!'),
      alcoholic: Yup.string().required('Select the type of drink'),
      drinkThumb: Yup.mixed().required('Drink photo is required!'),
    });