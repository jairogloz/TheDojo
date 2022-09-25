import {Link} from "react-router-dom";

// styles
import './ProjectList.css'
import Avatar from "./Avatar";

export default function ProjectList({projects}) {
    return (
        <div className={"project-list"}>
            {projects.length === 0 && <p>No projects yet!</p>}
            {projects.map(project => (
                <Link key={project.id} to={`/projects/${project.id}`}>
                    <h4>{project.name}</h4>
                    <p>Due by {project.dueDate.toDate().toDateString()}</p>
                    <div className={"assigned-to"}>
                        <ul>
                            {project.assignedUsersList.map(user => (
                                <li key={user.id}>
                                    <Avatar imgSrc={user.photoURL}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Link>
            ))}
        </div>
    )
}