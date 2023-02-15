import classes from './Card.module.css';

const Card = (props) => {
  const cardClass = `${classes.card} ${props.className}`;

  return <button className={cardClass}>{props.children}</button>;
};

export default Card;
