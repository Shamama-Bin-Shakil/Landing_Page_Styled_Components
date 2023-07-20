import { Container } from "./styles/Container.styled";
import {
  StyldHeader,
  Heading,
  Button,
  Nav,
  Flex,
  Image
} from "./styles/Header.styled";

const Header = () => {
  return (
    <div>
      <StyldHeader>
        <Container>
          <Nav>
            <Heading>Navbar</Heading>
            <Button>Create New Account</Button>
          </Nav>

          <Flex>
            <div>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum vitae quisquam culpa quis quibusdam nulla officia optio illo itaque, voluptates inventore obcaecati rerum nesciunt tenetur eum voluptatem, reiciendis sequi maiores!</p>
              <Button>Learn More</Button>
            </div>
            <Image src="./7495.jpg"/>
          </Flex>
        </Container>
      </StyldHeader>
    </div>
  );
};

export default Header;
