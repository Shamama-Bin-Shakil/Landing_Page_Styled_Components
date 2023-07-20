import { CardItem, Button } from "./styles/Card.styled";

export const Card = ({ item: {image, title, description} }) => {
  return (
    <CardItem>
      <img src={image} alt="" />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <Button  className="btn" color="white">Learn More</Button>
    </CardItem>
  );
};
