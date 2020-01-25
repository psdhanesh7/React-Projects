import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {

    const projectList = projects.length ? (
        projects.map(project => {
            // console.log(project);
            return (
                <ProjectSummary project = {project} key = {project.id} />
            )
        })
    ) : (
        <div>
            <p>No projects yet</p>
        </div>
    )
    return (
        <div className="project-list section">
            {projectList}
        </div>
    )
}

export default ProjectList;