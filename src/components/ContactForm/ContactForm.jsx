import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Name to long")
    .required("Please, fill in the field!"),
  number: Yup.number()
    .min(0, "Number must be at least 3 symb long")
    .required("Please, fill in the field!"),
});

export const ContactForm = ({ onAdd }) => {
  const usernameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formWrap}>
          <label className={css.description} htmlFor={usernameFieldId}>
            Username
          </label>
          <Field
            className={css.fieldInput}
            type="text"
            name="name"
            id={usernameFieldId}
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formWrap}>
          <label className={css.description} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.fieldInput}
            type="number"
            name="number"
            id={numberFieldId}
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add user
        </button>
      </Form>
    </Formik>
  );
};
