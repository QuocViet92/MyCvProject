import React from "react";
import Project from "./project";
import { useSearchParams } from "react-router-dom";

export default function ProjectList(){
    const [projects, setProjects] = React.useState([])
    const [count,setCount] = React.useState(6)
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const displayProject = typeFilter
    ? projects.filter(project => project.type.toLowerCase() === typeFilter)
    :projects

    function handleClick(){
        setCount((prev) => prev +3)
    }
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    React.useEffect(()=>{
        fetch("/api/project")
        .then(res => res.json())
        .then(data => setProjects(data.projects))
},[])
const element = displayProject.slice(0,count).map(item => {
   return  <Project key ={item.id} id={item.id} src={item.imageUrl} name={item.name} type={item.type} state={{ search: `?${searchParams.toString()}`,type:typeFilter }} />
})

    return(
        <div className="container">
            <h1 className=" animition-right">PROJECT LIST</h1>
            <div className="filter-project">
            <button className={`animition-left ${typeFilter ==='html,css,js' ? 'selected' :""} `} onClick={() => handleFilterChange("type", "html,css,js")}>Html, Css, Js</button>
            <button  className={`animition-right ${typeFilter ==='reactjs' ? 'selected' :""} `} onClick={() => handleFilterChange("type", "reactjs")}>ReactJs</button>

            {typeFilter && <button  className='animition-right' onClick={() => handleFilterChange("type", "")}>Clear</button>}
            </div>
        <div className="projects-list animition-left">
        {element}
        </div>
        {count < displayProject.length &&
        (<button className="more-btn" onClick={handleClick}>More</button>)
}
        </div>

    )
}