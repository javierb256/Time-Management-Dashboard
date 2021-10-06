//Display 6 cards with each categories information

//TODO 1: Display 6 cards w/out data
//TODO 2: Display cards w/data from JSON, will need a forEach or a .map()
//TODO 3: see how each card has own color and image
//TODO 4: Change color on card hover
//TODO 5: Add three dot button

import Card from "../Components/Card";
import data from "../data.json";
import classes from "./Hours.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'


function Hours(){

    
    return (
        <>
        {data.map((element) =>{
            return(
                <Card >
                    <div className={classes.container}>
                        <h5 className={classes.h3}>{element.title}<span><FontAwesomeIcon icon={faEllipsisH}/></span></h5>
                        <h3>{element.timeframes.daily.current}hrs</h3>
                        <h6 className={classes.previous}>Last Week - {element.timeframes.daily.previous}hrs</h6>

                    </div>
                </Card>
            );
        })}
        </>
    );
}

export default Hours;