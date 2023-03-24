import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <h1 className='text-2xl text-blue-500'>The app is up and running</h1>
        <h2 className='text-xl text-blue-900'>Let's Go🚀🚀</h2>
      </div>
    </>
  )
}
