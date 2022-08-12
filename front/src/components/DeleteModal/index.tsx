import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import { FC, MouseEvent as ReactMouseEvent, ReactNode, useEffect, useRef } from 'react';

const DeleteModalWrapper = styled.dialog`
  position: relative;
  background: none;
  border: none;
  padding: 0;

  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
    min-height: 200px;
    padding: 40px;
  }
  
  .close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`

type Props = {
  children: ReactNode
  onClose: () => void
  onDelete: () => void
  isOpen: boolean
}

const DeleteModal: FC<Props> = ({ children, onClose, onDelete, isOpen }) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const currentModal = ref.current
    if (!currentModal) return

    if (isOpen) currentModal.showModal()
    else currentModal.close()
    
    return () => currentModal.close()
  }, [isOpen])

  const handleDialogClick = (e: ReactMouseEvent<HTMLDialogElement, MouseEvent>) => {
    const currentModal = ref.current
    if (!currentModal) return
    
    const dialogRect = currentModal.getBoundingClientRect()

    const isDialogClick = (
      dialogRect.top <= e.clientY &&
      e.clientY <= dialogRect.bottom &&
      dialogRect.left <= e.clientX &&
      e.clientX <= dialogRect.right
    );
    
    if (!isDialogClick) ref.current.close()
  }

  const handleClose = () => {
    ref.current?.close()
  }

  return (
    <DeleteModalWrapper
      ref={ref}
      onClose={onClose}
      onClick={handleDialogClick}
    >
      <Paper className='modal-container'>
        <IconButton
          className='close-btn'
          size="small"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h4">
          Do you really want to delete this entry?
        </Typography>
        {children}
        <Box
          display="flex"
          gap="20px"
          sx={{
            mt: 'auto',
            ml: 'auto',
          }}
        >
          <Button
            variant="contained"
            onClick={handleClose}
          >
            cancel
          </Button>
          <Button
            color="warning"
            variant="contained"
            onClick={onDelete}
          >
            delete
          </Button>
        </Box>
      </Paper>
    </DeleteModalWrapper>
  )
}

export default DeleteModal
