// Main layout for the page structure
import Hours from "../Information/Hours";
import User from "../Information/User";
import classes from "../layout/Layout.module.css";
import numbers from "../data.json";
import { useState } from "react";


function Layout() {
  const [data, setData] = useState(numbers);
  const [time, setTime] = useState("daily");
  return (
    <div className={classes.mainContainer}>
      <div className={classes.userContainer}>
        <User data ={data} setTime={setTime}/>
      </div>
      <div className={classes.hoursContainer}>
        <Hours data={data} time={time}/>
      </div>
    </div>
  );
}

export default Layout;
