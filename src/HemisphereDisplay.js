import React from "react";
import ne from "./images/ne.png"
import se from "./images/se.png"
import nw from "./images/nw.png"
import sw from "./images/sw.png"


const hemispherConfig = {

    NorthEastern: {
        text: "You are in NorthEastern Hemisphere",
        picture: ne
    },
    NorthWestern: {
        text: "You are in NorthWestern Hemisphere",
        picture: nw
    },
    SouthEastern: {
        text: "You are in SouthEastern Hemisphere",
        picture: se
    },
    SouthWestern: {
        text: "You are in SouthWestern Hemisphere",
        picture: sw
    },
}

const HemisphereDisplay = (props) => {
    const hemis = (props.latitude > 0 && props.longitude>0)? hemispherConfig.NorthEastern :
    (props.latitude > 0 && props.longitude<0)? hemispherConfig.NorthWestern :
    (props.latitude <0 && props.longitude<0)? hemispherConfig.SouthWestern :hemispherConfig.SouthEastern
    return (
        <div className="content">
            <div>Latitude is {props.latitude}<br /></div>
            <div>Latitude is {props.longitude}<br /></div>
            <div>{hemis.text}</div>

            <img src={hemis.picture} style={{width:'800px',height:'600px'}}></img>
        </div>
    )
}

export default HemisphereDisplay;