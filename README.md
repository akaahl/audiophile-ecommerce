# Frontend Mentor - Audiophile E-Commerce Website solution

This is my solution to the [Audiophile E-commerce Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). This is a beautiful-looking e-commerce website app for a range of premium audio products. It allows the user to browse the audio product selections, add or remove them into/from the cart, validate the user field inputs in the check-out page, and display the order confirmation page right after the form validations (with shipping fees and V.A.T).

It is also fully responsive, which features the navigation bar for mobile users to navigate across all the pages. To make this app as close to a full-stack app, I've employed Local Storage Web API, to store user's cart data and display them upon page-refreshed.

Overall, I truly had fun with this challenge. It not only reinforces my CSS skills, but also my skills with Redux, Local Storage, and Framer Motions, among others. I would also like to add that this is my first time utilizing Formik as the primary way of form management. The learning curve was a bit steeper than I initially thought, but it was totally worth it as it helped to save the majority of my time trying implement my own custom validations. Suffice to say, I learnt a great deal in that sense.

## How It Works (GIF)

![Home page](./src/audiophile.gif)

## Demo Link

- Live Site URL: [Audiophile Live Demo](https://audiophile-ecommerce-eight.vercel.app/)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart:-
  1.  Shipping always adds $50 to the order
  2.  VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- Bonus: Keep track of what's in the cart, even after refreshing the browser (localStorage could be used for this if you're not building out a full-stack app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [React Redux](https://react-redux.js.org/) - For global state management in React
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - To handle asynchronous logic interaction with redux store
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) - To handle routing (dynamic) in React
- [Styled Components](https://styled-components.com/) - For styling and custom props handling
- [Framer Motion](https://www.framer.com/motion/) - For micro interaction animations throughout the app
- [React Hook Inview](https://github.com/bitmap/react-hook-inview) - To detect if an element is within the viewport range; uses React hook
- [UUID](https://www.npmjs.com/package/uuid) - To generate a unique key value when trying to display elements using Array.prototype.map method (or the likes)
- [Formik](https://formik.org/) - A form management library for React
- [Formik Focus Error](https://github.com/tiaanduplessis/formik-error-focus) - Scroll to the first error in your Formik form and set focus
- [Yup](https://www.npmjs.com/package/yup) - To be used in conjunction with Formik; a client-side Javacript schema builder for value parsing and validation. It can validates email, strings, numbers, and so forth, along with many useful features.

### What I learned

In my opinion, this project was not substantially as difficult as the level indicated (Guru), compared to the other Advanced level projects. That is not to say that I did not learn much from it, but on the contrary, I have learnt many things when it comes to using external library to parse the form validation in addition to reinforcing my other skills (CSS, React Redux, etc). I enjoyed this process of learning new things as it is also my first time bulding an e-commerce site. With that said, below are some of the things that I have learned from this challenge:-

#### Using Promise.all():-

Fetching data from a single end-point is normally a breeze, and I could simply use the conventional fetch API and store the data into a variable. But the problem arises, when there is a need to fetch multiple data from multiple end-points. This is where Promise.all() solves this issue; it takes in an array of promises, executes them, and wait until all of the operations are done. This is a very powerful way of handling multiple asynchronous operations; not just limited to fetching data. Below is the code snippets in which I implemented this method:-

```
  Promise.all([
    fetch(dataUrl).then((val) => val.json()),
    fetch(cartUrl).then((val) => val.json()),
  ])
    .then(([data, cart]) => {
      const storageData = {
        data,
        cart,
        total: 0,
      };

      localStorage.setItem("storage", JSON.stringify(storageData));

      dispatch({
        type: "FETCH_DATA",
        payload: {
          data,
          cart,
          total: storageData.total,
        },
      });
    })
    .catch((err) => console.log(err));
```

Note that, there is no need to chain multiple promises and make the codes more verbose. Conveniently enough, the output array maintains the same order, so destructuring the array is possible, if it is so desired like I have done above.

#### Custom useScroll() hook:-

This is a very useful hook that can be used across multiple components when trying animate elements if they are within the viewport range. It uses two other dependencies, namely the useAnimation() hook from Framer Motion and useInView() hook from React-Hook-Inview.

```
import { useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("animate");
  }
  return [element, controls];
};
```

```
<motion.div
        className="gallery-one"
        ref={element}
        variants={leftSlide}
        initial="initial"
        animate={controls}
      >
        ......Children elements
      </motion.div>
```

As can be noted from the above, the useinView() hook returns both an element ref (which will 'hooked' onto an element as a ref) and the view variable, (which will be set to true if the element is within the viewport threshold). Once the view is set to true, the controls variable will run the animation as indicated by the animate props in the motion.div element.

#### Form validation using Formik and Yup

When building a form component, all the necessary onChange and onSubmit handlers can a be nightmare to manage, especially when the need to scale the number of input elements rose. Form management library like Formik, makes it easy to build an easily validated and intuitive form.

```
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./utils";
import { ConnectedFocusError } from "focus-formik-error";

<Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {formik => {
        return (
          <Form>
           <ConnectedFocusError />
            <div className="billing-details">
                <div className="name">
                    <div className="top">
                      <label htmlFor="name">Name</label>
                      <ErrorMessage name="name" component={TextError} />
                    </div>

                    <Field
                      type="text"
                      id="name"
                      placeholder="Alexei Ward"
                      className="input-el"
                      name="name"
                    />
                  </div>
            </div>
          </Form>
        )
      }}
</Formik>
```

The main components of Formik are: Formik, Form, Field, and ErrorMessage. The top level Formik component is used to encapsulates the entire form, which contains the props 'formik'. The Form component is used as a substitute for the html <form> element itself, which inherits the formik props that can be used throughout the form.

Meanwhile, the Field component is a substitute for html <input> element, and ErrorMessage component is used to display error message whenever the Field input is "touched" without entring data, during form submission, and so forth. As can be seen, there is no need to hook up onChange handlers, and bind the value to each Field component. The Formik component automatically does this for us behind the scenes, which makes it very manageable for a large form.

Additionally, I have also used another library, which is the 'Focus Formik Error', that automatically scrolls to the first input element that has a validation error. This results in a great user experience as user does not have to frustratingly look for the affected Field component.

```
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
```

As for the validation, I created a separate validation schema using the Yup library based on the initial values required for all of the Field components. The codes above show how intuitive and easy it is to validate a particular input element based on the requirement. I only have to specify the type of input (in most cases, a string) and add the required methods, along the error message inside of it. Ultimately, the ErrorMessage will be displayed automatically without any needs to conditionally render the component.

### Continued development

I do not have any plans to integrate back-end functionality to this app, nor add any new features. At most, I will only be adding some micro animations to make it more visually pleasing to the user. Hence, this app will remain as it is right now.

### Useful resources

- [Formik Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu) - This is a great in-depth tutorial on Formik. I teaches the most basic way of using Formik all the to the advanced level. It also includes Yup integration with Formik. This is truly a great resource.

- [Promise.all() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) - An official MDN documentation on how to use Promise.all().

- [StackOverflow thread on validating phone number with Yup JS](https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup) - This is where I get the regex for validating phone numbers in Yup.

- [React Hook Inview documentation](https://github.com/bitmap/react-hook-inview) - A GitHub repo for React Hook Inview, detailing its methodologies and usage.

## Author

You may reach out to me on the following links:-

- Frontend Mentor - [@akaahl](https://www.frontendmentor.io/profile/akaahl)
- Twitter - [@akaahl1](https://twitter.com/akaahl1)

Hope to connect with you all and chat! :D

## Acknowledgments

I would like to thank to FrontEnd Mentor for creating another beautiful and engaging challenge. Their platform is the best. Also, I would like to give a shout out to every developers out there for this awesome community that we have, regardless of where you are from. God bless you all.
