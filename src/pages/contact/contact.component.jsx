import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contact.styles.scss';



const ContactPage = () => {
    const initialValues = {
      name: '',
      email: '',
      message: '',
    };
  
    const validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      message: Yup.string().required('Required'),
    });
  
    const handleSubmit = (values, { resetForm, setSubmitting }) => {
      
      console.log(values);
      //setSubmitting(false);

      setTimeout(() => {
        alert('Message sent successfully!');
        resetForm();
        setSubmitting(false);
      }, 1000);
    };
  
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need assistance, please feel free to contact us using the form below.
        </p>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <Field as="textarea" id="message" name="message" rows="4" />
                <ErrorMessage name="message" component="div" className="error-message" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

export default ContactPage;