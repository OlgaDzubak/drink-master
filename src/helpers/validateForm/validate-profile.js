import * as Yup from 'yup';
import {isValidFileType} from '../isValidFileType';

export const ProfileSchema = Yup.object().shape({
  name: Yup.string()
           .min(2, 'Name is too short (minimum 2 symbols are allowed)')
           .max(50,'Name is too long (maximum 50 symbols are allowed)')
           .trim(),
  avatar: Yup.mixed()
             .test("is-valid-type", "Wrong file format! Only jpg, jpeg, png, avif, bmp, webp files are allowed", value => {
                  return value ? isValidFileType(value && value.name.toLowerCase(), "image") : true;
                }
              )
             .test("is-valid-size", "Max allowed size is 100KB", value => {
                  return value ? value.size <= 102400 : true;
                }
             )
});