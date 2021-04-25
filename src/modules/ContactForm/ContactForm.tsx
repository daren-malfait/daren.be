import React, { FunctionComponent, memo, useCallback, useState } from 'react';
import cs from 'classnames';
import tw, { styled } from 'twin.macro';

import { FormChoice } from './actions';

import FormSelector from './FormSelector/FormSelector';
import RegularForm from './RegularForm/RegularForm';
import ProjectForm from './ProjectForm/ProjectForm';

const ContactForm: FunctionComponent = () => {
  const [selectedForm, setSelectedForm] = useState<FormChoice | null>(null);

  const onFormChoice = useCallback(choice => {
    setSelectedForm(choice);
  }, []);

  return (
    <div>
      <Option
        className={cs({
          active: selectedForm === null,
        })}
      >
        <FormSelector onSubmit={onFormChoice} />
      </Option>

      <Option
        className={cs({
          active: selectedForm === FormChoice.Project,
        })}
      >
        <h2>Vertel me over je project.</h2>
        <ProjectForm />
      </Option>

      <Option
        className={cs({
          active: selectedForm === FormChoice.Coffee,
        })}
      >
        <h2>
          Over wat wil je praten bij onze{' '}
          <span role="img" aria-label="koffie">
            ☕
          </span>
          ?
        </h2>
        <RegularForm />
      </Option>

      <Option
        className={cs({
          active: selectedForm === FormChoice.Weather,
        })}
      >
        <h2>
          Wist je ook dat je aan de hand van het tjirpen van krekels ongeveer
          kan berekenen hoe warm het is?
        </h2>
        <p>
          Tel het aantal tjirpen dat een krekel maakt gedurende 14 seconden. Tel
          daar 8 bij op, vermenigvuldig die uitkomst met 5 en deel dan door 9.
        </p>
        <RegularForm />
      </Option>
    </div>
  );
};

const Option = styled.div`
  ${tw`
  hidden
  `}

  &.active {
    ${tw`
    block
    `}
  }
`;

export default memo(ContactForm);
