
import Head from 'next/head';
import { GetServerSideProps }  from 'next';

import { Countdown } from "../components/Countdown"
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile"
import { ChallengeBox } from "../components/ChallengeBox";




import styles from '../style/pages/Home.module.css'
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from '../contexts/ChallengesContext';






export default function Home(props ) {
  
  
  return (
    
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}>
    <div className={styles.container}>
    
      <Head>
        <title> Inicio | move.it </title>
      </Head>
     
     
      <ExperienceBar />
      <CountdownProvider>
      <section >
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox/>
          
        </div>
      </section>
      </CountdownProvider>
      
    </div>
   
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  


  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
       currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted)
    }
  }
}

// Back-end (Ruby)
// Next.js (Node.js)
// Front-end (React)