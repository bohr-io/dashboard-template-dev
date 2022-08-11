import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, TableCell, TableRow } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types'

const UserTableEntry: FC<{ user: User }> = ({ user }) => {
  const { id, name, status } = user
  const navigate = useNavigate()
  const [rowClickEnabled, setRowClickEnabled] = useState(true)

  const handleRowClick = () => {
    if (!rowClickEnabled) return
    navigate('/dash/user/' + id)
  }

  const handleDelete = () => {
    console.log('delete', name)
  }

  const handleDeleteMouseEnter = () => {
    setRowClickEnabled(false)
  }
  
  const handleDeleteMouseLeave = () => {
    setRowClickEnabled(true)
  }

  return (
    <TableRow
      key={id}
      hover={rowClickEnabled}
      role="button"
      onClick={handleRowClick}
    >
      <TableCell>{name}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={handleDelete}
          onMouseEnter={handleDeleteMouseEnter}
          onMouseLeave={handleDeleteMouseLeave}
        >
          <DeleteIcon color="warning" />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default UserTableEntry
