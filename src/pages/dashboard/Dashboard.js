import {useCollection} from "../../hooks/useCollection";

// styles
import './Dashboard.css'
import ProjectList from "../../components/ProjectList";

export default function Dashboard() {

    const {documents, error} = useCollection('projects');

    return (
        <div>
            <h2 className={"page-title"}>Dashboard</h2>
            {error && <p className={"error"}>{error}</p>}
            {documents && <ProjectList projects={documents}/>}
        </div>
    )
}