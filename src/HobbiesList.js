import React from "react";
import HobbiesListItem from "./HobbiesListItem";

function HobbiesList({hobbies}){

    return(
        <div>
            <ul>
                {hobbies.map(hobby =>(
                    <HobbiesListItem hobby={hobby.name} key={hobby.id}/>
    
                ))}
                    

            </ul>
        </div>

    )
}
export default HobbiesList;