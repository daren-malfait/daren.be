import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import * as React from 'react';

import Option from './_Option';
import { Container } from './radioGroup.styles';

interface RadioGroupProps {
  value?: any;
  label?: string;
  onChange: (value: any) => void;
  children?: React.ReactNode;
}

function RadioGroup({
  value,
  onChange,
  children,
  label,
  ...props
}: RadioGroupProps) {
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
}

export default Object.assign(RadioGroup, { Option });
