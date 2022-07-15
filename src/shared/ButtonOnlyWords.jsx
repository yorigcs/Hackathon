import styled from 'styled-components';

export default function ButtonOnlyWords({ children }) {
  return <ButtonOnlyWordsStyle>{children}</ButtonOnlyWordsStyle>;
}

const ButtonOnlyWordsStyle = styled.button`
  background-color: transparent;
  border: none;
  color: #5f5a6f;
  margin: 36px;
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  :hover {
    cursor: pointer;
  }
`;
