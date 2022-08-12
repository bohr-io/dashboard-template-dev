import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, TableCell, TableRow, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../types'
import DeleteModal from '../DeleteModal'

const UserTableEntry: FC<{ user: User }> = ({ user }) => {
  const { id, name, status } = user
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

  const handleDelete = () => {
    console.log('delete', name)
    closeModal()
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
          <Typography>User: {name}</Typography>
        </DeleteModal>
      </TableCell>
    </TableRow>
  )
}

export default UserTableEntry
