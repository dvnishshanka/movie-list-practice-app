import classes from './Button.module.css';

const Button = (props) => {
  const btnClass = `${classes.btn} ${props.className}`;

  return (
    <button className={btnClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
