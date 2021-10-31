//create the layout for how the cards will be displayed

//TODO 1: Bring in data for 6 cards
//TODO 2: Bring in User data
//TODO 3: Make sure the desktop view looks good
//TODO 4: Make sure mobile view is responsive

import Hours from "../Information/Hours";
import User from "../Information/User";
import classes from "../layout/Layout.module.css";
function Layout() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.userContainer}>
        <User />
      </div>
      <div className={classes.hoursContainer}>
        <Hours />
      </div>
    </div>
  );
}

export default Layout;
