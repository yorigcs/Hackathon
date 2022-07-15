import styled from 'styled-components';

import { BallTriangle } from 'react-loader-spinner';

export default function Loading({ height, width, marginLeft }) {
  return (
    <ContainerLoading marginLeft={marginLeft}>
      <BallTriangle color="white" height={height} width={width} />
    </ContainerLoading>
  );
}
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 5px;
  margin-left: ${props => props.marginLeft};
`;
