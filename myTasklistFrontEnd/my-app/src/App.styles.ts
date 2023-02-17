import styled, { keyframes } from "styled-components";
import myImage from "./JackBlack.jpeg";
import leafs from "./leafs.jpeg";

const Main = styled.main`
  padding: 2em;
  text-align: center;
  background-color: lemonchiffon;
`;

const ResultProps = styled.div`
  background-image: url(${leafs});
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
  margin: 50px;
  width: 300px;
  height: 350px;
  background-image: url(${myImage});
  animation-name: ${rotate};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
const h1 = styled.h1`
  color: darkgreen;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
`;
const h2 = styled.h2`
  color: darkgreen;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
`;
const text = styled.text`
  color: lemonchiffon;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  // padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  color: lemonchiffon;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
`;

const Button2 = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  margin-left: 10px
  width: 11rem;
  background: bisque;
  color: white;
  border: 2px solid darkgreen;
  color: grey;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
`;
const Button3 = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  margin-left: 10px
  width: 11rem;
  background: burlywood;
  color: white;
  border: 2px solid darkgreen;
  color: grey;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
`;

const Input = styled.input`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  margin-left: 10px
  width: 11rem;
  background: darkseagreen;
  color: white;
  border: 2px solid darkgreen;
  color: grey;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
`;

const select = styled.select`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  margin-left: 10px
  width: 11rem;
  background: darkseagreen;
  color: white;
  border: 2px solid darkgreen;
  color: grey;
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;

`;

const styles = {
  Main,
  ResultProps,
  image,
  text,
  Button,
  Button2,
  h1,
  h2,
  Input,
  select,
  Button3,
};

export default styles;
