

import { Countdown } from "../components/Countdown"
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile"
import { ChallengeBox } from "../components/ChallengeBox";


import Head from 'next/head';

import styles from '../style/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title> Inicio | move.it </title>
      </Head>
     
      <ExperienceBar />

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
    </div>
  )
}