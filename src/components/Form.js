import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css'; // Example CSS file

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required'),
  lastName: Yup.string()
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const FormComponent = () => (
  <div className="form-container">
    <h2>Form Validation with Formik and Yup</h2>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" />
        <ErrorMessage name="firstName" component="div" className="error-message" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" />
        <ErrorMessage name="lastName" component="div" className="error-message" />

        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage name="email" component="div" className="error-message" />

        <label htmlFor="phoneNumber">Phone Number</label>
        <Field id="phoneNumber" name="phoneNumber" />
        <ErrorMessage name="phoneNumber" component="div" className="error-message" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />
        <ErrorMessage name="password" component="div" className="error-message" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field id="confirmPassword" name="confirmPassword" type="password" />
        <ErrorMessage name="confirmPassword" component="div" className="error-message" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default FormComponent;
