import React from "react";
import { Link } from "react-router-dom";

export default function Project({src ,name ,type,id ,state, ...props}){
    return (<>
       <div className="project-box animition-left" key={id}>
        <Link to={`/project/${id}`} state={state}>
       <img className="project-box-img" src={src} alt={name}/>
       <h4>Name  :<span> {name}</span></h4>
       <p>Type : <span>{type}</span> </p>
      
       </Link>
       </div>
       </>
    )
}