import Head from 'next/head'
import Image from 'next/image'
import { Grid } from '../components/grid'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Grid/>
      </main>
    </div>
  )
}
