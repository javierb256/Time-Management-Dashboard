//displays the user information and filter to change times
import classes from "../Information/User.module.css";
import profile from "../images/image-jeremy.png";

function User({ setTime }) {
  function dailyActive() {
    document.getElementById("daily").style.color = "white";
    document.getElementById("weekly").style.color = "hsl(235, 45%, 61%)";
    document.getElementById("monthly").style.color = "hsl(235, 45%, 61%)";
    setTime("daily");
  }

  function weeklyActive() {
    document.getElementById("weekly").style.color = "white";
    document.getElementById("daily").style.color = "hsl(235, 45%, 61%)";
    document.getElementById("monthly").style.color = "hsl(235, 45%, 61%)";
    setTime("weekly");
  }

  function monthlyActive() {
    document.getElementById("daily").style.color = "hsl(235, 45%, 61%)";
    document.getElementById("weekly").style.color = "hsl(235, 45%, 61%)";
    document.getElementById("monthly").style.color = "white";
    setTime("monthly");
  }
  return (
    <div className={classes.userContainer}>
      <div className={classes.userContent}>
        <div className={classes.imageContainer}>
          <img src={profile} alt="user card" className={classes.profilePic} />
        </div>
        <div className={classes.userInformation}>
          <h6>Report for</h6>
          <p className={classes.username}>Jeremy Robison</p>
        </div>
      </div>
      <div className={classes.timeFilter}>
        <ul>
          <li onClick={dailyActive} id="daily">
            Daily
          </li>
          <li onClick={weeklyActive} id="weekly">
            Weekly
          </li>
          <li onClick={monthlyActive} id="monthly">
            Monthly
          </li>
        </ul>
      </div>
    </div>
  );
}

export default User;
