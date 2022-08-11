import { Button, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import { FC, FormEvent } from 'react'
import styles from '../styles/Home.module.css'

const Login: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = '/dash/home'
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h1">
          Dashboard - Login
        </Typography>
        
        <form
          onSubmit={handleSubmit}
          className={styles.loginForm}
        >
          <TextField
            id="user"
            label="User"
            type="text"
            size="small"
            variant="standard"
          />

          <TextField
            id="password"
            label="Password"
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

export default Login
