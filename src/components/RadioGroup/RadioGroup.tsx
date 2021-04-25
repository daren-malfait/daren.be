import React, { FunctionComponent } from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';

import Option from './_Option';
import { Container } from './radioGroup.styles';

interface RadioGroupProps {
  value?: any;
  label?: string;
  onChange: (value: any) => void;
}

const RadioGroup: FunctionComponent<RadioGroupProps> & {
  Option: typeof Option;
} = ({ value, onChange, children, label, ...props }) => {
  return (
    <HeadlessRadioGroup {...props} value={value} onChange={onChange}>
      {label && (
        <HeadlessRadioGroup.Label className="sr-only">
          {label}
        </HeadlessRadioGroup.Label>
      )}
      <Container>{children}</Container>
    </HeadlessRadioGroup>
  );
};

RadioGroup.Option = Option;

export default RadioGroup;
