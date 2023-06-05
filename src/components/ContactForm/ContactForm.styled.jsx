import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 16px;
  padding: 8px;
`;

export const LabelField = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: ${props => props.theme.spacing(2)};
  font-weight: 500;
  line-height: 1.2;
`;

export const InputField = styled.input`
  padding: 16px;
  font-size: ${props => props.theme.spacing(2)};
  line-height: 1.2;
  border: 1px solid #27272a;
  border-radius: ${props => props.theme.spacing(1)};
  width: 292px;
  cursor: pointer;
`;

export const ButtonAdding = styled.button`
  padding: 8px 24px;
  font-size: ${props => props.theme.spacing(2)};
  font-weight: 700;
  line-height: 1.2;
  border: 1px solid black;
  border-radius: ${props => props.theme.spacing(1)};
  cursor: pointer;
  background: #8e8e99;
  color: honeydew;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out;
  box-shadow: 0 14px 28px rgba(6, 2, 4, 0.25), 0 10px 10px rgba(3, 5, 8, 0.22);

  &:hover,
  &:focus {
    background: #b5b5ec;
    color: #3e3e40;
    border: 1px solid #1d1de3;
  }
`;
