import styled from "styled-components";
export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.color};
  color: white;
  padding: 80px 0 30px;

  ul {
    list-style: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
`;
