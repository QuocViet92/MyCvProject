import { useParams, NavLink,useLocation } from "react-router-dom"
import React from "react"

export default function ProjectDetail(){
    const location = useLocation()
    const { id } = useParams()  
 const search = location.state?.search || ""
 const type = location.state?.type || "all"
 console.log(type)
 
    const [currentProject, setCurrentProject] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/project/${id}`) 
            .then(res => res.json())
            .then(data => setCurrentProject(data.projects)) 
            .catch(error => console.error('Error fetching project:', error))
    }, [id]) 
    React.useEffect(() => {
        console.log(currentProject)
    }, [currentProject])

    if (!currentProject) {
        return <h1>Loading</h1>
    }

    return (
        <div className="project-detail animition-right">
            <div className="back-link">
           <NavLink to={`/project${search}`} >Back to {type}</NavLink>
           </div >
            <img src={currentProject.imageUrl} alt={currentProject.name} />
            <h1>{currentProject.name}</h1>
            <p>Type : {currentProject.type}</p>
            <p>{currentProject.description}</p>
            <div className="shareCode">
            <a href={currentProject.live} target='_blank' rel="noopener noreferrer">Live</a>
            <a href={currentProject.github} target='_blank' rel="noopener noreferrer">Github</a>
            </div>
        </div>
    )
}
