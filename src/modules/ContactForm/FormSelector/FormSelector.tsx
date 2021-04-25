import React, { FunctionComponent, memo, useCallback, useState } from 'react';

import * as S from '../contactForm.styles';

import Button from '~components/Button/Button';
import FadeIn from '~components/FadeIn/FadeIn';
import RadioGroup from '~components/RadioGroup/RadioGroup';

import { FormChoice } from '../actions';
import tw, { styled } from 'twin.macro';

interface FormChoiseProps {
  onSubmit: (type: FormChoice) => void;
}

const FormSelector: FunctionComponent<FormChoiseProps> = ({ onSubmit }) => {
  const [selected, setSelected] = useState(FormChoice.Project);

  const onChange = useCallback(val => {
    setSelected(val);
  }, []);

  const onClick = useCallback(() => {
    onSubmit(selected);
  }, [onSubmit, selected]);

  return (
    <Container>
      <FadeIn>
        <h2>Laat ons:</h2>
        <RadioGroup
          value={selected}
          onChange={onChange}
          label="Maak een afpraak voor"
        >
          <RadioGroup.Option
            value={FormChoice.Project}
            label="jouw project bespreken"
          />
          <RadioGroup.Option
            value={FormChoice.Coffee}
            label="samen een koffie gaan drinken"
          />
          <RadioGroup.Option
            value={FormChoice.Weather}
            label="over het weer praten"
          />
        </RadioGroup>
        <Button name="set-form-type" onClick={onClick}>
          Volgende
        </Button>
      </FadeIn>
    </Container>
  );
};

const Container = styled(S.Wrapper)`
  > div {
    ${tw`
    space-y-8
    max-w-2xl
    `}
  }
`;

export default memo(FormSelector);
