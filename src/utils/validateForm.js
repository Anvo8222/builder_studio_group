import * as yup from "yup";
import { SUPPORTED_FORMATS } from "./supportFormats";

export const createSchema = yup.object().shape({
  name: yup.string().required("Please enter name !"),
  price: yup
    .string()
    .required("Please enter price !")
    .min(1, "Price must be more than 1 $ !"),
  categoryId: yup.string().required("Please choice your category !"),
  // description: yup.string().required("Please enter description !"),
  imgUrl: yup
    .mixed()
    .test("required", "Image not be empty", (value) => value && value.length)
    .test(
      "type",
      "Unsupported",
      (value) => value && value[0] && SUPPORTED_FORMATS.includes(value[0].type),
    )
    .test("size", "Size too big", (value) => {
      if (value && value[0]) {
        return value[0].size < 5 * 1024 * 1024;
      }
      return true;
    }),
});

export const updateSchema = yup.object().shape({
  name: yup.string().required("Please enter name !"),
  price: yup
    .string()
    .required("Please enter price !")
    .min(1, "Price must be more than 1 $ !"),
  categoryId: yup.string().required("Please choice your category !"),
  imgUrl: yup
    .mixed()
    .test("type", "Unsupported", (value) => {
      if (value && value[0]) {
        return SUPPORTED_FORMATS.includes(value[0].type);
      }
      return true;
    })
    .test("size", "Size too big", (value) => {
      if (value && value[0]) {
        return value[0].size < 10 * 1024 * 1024;
      }
      return true;
    }),
});
