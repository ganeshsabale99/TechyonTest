import React, { useState } from "react";
import "./ProjectOverview.scss";
import { ReactComponent as TyIcon } from "../../assets/svg/tyIcon.svg";
import { ReactComponent as BootmArrowIcon } from "../../assets/svg/bottomArrow.svg";
import { ReactComponent as FolderIcon } from "../../assets/svg/folder.svg";
import { ReactComponent as CalenderIcon } from "../../assets/svg/calender.svg";
import ExampleImage from "../../assets/image/image 5.png";
import { ReactComponent as ClipIcon } from "../../assets/svg/clip.svg";
import { ReactComponent as MoreIcon } from "../../assets/svg/more.svg";
import { ReactComponent as Grid8Icon } from "../../assets/svg/grid8.svg";
import { ReactComponent as ListIcon } from "../../assets/svg/listView.svg";
import { ReactComponent as PeopleTableIcon } from "../../assets/svg/peopleTable.svg";
import { ReactComponent as TaskTableIcon } from "../../assets/svg/task.svg";
import { ReactComponent as StatusTableIcon } from "../../assets/svg/statusTable.svg";
import { ReactComponent as ImageIcon } from "../../assets/svg/image.svg";
const ProjectOverview = () => {
  const [viewMode, setViewMode] = useState("grid");

  const projectCards = [
    { id: 1, name: "Project Name", status: "Not Started" },
    { id: 1, name: "Project Name", status: "Not Started" },
    { id: 1, name: "Project Name", status: "Not Started" },
    { id: 1, name: "Project Name", status: "Not Started" },
    { id: 2, name: "Project Name", status: "In Progress" },
    { id: 2, name: "Project Name", status: "In Progress" },
    { id: 2, name: "Project Name", status: "In Progress" },
    { id: 2, name: "Project Name", status: "In Progress" },
    { id: 3, name: "Project Name", status: "Archived" },
    { id: 3, name: "Project Name", status: "Archived" },
    { id: 3, name: "Project Name", status: "Archived" },
    { id: 3, name: "Project Name", status: "Archived" },
    { id: 4, name: "Project Name", status: "Completed" },
    { id: 4, name: "Project Name", status: "Completed" },
    { id: 4, name: "Project Name", status: "Completed" },
    { id: 4, name: "Project Name", status: "Completed" },
   
  ];

  
  const categorizedProjects = {
    "Not Started": projectCards.filter(
      (project) => project.status === "Not Started"
    ),
    "In Progress": projectCards.filter(
      (project) => project.status === "In Progress"
    ),
    Archived: projectCards.filter((project) => project.status === "Archived"),
    Completed: projectCards.filter((project) => project.status === "Completed"),
  };

  const getCategoryClassName = (status) => {
    switch (status) {
      case "Not Started":
        return "category-title not-started";
      case "In Progress":
        return "category-title in-progress";
      case "Archived":
        return "category-title archived";
      case "Completed":
        return "category-title completed";
      default:
        return "category-title";
    }
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="project-overview">
      <div className="headerTop">
        <h1 className="project-title">Projects</h1>
        <div className="add-project-button">
          <TyIcon className="icon" />
          Projects
        </div>
      </div>
      <div className="subHeader">
        <div className="headerBottom">
          <h2 className="project-subtitle">All Projects</h2>
          <BootmArrowIcon className="icon" />
        </div>
        <div className="headerBottom">
          <ListIcon
            className={`listIcon ${viewMode === "list" ? "active-icon" : ""}`}
            onClick={() => handleViewModeChange("list")}
          />
          <Grid8Icon
            className={`listIcon ${viewMode === "grid" ? "active-icon" : ""}`}
            onClick={() => handleViewModeChange("grid")}
          />
          <MoreIcon className="moreIcon" />
        </div>
      </div>
      {viewMode === "grid" ? (
        <div className="main-container">
          <div className="project-list">
            {Object.keys(categorizedProjects).map((status) => (
              <div key={status} className="project-category">
                <div className={getCategoryClassName(status)}>{status} 2</div>
                <div className="category-cards">
                  {categorizedProjects[status].map((project) => (
                    <div key={project.id} className="project-card">
                      <div className="card-top">
                        <div className="card-header">
                          <FolderIcon className="folder-icon" />
                          <h3 className="project-header">{project.name}</h3>
                        </div>
                        
                        <div className="project-id">ID: P-{project.id}</div>
                      </div>
                      <div>
                        <div className="progress-container">
                          <span className="left-text">07</span>{" "}
                          <div className="progress-left"></div>
                          <div className="progress-right"></div>{" "}
                          <span className="right-text">14</span>
                        </div>
                        <div className="progress-text">
                          <span className="left-text"></span>
                          <span className="middle-text">50%</span>
                          <span className="right-text"></span>
                        </div>
                      </div>
                      <div>
                        <div className="date-layout">
                          <CalenderIcon className="folder-icon" />
                          01/01/2024 - 31/01/2024
                        </div>
                      </div>
                      <div className="last">
                        <div className="date-layout">
                          <img
                            className="image"
                            src={ExampleImage}
                            alt="Project"
                          />
                          <div className="text">10+</div>
                        </div>
                        <div className="date-layout">
                          <ClipIcon className="folder-icon" />
                          <div className="text">12 Files</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {categorizedProjects[status].length > 0 && (
                    <div className="view-more-text">View More</div>
                  )}
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      ) : (
        <div className="project-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>
                <div className="content-wrapper"><FolderIcon className="folderTable-icon" /> Project Name</div>
                </th>
                <th>%</th>
                <th>
                <div className="content-wrapper"><PeopleTableIcon className="folderTable-icon" /> Owner</div>
                </th>
                <th>
                <div className="content-wrapper"><TaskTableIcon className="folderTable-icon" />
                  Tasks</div>
                </th>
                <th>
                <div className="content-wrapper"><StatusTableIcon className="folderTable-icon" />
                  Status</div>
                </th>
                <th>
                <div className="content-wrapper"><CalenderIcon className="folderTable-icon" />
                  Start Date</div>
                </th>
                <th>
                <div className="content-wrapper"><CalenderIcon className="folderTable-icon" />
                  End Date</div>
                </th>
              </tr>
            </thead>
            <tbody>
              
              {Array.from({ length: 10 }, (_, index) => {
                const projectId = index + 1; 
                let statusText = "Not Started";
                let statusColor =
                  "var(--Project-Creation-Status-Not-Started, #B0B0B0)"; 

                if (projectId === 2) {
                  statusText = "In Progress";
                  statusColor =
                    "var(--Project-Creation-Status-In-Progress, #4A90E2)";
                } else if (projectId === 3) {
                  statusText = "Completed";
                  statusColor =
                    "var(--Project-Creation-Status-Completed, #4CAF50)";
                } else if (projectId === 4) {
                  statusText = "Archived";
                  statusColor =
                    "var(--Project-Creation-Status-Archived, #607D8B)";
                }

                return (
                  <tr key={projectId}>
                    <td>{projectId}</td> 
                    <td>Techyon Software</td> 
                    <td>50%</td> 
                    <td>
                      {" "}
                      <div className="content-wrapper"><ImageIcon className="imageIcon" /> Techyon</div>
                    </td>{" "}
                    
                    <td>
                      {" "}
                      <div>
                        <div className="tableprogress-container">
                          <span className="tableleft-text">10</span>{" "}
                          <div className="tableprogress-left"></div>
                          <div className="tableprogress-right"></div>{" "}
                          <span className="tableright-text">20</span>
                        </div>
                        <div className="tableprogress-text">
                          <span className="tableleft-text"></span>
                          <span className="tablemiddle-text">50%</span>
                          <span className="tableright-text"></span>
                        </div>
                      </div>
                    </td>{" "}
                    
                    <td
                      style={{
                        backgroundColor: statusColor,
                        padding: "5px 10px",
                        
                        color: "#fff", 
                        textAlign: "center",
                      }}
                    >
                      {statusText}
                    </td>{" "}
                    
                    <td>29/10/2024</td> 
                    <td>29/10/2024</td> 
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectOverview;
