import { useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addUser } from '../../redux/todoSlice';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function ContactForm() {
  const handleSubmite = (values, { resetForm }) => {
    const id = nanoid();
    dispatch(addUser({ ...values, id }));
    resetForm();
  };
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required(),
    number: Yup.number().required(),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmite}
      className={s.form}
      validationSchema={SignupSchema}
    >
      <Form>
        <label htmlFor="name" className={s.label}>
          Name:
        </label>
        <div>
          <ErrorMessage name="name" />
        </div>

        <Field
          placeholder={'Enter your  Name'}
          className={s.input}
          type="text"
          name="name"
        />

        <label htmlFor="number" className={s.label}>
          Number:
        </label>
        <div>
          <ErrorMessage name="number" />
        </div>

        <Field
          placeholder={'Enter your  Number'}
          className={s.input}
          type="tel"
          name="number"
        />

        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
