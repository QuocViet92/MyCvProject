import React from "react";
import { NavLink} from 'react-router-dom'

export default function Header(){
    const activeStyles ={
        fontWeight: "bold",
        textDecoration: "underline",
    }
   
    return(
        <div className="container-header">
        <header className="header">
            <div>
               <NavLink to={'about'}> <img className="avarta-small" src="/images/WeAreChampion.png" alt="" /></NavLink>
            </div>
            <ul>
               <NavLink
                to='/'
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                Home
                </NavLink>
               <NavLink
                to='about'
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                About
                </NavLink>
               <NavLink
                to='project'
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                Project
                </NavLink>
                <NavLink
                to='contact'
                style={({ isActive }) => isActive ? activeStyles : null}
                > Contact</NavLink>
            </ul>
        </header>
        </div>
    )
}