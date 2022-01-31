import React from 'react'
import './project.scss'

function Project() {
    return (
        <div className="project-container">
            <div className="react-on-rails-project">
                <ul>
                    <h1>Rails and Ruby projects</h1>

                    <li>
                        <div>
                            <h2>Sneaker display and buy</h2>
                            <img />
                            <p>Worked primarily on the backend in order to do full CRUD with Ruby on Rails. This app lets users emulate the experience of buying something.
                                
                            </p>

                        </div>
                    </li>

                    <li>
                        <div>
                            <h2>Movie List Projects</h2>
                        </div>
                    </li>
                </ul>


                <br />
            </div>

            <div className="react-project">
                <h1>React projects</h1>
                <div>Hangman Game</div>
                <div>Toy tales</div>
                <div>To do Notes</div>
                <div>Plant shop</div>
                <div>Sushi saga</div>
                <div>Create and Task list</div>
                <br />
            </div>

            <div className="vanila-js-project">
                <h1>Vanila JavaScript Projects</h1>
                <div className="project-body">
                    <div>
                        <hi>Dog Adoption</hi>
                        <h3>Github repository</h3>
                    </div>

                    <div>Ramen Rater</div>
                    <div>Simple liker project</div>
                </div>

            </div>
        </div>

    )
}

export default Project
