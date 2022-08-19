import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../contexts/UserContext';
import userResource from '../services/api/userResource';

export default function UserDetail() {
  const { userId: idParam } = useParams();
  const { users, fetchUsers, showToast } = useUser()
  const [formData, setFormData] = useState({
      id: '',
      username: '',
      email: '',
      password: '',
  });

  const [isEditable, setIsEditable] = useState(false)
  const enableEdit = () => setIsEditable(true)
  const disableEdit = () => setIsEditable(false)

  const user = users.find((user) => user.id === idParam)

  useEffect(() => {
    if (!user) return
    setFormData({ ...user })
  }, [user])

  const handleSubmit: FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault()
    const success = await userResource.post(formData)

    if (!success) {
      showToast({
        severity: 'error',
        message: 'Failed to update user'
      })
      return
    }
    
    showToast({
      severity: 'success',
      message: 'User updated'
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

  const handleReset = () => {
    if (!user) return
    setFormData({ ...user })
    disableEdit()
  }

  return (
    <main>
      <Typography variant="h1">
        User: { user?.username }
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
            id="id"
            label="id"
            name="id"
            value={user?.id || ''}
            onChange={handleFormChange}
            inputProps={{
              readOnly: true
            }}
          />
          <TextField
            id="username"
            label="username"
            name="username"
            value={formData.username}
            onChange={handleFormChange}
            inputProps={{
              readOnly: !isEditable
            }}
          />
          <TextField
            id="password"
            label="password"
            name="password"
            value={formData.password}
            onChange={handleFormChange}
            inputProps={{
              readOnly: !isEditable
            }}
          />
          <TextField
            id="email"
            label="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            inputProps={{
              readOnly: !isEditable
            }}
          />
        </CardContent>
        <CardActions>
          {isEditable ? (
            <>
              <Button
                type="button"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button type="submit">
                Submit
              </Button>
            </>
          ) : (
            <Button
              type="button"
              onClick={enableEdit}
            >
              Edit
            </Button>
          )}
        </CardActions>
      </Card>
    </main>
  )
}
