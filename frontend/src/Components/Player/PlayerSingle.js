import React from "react";
const PlayerSingle = (props) =>{
    return(
        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src="soccer.jpg" alt="Soccer Image"/>
              <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
            </div>
            <div className="card-content">
              <p>Phone:{props.player.phone} | Email:{props.player.email}</p>
            </div>
            <div className="card-action">
              Team:{props.player.Team}
            </div>
          </div>
        </div>
      </div>
    );
}

export default PlayerSingle;