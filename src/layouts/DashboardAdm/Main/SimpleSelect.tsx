import { SelectHTMLAttributes } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

interface SimpleSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const SelectContainer = styled.div`
  position: relative;
  width: 100%;

  select {
    width: 100%;
    height: 48px;
    padding: 0 16px;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    color: #4a4a4a;
    font-size: 14px;
    appearance: none;
    cursor: pointer;

    &:focus {
      border-color: #0c61ff;
      outline: none;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #4a4a4a;
`;

export function SimpleSelect({
  label,
  options,
  onChange,
  ...rest
}: SimpleSelectProps) {
  return (
    <div>
      {label && <Label>{label}</Label>}

      <SelectContainer>
        <select {...rest} onChange={onChange}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <IconContainer>
          <IoMdArrowDropdown size={20} color="#4A4A4A" />
        </IconContainer>
      </SelectContainer>
    </div>
  );
}
