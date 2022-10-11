import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [content, setContent] = React.useState('Test')
  const [command, setCommand] = React.useState('')
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Jinbread works in progress</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        

        <p className={styles.title}>
          Jinbread works{' '}
          <div className={styles.tag}>in progress</div>
        </p>
        <p className={styles.description}>Interaction designer by day, <br/> creative coder and writer by night.</p>

        <form onSubmit={(e) => {
          setContent(content +" "+ command)
          setCommand("")
          e.preventDefault();
        }}>

          <input value={command} onChange={(e) => setCommand(e.target.value)} />
          <button type="submit">제출</button>
        </form>

        <div className={styles.terminal} >{content}</div>

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
