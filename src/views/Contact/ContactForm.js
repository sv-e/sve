import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import emailjs from "@emailjs/browser";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { getContactFormSchema } from "../../utils/validation/yupContactForm";
import Success from "./Success";

import Icon from "../../components/Icon";

export default function ContactForm({ isHome }){
  const { formatMessage } = useIntl();

  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const schema = getContactFormSchema(formatMessage);

  const handleSubmit = async (values, { setStatus, setErrors }) => {
    try {
      emailjs
            .send(
              "default_service",
              "template_21hktbk",
              values,
              "CqTq9HDX6oPy0uT62"
            )
            .then(
              (result) => {
                console.log(result.text);
                handleShowSuccess();
              },
              (err) => {
                console.log(err.text);
                console.error(err);
                setStatus(err.message);
              }
            );
    } catch (err) {
      console.error(err);
      setStatus(err.message);
    }
  };

  return (
    <>
      <Success show={showSuccess} onHide={handleCloseSuccess} />

      <Formik
        enableReinitialize
        validateOnChange
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          status
        }) => (
          <Form
            className="w-full mx-auto"
            onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div
                className="
                  w-full
                  md:w-1/2
                  px-3
                  mb-6
                  md:mb-0
                  relative
                  text-left
                ">
                <div className="relative">
                  <Field                  
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="
                      appearance-none
                      text-sm
                      block
                      w-full
                      bg-transparent
                      border-b
                      text-sev-dark
                      py-2
                      px-0
                      mb-0
                      leading-tight
                      focus:outline-none
                      focus:bg-transparent
                      border-sev-gray-100
                      focus:border-sev-gray-300
                      dark:text-sev-white
                      dark:border-sev-gray-300
                      dark:focus:border-white
                    "
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.name && touched.name && (
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="
                        text-red-500
                        text-[10px]
                        mt-2
                      "
                    />
                  )}
                </div>
              </div>
              <div
                className="
                  w-full
                  md:w-1/2
                  px-3
                  mb-6
                  md:mb-0
                  relative
                  text-left
                ">
                  <div className="relative">
                    <Field                  
                      type="text"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      className="
                        appearance-none
                        text-sm
                        block
                        w-full
                        bg-transparent
                        border-b
                        text-sev-dark
                        py-2
                        px-0
                        mb-0
                        leading-tight
                        focus:outline-none
                        focus:bg-transparent
                        border-sev-gray-100
                        focus:border-sev-gray-300
                        dark:text-sev-white
                        dark:border-sev-gray-300
                        dark:focus:border-white
                      "
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    {errors.email && touched.email && (
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="
                          text-red-500
                          text-[10px]
                          mt-2
                        "
                      />
                    )}
                  </div>
                </div>
            </div>
            <div
              className="
                flex
                flex-wrap
                -mx-3
                mb-6
              ">
              <div
                className="
                  relative
                  w-full
                  px-3
                  text-left
                ">
                <div className="relative">
                  <Field
                    type="text"
                    as="textarea"
                    rows="2"
                    name="message"
                    id="message"
                    placeholder="Your message..."
                    className="
                      appearance-none
                      text-sm
                      block
                      w-full
                      bg-transparent
                      border-b
                      text-sev-dark
                      py-2
                      px-0
                      mb-0
                      leading-tight
                      focus:outline-none
                      focus:bg-transparent
                      border-sev-gray-100
                      focus:border-sev-gray-300
                      dark:text-sev-white
                      dark:border-sev-gray-300
                      dark:focus:border-white
                    "
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.message && touched.message && (
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="
                        text-red-500
                        text-[10px]
                        mt-2
                      "
                    />
                  )}
                </div>
              </div>
            </div>

            <button
              className="
                text-xs
                leading-none
                font-medium
                uppercase
                inline-flex
                items-center
                justify-center
                px-6
                mt-8
                h-12.7
                rounded-full
                grow-0
                shrink-0
                group
                transition
                duration-200
                ease-linear
                relative
                before:absolute
                before:left-0
                before:top-0
                before:w-full
                before:h-full
                btn
                btn-dark
                disabled:opacity-50
                hover:shadow-none
                disabled:cursor-none
              "
              disabled={!(isValid && dirty)}
              type="submit">
              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  transition
                  duration-200
                  ease-linear
                ">
                <Icon
                  icon="send"
                  className="
                   w-4
                   h-4
                   mr-4
                  " />
                <span>
                  <FormattedMessage id="send" />
                </span>
              </span>
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}