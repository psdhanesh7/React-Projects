import React from 'react'

const ProjectDetails = (props) => {

    const id = Number(props.match.params.id);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem quod, nostrum quasi cumque quidem
                         rem reiciendis amet id laudantium atque iusto fuga repudiandae asperiores voluptatum pariatur eos, doloremque cum.
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Dhanesh</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
