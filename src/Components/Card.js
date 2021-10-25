//Small cards for that displays title,hrs taken, tiny description, options button

//TODO 1: create card container
//TODO 2: add card styling
//TODO 3: add background at the top of the cards
import classes from "./Card.module.css";

function Card(props) {
  // return <div className={classes.container}>{props.children}</div>;
  return (
    <>
    <div className={classes.container}>{props.children}</div>
    {/* <div className={classes.top}></div> */}
    </>
  )

}

export default Card;
