import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoInstagram,
} from "react-icons/io5";
import { AppSocialIcon } from "./styles/SocialIcon.styled";
const SocialIcon = () => {
  return (
    <AppSocialIcon>
      <li>
        <a href="#">
          <IoLogoFacebook />
        </a>
      </li>
      <li>
        <a href="#">
          <IoLogoYoutube />
        </a>
      </li>
      <li>
        <a href="#">
          <IoLogoInstagram />
        </a>
      </li>
    </AppSocialIcon>
  );
};

export default SocialIcon;
