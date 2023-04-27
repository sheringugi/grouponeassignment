import React from "react";

function HobbiesListItem({hobby}){
    return(
        <li key={hobby.id}>{hobby.name}</li>
    )
}
export default HobbiesListItem;