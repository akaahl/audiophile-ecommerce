import * as Yup from "yup";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const validationSchema = Yup.object({
  name: Yup.string().required("Field cannot be empty"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Field cannot be empty"),
  number: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Field cannot be empty"),
  address: Yup.string().required("Field cannot be empty"),
  zipcode: Yup.string().required("Field cannot be empty"),
  city: Yup.string().required("Field cannot be empty"),
  country: Yup.string().required("Field cannot be empty"),
  method: Yup.string().required("Pick one of the payment option"),
  eNumber: Yup.string().when("method", {
    is: "e-money",
    then: Yup.string().required("Field cannot be empty"),
  }),
  ePin: Yup.string().when("method", {
    is: "e-money",
    then: Yup.string().required("Field cannot be empty"),
  }),
});

export const initialValues = {
  name: "",
  email: "",
  number: "",
  address: "",
  zipcode: "",
  city: "",
  country: "",
  method: "e-money",
  eNumber: "",
  ePin: "",
};
