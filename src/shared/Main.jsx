import styled from 'styled-components';

export default function Main({ children, margin_top }) {
  return <MainStyle margin_top={margin_top}>{children}</MainStyle>;
}
const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: ${props => props.margin_top}px;
`;
