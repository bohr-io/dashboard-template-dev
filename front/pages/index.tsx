import { Button, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = '/palavras'
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Painel de Admin</title>
        <meta name="description" content="Painel de Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h1">
          Painel de Admin - Login
        </Typography>
        
        <form
          onSubmit={handleSubmit}
          className={styles.loginForm}
        >
          <TextField
            id="user"
            label="Usuário"
            type="text"
            size="small"
            variant="standard"
          />

          <TextField
            id="password"
            label="Senha"
            type="password"
            size="small"
            variant="standard"
          />
          
          <Button type="submit">
            Login
          </Button>
        </form>
      </main>
    </div>
  )
}

export default Home
