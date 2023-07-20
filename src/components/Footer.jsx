import { Container } from "./styles/Container.styled";
import { StyledFooter } from "./styles/Footer.styled";
import { Flex } from "./styles/Header.styled";
import SocialIcon from "./SocialIcon"
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        {/* <img src="." alt="" /> */}
        <h2>Navbar Logo</h2>
        <Flex>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>+999 999 999</li>
            <li>rohishamama@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What we do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcon />

        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
