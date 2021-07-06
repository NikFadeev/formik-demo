import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

type Values = {
  firstName: string;
  lastName: string;
  email: string;
}

function App() {
  return (
    <div className="App">
      <h1>Signup</h1>
      <Formik initialValues={{
        firstName: '',
        lastName: '',
        email: ''
      }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          console.log(JSON.stringify(values, null, 2))
          console.log(values.email);
      }}>
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John"></Field>

          <label htmlFor="lastName">First Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe"></Field>

          <label htmlFor="email"></label>
          <Field id="email" name="email" placeholder="john@acme.com" type="email" />
          
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
