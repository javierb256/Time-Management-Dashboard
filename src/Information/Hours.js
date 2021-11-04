//displays individual cards with different hours

import Card from "../Components/Card";
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

function Hours(props) {
  let time = props.time;
  return (
    <>
      {props.data.map((element, index) => {
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
                      <FontAwesomeIcon
                        icon={faEllipsisH}
                        className={classes.ellips}
                      />
                    </span>
                  </h5>
                  <div className={classes.timeContainer}>
                    <h3>{element.timeframes[time].current}hrs</h3>
                    <h6 className={classes.previous}>
                      Last Week - {element.timeframes.daily.previous}hrs
                    </h6>
                  </div>
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
