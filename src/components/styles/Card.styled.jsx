import styled from "styled-components";
export const CardItem = styled.div`
  max-width: 320px;
  border: 1px solid black;
  padding: 15px;
  border-radius: 5px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  overflow: hidden;
  img {
    width: 100%;
  }
  h2 {
    color: #4a148c;
    text-transform: uppercase;
  }
  p {
    color: #616161;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: black;
  color: ${(props) => props.color};
  padding: 8px 16px;
  border-radius: 35px;

  &:hover {
    background-color: #212121;
  }
`;
