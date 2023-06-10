import styled from 'styled-components';

export const Text = styled.div`
  font-size: 14px;
  color: ${p => p.theme.colors.error};
`;

export const ErrorMessage = ({ children }) => {
  return <Text>{children}</Text>;
};
