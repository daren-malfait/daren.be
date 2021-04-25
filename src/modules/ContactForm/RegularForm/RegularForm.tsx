import React, { FunctionComponent, memo, useState } from 'react';
import { useFormik } from 'formik';

import * as S from '../contactForm.styles';

import validationSchema from './validationSchema';

import { encode } from '~utils/form';
import Input from '~components/Input/Input';
import FadeIn from '~components/FadeIn/FadeIn';
import TextArea from '~components/TextArea/TextArea';
import { Button } from '~components/Button/button.styles';
import Alert from '~components/Alert/Alert';
import { AlertType } from '~components/Alert/alertTypes';

enum FormState {
  Initial,
  Submitted,
  Error,
}

const FORM_NAME = 'talk-to-me-form';

const RegularForm: FunctionComponent = () => {
  const [formState, setFormState] = useState<FormState>(FormState.Initial);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: async (submittedValues, actions) => {
      try {
        const data = { 'form-name': FORM_NAME, ...submittedValues };

        fetch('/', {
          body: encode(data),
          method: 'POST',
        });

        setFormState(FormState.Submitted);
        actions.resetForm();
      } catch (error) {
        setFormState(FormState.Error);
      } finally {
        actions.setSubmitting(false);
      }
    },
    validationSchema,
  });

  return (
    <>
      {formState === FormState.Error && (
        <Alert type={AlertType.Danger}>
          Er is iets foutgelopen bij het verzenden van je gegevens
        </Alert>
      )}
      {formState === FormState.Submitted && (
        <Alert type={AlertType.Success}>
          Ik kijk er naar uit om ons gesprek verder te zetten.
        </Alert>
      )}
      {formState !== FormState.Submitted && (
        <form
          name={FORM_NAME}
          method="post"
          onSubmit={handleSubmit}
          data-netlify="true"
        >
          <fieldset>
            <S.Wrapper>
              <FadeIn>
                <Input
                  error={touched.name && errors.name}
                  name="name"
                  id="name"
                  label="Jouw naam"
                  placeholder="John Doe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  valid={touched.name && !errors.name}
                />
                <Input
                  error={touched.email && errors.email}
                  name="email"
                  id="email"
                  label="Jouw emailadres"
                  placeholder="voorbeeld@email.be"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  valid={touched.email && !errors.email}
                />
                <TextArea
                  error={touched.message && errors.message}
                  name="message"
                  id="message"
                  label="Bericht"
                  placeholder="Hey Daren, ik zag net jouw website."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  valid={touched.message && !errors.message}
                />
                <Button disabled={isSubmitting} type="submit">
                  Bericht versturen
                </Button>
                <S.Disclaimer>
                  Jouw gegevens worden enkel gebruikt om te reageren op jouw
                  bericht.
                </S.Disclaimer>
              </FadeIn>
            </S.Wrapper>
          </fieldset>
        </form>
      )}
    </>
  );
};

export default memo(RegularForm);
