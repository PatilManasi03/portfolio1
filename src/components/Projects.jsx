import React from 'react';
import projects from './data/projects.json';

const Projects = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center">
        {projects.map((data) => (
          <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div className="card bg-dark text-light" 
                style={{
                  width: "18rem", 
                  height: "25rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)", 
                  backgroundColor: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
                data-aos="flip-right" data-aos-duration="1000">
              <div className="img d-flex justify-content-center align-items-center p-3" style={{height: "150px"}}>
                <img src={data.imageSrc} className="card-img-top" alt="..." 
                  style={{
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    border: '2px solid yellow', 
                    borderRadius: "10px"
                  }}/>
              </div>
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text flex-grow-1">{data.description}</p>
                <div>
                  <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                  <a href={data.source} className="btn btn-warning">Code</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
