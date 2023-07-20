import styled from "styled-components";
export const StyldHeader = styled.header`
  /* background-color: #7ce0db; */
  padding: 40px 0;
`;

export const Heading = styled.h3`
  color: ${({ theme }) => theme.color.heading};
  font-size: 30px;
`;

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 40px;
  background-color: ${({ theme }) => theme.color.color};
  color: white;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div,
  & ul {
    flex: 1;
  }
`;

export const Image = styled.img`
  width: 350px;
  margin-left: 40px;
`;
