import styled, { keyframes } from "styled-components";
import myImage from "./JackBlack.jpeg";

const Main = styled.main`
  padding: 2em;
  text-align: center;
`;

const ResultProps = styled.div`
  background-color: #eee;
  padding: 1em;
  margin: 1em auto;
  display: flex;
  align-items: center;
  width: 750px;
  ont-size: 0.8em;
`;
const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to{
    transform:rotate(360deg);
}
`;
const image = styled.img`
  width: 300px;
  height: 350px;
  background-image: url(${myImage});
  animation-name: ${rotate};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const styles = {
  Main,
  ResultProps,
  image,
};

export default styles;
