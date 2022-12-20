import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.css'
import { useParallax } from "react-scroll-parallax"
import Career from '../components/career/career'
import Projects from '../components/projects/projects'
import Skills from '../components/skills/skills'
import { useEffect } from 'react'
import Education from '../components/education/education'
import Navbar from '../components/navbar/navbar'

export default function Home() {
  // const skyParallax = useParallax({
  //   speed: -210
  // })
  const profilePicParallax = useParallax({
    speed: -10
  })
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 1400,
        behavior: 'smooth'
      })
    }, 2000)
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, 4000)
  }, [])
  return (
    <div className={classes.container}>
      <div>
        <Navbar />
      </div>
      <div className={classes.bannerHolder} id="home">
        {/* <Image src="/main-bg.svg" alt="Sky" width={1600} height={1000} /> */}
      </div>
      <div className={classes.main}>
        <Head>
          <title>Vishal&apos;s Website</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/profilePic.svg" />
        </Head>
        <div ref={profilePicParallax.ref} className={classes.profilePic}>
          <Image src="/profilePic.png" alt="Profile Pic" width={222} height={216} />
        </div>
        <div>

          <div className={classes.banner}>
          </div>
          <div className={classes.intro}>
            <h1>Hey folks, I am Vishal Arora <br /> Welcome to my website</h1>
          </div>
          {/* <div className={classes.bannerText}>
            <h2>Perhaps you are overvaluing what you don&apos;t have </h2>
          </div>
          <div className={classes.bannerText2}>
            <h2>and undervaluing what you do</h2>
          </div> */}

          <div className={classes.sections} id="about">
            <Career />
            <Projects />
            <Skills />
            {/* <Education /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
