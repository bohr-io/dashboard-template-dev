import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, TableCell, TableRow, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userResource from '../../services/api/userResource'
import { User } from '../../types'
import DeleteModal from '../DeleteModal'

type Props = {
  user: User
  deleteCallback: () => void
}

const UserTableEntry: FC<Props> = ({ user, deleteCallback }) => {
  const { id, username, email } = user
  const navigate = useNavigate()

  const [rowClickEnabled, setRowClickEnabled] = useState(true)
  const allowRowClick = () => setRowClickEnabled(true)
  const disallowRowClick = () => setRowClickEnabled(false)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  
  const handleRowClick = () => {
    if (!rowClickEnabled || isModalOpen) return
    navigate('/dash/user/' + id)
  }

  const handleDelete = async () => {
    const success = await userResource.delete(id)

    if (!success) {
      return alert('Failed to delete user')
    }

    alert('User deleted')
    deleteCallback()
    closeModal()
  }

  return (
    <TableRow
      hover={rowClickEnabled}
      role="button"
      onClick={handleRowClick}
    >
      <TableCell component="th">{username}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell align="right">
        <IconButton
          onClick={openModal}
          onMouseEnter={disallowRowClick}
          onMouseLeave={allowRowClick}
        >
          <DeleteIcon color="warning" />
        </IconButton>
        <DeleteModal
          isOpen={isModalOpen}
          onDelete={handleDelete}
          onClose={closeModal}
        >
          <Typography>User: {username}</Typography>
        </DeleteModal>
      </TableCell>
    </TableRow>
  )
}

export default UserTableEntry
