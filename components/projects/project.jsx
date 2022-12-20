import classes from './project.module.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.css"
import Image from 'next/image'

export default function Project(props) {
  const { onOpenProjectHandler, projectList } = props
  return (
    <Carousel
      className={classes.container}
      autoPlay
      // centerMode
      infiniteLoop
      showArrows={true}
      onChange={() => {}}
      onClickItem={() => {}}
      onClickThumb={onOpenProjectHandler}
      // axis="horizontal"
    >
      {
        projectList.map(project => {
          return (
            <div className={classes.slide} key={project.id.toString()}>
              <Image src={project.imageSrc} id={project.id.toString()} width={300} height={500} />
              <p className="legend">{project.name}</p>
            </div>
          )
        })
      }
    </Carousel>
  )
}