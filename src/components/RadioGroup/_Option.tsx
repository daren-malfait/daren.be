import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import cs from 'classnames';
import * as React from 'react';
import tw, { styled } from 'twin.macro';

import * as S from './radioGroup.styles';

interface OptionProps {
  value: any;
  label: string;
  description?: string;
}

function Option({ value, label, description, ...props }: OptionProps) {
  return (
    <S.Option value={value} {...props}>
      {({ active, checked }) => (
        <S.Wrapper className={cs({ active, checked })}>
          <>
            <S.Icon className={cs({ active, checked })}>
              {checked && <CheckIcon className="w-full h-full" />}
            </S.Icon>
            <Content>
              <Label as="p">{label}</Label>
              {description && (
                <Description as="span">{description}</Description>
              )}
            </Content>
          </>
        </S.Wrapper>
      )}
    </S.Option>
  );
}

const Content = styled.div`
  ${tw`flex items-center text-sm `}
`;

const Label = tw(RadioGroup.Label)`
  text-current
  m-0
`;

const Description = tw(RadioGroup.Description)`
  text-current
  inline
`;

export default Option;
