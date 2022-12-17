import classes from './skills.module.css'

export default function Skills() {
    return (
        <div className={classes.skills}>
            <h2>Skills:</h2>
            <div className={classes.skill}>
            <ul className={classes.skillList}>
                <li>
                Frontend - React, Angular
                </li>
                <li>
                Backend - Nodejs, Python and Golang
                </li>
                <li>
                Cloud - AWS(Solution Architect Certified by AWS), Azure
                </li>
                <li>
                Database - MongoDB, SQL Server, Snowflake
                </li>
                <li>
                Frameworks - Express, NextJs, NestJS, Strapi
                </li>
            </ul>
            </div>
        </div>
    )
}