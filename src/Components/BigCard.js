//add BigCard styling
import classes from "./BigCard.module.css";
import profile from "../images/image-jeremy.png";
function BigCard() {
  return (
    <div className={classes.userContainer}>
      <div className={classes.user}>
        <div className={classes.userContent}>
          <img src={profile} alt="user card" className={classes.profilePic} />
          <div className={classes.userInformation}>
            <h6>Report for</h6>
            <p className={classes.username}>Jeremy Robison</p>
          </div>
        </div>
        <ul>
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
        </ul>
      </div>
    </div>
  );
}

export default BigCard;
