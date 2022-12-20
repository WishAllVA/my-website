import { useState } from 'react'
import classes from './projects.module.css'
import Project from './project'

export default function Projects() {
  const ProjectList = [
    {
      id: 1,
      name: 'Connected Elevators',
      description: '',
      open: false,
      imageSrc: '/connected-elevators.png'
    },
    {
      id: 2,
      name: 'Shipment Tracking',
      description: '',
      open: false,
      imageSrc: '/travis.png'
    },
    {
      id: 3,
      name: 'Bridgeport (Fintech)',
      description: '',
      open: false,
      imageSrc: '/bridgeport.png'
    },
    {
      id: 4,
      name: 'Sales Dashboards',
      description: '',
      open: false,
      imageSrc: '/power_bi.png'
    }
  ]
  const [projectList, setProjectList] = useState(() => ProjectList)
  const onOpenProjectHandler = (event) => {
      const openProjectId = event.currentTarget.id
      const currentProjectList = projectList
      setProjectList(currentProjectList.map(project => {
        return {
          ...project,
          open: project.id == openProjectId ? !project.open : false
        }
      }))
  }
  return (
      <div className={classes.projects}>
        <h2>Projects:</h2>
        <div className={classes.project}>
          <Project projectList={projectList} onOpenProjectHandler={onOpenProjectHandler} />
        </div>
      </div>
  )
}