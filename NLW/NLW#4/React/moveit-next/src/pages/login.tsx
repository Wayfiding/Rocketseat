import Head from 'next/head'
import React from 'react'
import { signIn } from 'next-auth/client';
import styles from '../style/pages/Login.module.css'

export default function Login(){
    return(

    <div className={styles.wrapper}>
        <Head>
            <title>Sign In</title>
        </Head>
    </div>

    )
}