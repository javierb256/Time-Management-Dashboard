//Small cards for that displays title,hrs taken, tiny description, options button

import classes from "./Card.module.css";

function Card(props) {
  return (
    <>
    <div className={classes.container}>{props.children}</div>
    </>
  )

}

export default Card;
