import styled from '@emotion/styled';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTableEntry from '../components/UserTableEntry';
import useUser from '../contexts/UserContext';

const HeaderWrapper = styled.header`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;

  .filters {
    width: 100%;
    display: flex;
    gap: 10px;

    & > :last-child {
      margin-left: auto;
    }
  }
`

const User: FC = () => {
  const navigate = useNavigate()
  const { users, fetchUsers } = useUser()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [fiter, setFilter] = useState('')

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0
  const isFirstPage = page === 0
  const isLastPage = page + 1 === Math.ceil(users.length / rowsPerPage)
  const hasOnlyOnePageEntry = rowsPerPage - emptyRows === 1
  
  const deleteCallback = () => {
    if (isLastPage && !isFirstPage && hasOnlyOnePageEntry) setPage((old) => old - 1)
    fetchUsers()
  }  

  return (
    <main>
      <HeaderWrapper>
        <Typography variant="h1">
          User
        </Typography>
        <div className='filters'>
          <TextField
            label="search"
            size="small"
            placeholder="name"
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="words-status-select" size="small">Status</InputLabel>
            <Select
              labelId="words-status-select"
              label="Status"
              value={fiter}
              size="small"
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value={''}>all</MenuItem>
              <MenuItem value={'allowed'}>allowed</MenuItem>
              <MenuItem value={'banned'}>banned</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={() => navigate('/dash/user/new')}
          >
            New User
          </Button>
        </div>
      </HeaderWrapper>
      <Paper sx={{ minWidth: '100%' }}>
        <TableContainer>
          <Table sx={{ minWidth: 600 }}>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => <UserTableEntry key={user.id} user={user} deleteCallback={deleteCallback} />
              )}

              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 73 * emptyRows,
                  }}
                >
                  <TableCell colSpan={3} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={users.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          showFirstButton
          showLastButton
          onPageChange={(e: unknown, newPage: number) => { setPage(newPage) }}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </Paper>
    </main>
  )
}

export default User;
