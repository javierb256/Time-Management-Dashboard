//Display 6 cards with each categories information

//TODO 1: Display 6 cards w/out data
//TODO 2: Display cards w/data from JSON, will need a forEach or a .map()
//TODO 3: see how each card has own color and image
//TODO 4: Change color on card hover
//TODO 5: Add three dot button

import Card from "../Components/Card";
import data from "../data.json";
import classes from "./Hours.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import images from "../images/icon-exercise.svg";

const background = ["orange", "blue", "pink", "green", "purple", "yellow"]

// const background = [
//   {
//     color: "orange"
//   },
//   {
//     color: "blue"
//   },
//   {
//     color: "pink"
//   },
//   {
//     color: "green"
//   },
//   {
//     color: "purple"
//   },
//   {
//     color: "yellow"
//   }
// ]

function Hours() {
  return (
    <>
      {data.map((element, index) => {
        return (
          <div className={classes.background}>
            {/* <div className={classes.overlay}><img src={images} /></div>*/}
            <div className={classes.cardDiv}>
              <Card className={classes.push}>
                <div className={classes.container}>
                  {/* <div className={classes.top}></div> */}
                  <h5>
                    {element.title}
                    <span>
                      <FontAwesomeIcon icon={faEllipsisH} />
                    </span>
                  </h5>
                  <h3>{element.timeframes.daily.current}hrs</h3>
                  <h6 className={classes.previous}>
                    Last Week - {element.timeframes.daily.previous}hrs
                  </h6>
                  {/* <div className={classes.top}></div> */}
                </div>
              </Card>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Hours;
