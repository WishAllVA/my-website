import classes from './project.module.css'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export default function Project(props) {
  const { onOpenProjectHandler, projectList } = props
  return (
    <ul className={classes.projectList}>
      {
        projectList.map(project => {
          return (
            <li key={project.id.toString()}>
              <div>
                {project.name} <span id={project.id} onClick={onOpenProjectHandler}>{ project.open ? <BsChevronUp /> : <BsChevronDown /> }</span>
                <div style={{ display: project.open ? 'inherit' : 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, expedita! Porro suscipit, fuga consequatur ratione obcaecati libero, architecto, tenetur ipsam excepturi nobis quas ipsa consectetur omnis numquam doloremque! Ratione, saepe.</div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}