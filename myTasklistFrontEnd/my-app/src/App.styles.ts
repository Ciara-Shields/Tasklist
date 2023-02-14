import styled from "styled-components";

const Main = styled.main`
  padding: 2em;
  text-align: center;
`;
// const DropdownWrapper = styled.form`
//   display: flex;
//   flex-flow: column;
//   justify-content: flex-start;
// `;
// const StyledSelect = styled.select`
//   max-width: 50%;
//   height: 100%;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
// `;

// const StyledOption = styled.option`
//   color: ${(props) => (props.selected ? "lightgrey" : "black")};
// `;

// const StyledLabel = styled.label`
//   margin-bottom: 1rem;
// `;
// const StyledButton = styled.input`
//   max-width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   border: solid 2px blue;
//   padding: 0.5rem;
//   border-radius: 1rem;
// `;
const ResultProps = styled.div`
  background-color: #eee;
  padding: 1em;
  margin: 1em auto;
  display: flex;
  align-items: center;
  width: 750px;
  ont-size: 0.8em;
`;

const styles = {
  Main,
  ResultProps,
  //   DropdownWrapper,
  //   StyledSelect,
  //   StyledOption,
  //   StyledLabel,
  //   StyledButton,
};

export default styles;
