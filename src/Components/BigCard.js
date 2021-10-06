//add BigCard styling
import classes from "./BigCard.module.css";

function BigCard(){
    return(
        <div className={classes.filters}>
            <div className={classes.user}></div>
        </div>
    );
}

export default BigCard;