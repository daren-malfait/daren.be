import React, { FunctionComponent, memo, useCallback, useState } from 'react';
import { useFormik } from 'formik';

import * as S from '../contactForm.styles';

import validationSchema from './validationSchema';

import { AlertType } from '~components/Alert/alertTypes';
import Alert from '~components/Alert/Alert';
import Button from '~components/Button/Button';
import FadeIn from '~components/FadeIn/FadeIn';
import Input from '~components/Input/Input';
import RadioGroup from '~components/RadioGroup/RadioGroup';
import TextArea from '~components/TextArea/TextArea';

import { encode } from '~utils/form';

enum FormState {
  Initial,
  Submitted,
  Error,
}

enum ProjectType {
  Website = 'website',
  Application = 'application',
  Talk = 'talk',
  Other = 'other',
}

const FORM_NAME = 'project-form';

const ProjectForm: FunctionComponent = () => {
  const [formState, setFormState] = useState<FormState>(FormState.Initial);

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    touched,
    values,
  } = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
      project: ProjectType.Website,
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

  const onProjectChange = useCallback(
    value => {
      setFieldValue('project', value);
    },
    [setFieldValue],
  );

  return (
    <>
      {formState === FormState.Error && (
        <Alert type={AlertType.Danger}>
          Er is iets foutgelopen bij het verzenden van je gegevens
        </Alert>
      )}
      {formState === FormState.Submitted && (
        <Alert type={AlertType.Success}>
          Ik kijk er naar uit om jouw project onder de loep te nemen.
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
            <S.TwoColumn>
              <FadeIn>
                <h3>Je vraag gaat over:</h3>
                <RadioGroup
                  value={values.project}
                  onChange={onProjectChange}
                  label="Maak een afpraak voor"
                  aria-label="Het type project"
                >
                  <RadioGroup.Option
                    value={ProjectType.Website}
                    label="een website"
                  />
                  <RadioGroup.Option
                    value={ProjectType.Application}
                    label="een (web)applicatie"
                  />
                  <RadioGroup.Option
                    value={ProjectType.Talk}
                    label="spreken op een event"
                  />
                  <RadioGroup.Option
                    value={ProjectType.Other}
                    label="iets anders"
                  />
                </RadioGroup>
              </FadeIn>
              <FadeIn>
                <h3>Vertel me meer:</h3>

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
                  aria-label="Jouw naam"
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
                  placeholder="Ik ben op zoek naar een website"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  valid={touched.message && !errors.message}
                />
                <Button
                  name="submit-project"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Bericht versturen
                </Button>
                <S.Disclaimer>
                  Jouw gegevens worden enkel gebruikt om te reageren op jouw
                  bericht.
                </S.Disclaimer>
              </FadeIn>
            </S.TwoColumn>
          </fieldset>
        </form>
      )}
    </>
  );
};

export default memo(ProjectForm);
