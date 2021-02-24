import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: 25vw;
`;

export const StyledMinStage = styled(StyledStage)`
  max-width: 200px;
  max-height: 205px;
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(200px / ${(props) => props.width})
  );
  margin-bottom: 8px;
`;
