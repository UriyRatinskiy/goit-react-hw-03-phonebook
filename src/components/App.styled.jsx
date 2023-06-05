import styled from 'styled-components';

export const Application = styled.div`
  margin: auto;
  padding: 16px 40px;
  text-align: center;
  background: #ececf3;
  color: black;
  width: 500px;
  box-shadow: 0 14px 28px rgba(6, 2, 4, 0.25), 0 10px 10px rgba(3, 5, 8, 0.22);
`;

export const ApplicationTitle = styled.h1`
  margin: 0 0 16px 0;
  font-size: ${props => props.theme.spacing(4)};
  font-weight: 700;
  line-height: 1.5;
`;

export const ListTitle = styled.h2`
  margin: 0 0 8px 0;
  font-size: ${props => props.theme.spacing(3)};
  font-weight: 500;
  line-height: 1.5;
`;
