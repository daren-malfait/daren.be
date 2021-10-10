import * as React from 'react';

import tw, { styled } from 'twin.macro';

import { FormChoice } from '../actions';
import * as S from '../contactForm.styles';

import Button from '~components/Button/Button';
import FadeIn from '~components/FadeIn/FadeIn';
import RadioGroup from '~components/RadioGroup/RadioGroup';

interface FormChoiseProps {
  onSubmit: (type: FormChoice) => void;
}

function FormSelector({ onSubmit }: FormChoiseProps) {
  const [selected, setSelected] = React.useState(FormChoice.Project);

  const onChange = React.useCallback(val => {
    setSelected(val);
  }, []);

  function onClick() {
    onSubmit(selected);
  }

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
}

const Container = styled(S.Wrapper)`
  > div {
    ${tw`max-w-2xl space-y-8 `}
  }
`;

export default React.memo(FormSelector);
