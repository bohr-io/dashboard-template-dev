import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import useUser from '../contexts/UserContext'
import userResource from '../services/api/userResource'

const initialFormData = {
  username: '',
  password: '',
  email: '',
}

export default function UserNew() {
  const { fetchUsers, showToast } = useUser()
  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit: FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault()
    const success = await userResource.post({
      ...formData,
      id: null,
    })

    if (!success) {
      showToast({
        severity: 'error',
        message: 'Failed to create user',
      })
      return
    }

    setFormData(initialFormData)
    showToast({
      severity: 'success',
      message: 'User created',
    })
    fetchUsers()
  }

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    setFormData((old) => ({
      ...old,
      [name]: value
    }))
  }

  return (
    <main>
      <Typography variant="h1">
        New User
      </Typography>
      <Card
        component="form"
        onSubmit={handleSubmit}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          <TextField
            id="username"
            label="username"
            name="username"
            value={formData.username}
            onChange={handleFormChange}
          />
          <TextField
            id="password"
            label="password"
            name="password"
            value={formData.password}
            onChange={handleFormChange}
          />
          <TextField
            id="email"
            label="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
        </CardContent>
        <CardActions>
          <Button type="submit">
            Submit
          </Button>
        </CardActions>
      </Card>
    </main>
  )
}
