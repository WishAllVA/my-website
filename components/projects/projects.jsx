import classes from './projects.module.css'

export default function Projects() {
    return (
        <div className={classes.projects}>
          <h2>Projects:</h2>
          <div className={classes.project}>
            <ul className={classes.projectList}>
              <li>
                Connected Elevators
              </li>
              <li>
                Shipment Tracking
              </li>
              <li>
                Bridgeport (Fintech)
              </li>
              <li>
                Sales Dashboards
              </li>
            </ul>
          </div>
        </div>
    )
}