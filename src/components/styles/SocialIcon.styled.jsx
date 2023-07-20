import { styled } from "styled-components";

export const AppSocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;
  }
  a {
    border: 1px solid white;
    border-radius: 50%;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
`;
