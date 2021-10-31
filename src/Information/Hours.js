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

import work from "../images/icon-work.svg";
import play from "../images/icon-play.svg";
import study from "../images/icon-study.svg";
import exercise from "../images/icon-exercise.svg";
import social from "../images/icon-social.svg";
import selfCare from "../images/icon-self-care.svg";

const background = [work, play, study, exercise, social, selfCare];

function Hours() {
  return (
    <>
      {data.map((element, index) => {
        return (
          <div className={classes.background}>
            <div className={classes.icon}>
              <img
                src={background[index]}
                alt="card icon"
                className={classes.iconImage}
              />
            </div>
            <div className={classes.cardDiv}>
              <Card>
                <div className={classes.cardInformation}>
                  <h5>
                    {element.title}
                    <span>
                      <FontAwesomeIcon icon={faEllipsisH} className={classes.ellips}/>
                    </span>
                  </h5>
                  <div className={classes.timeContainer}>
                    <h3>{element.timeframes.daily.current}hrs</h3>
                    <h6 className={classes.previous}>
                      Last Week - {element.timeframes.daily.previous}hrs
                    </h6>
                  </div>
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
