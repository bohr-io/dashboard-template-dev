import styled from '@emotion/styled';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';

const PageWrapper = styled.main`
  width: 100%;
`

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
  const [fiter, setFilter] = useState('allowed');

  return (
    <PageWrapper>
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
          <FormControl>
            <InputLabel id="words-status-select">Status</InputLabel>
            <Select
              labelId="words-status-select"
              label="Status"
              value={fiter}
              onChange={(e) => setFilter(e.target.value)}
              size="small"
            >
              <MenuItem value={'banned'}>banned</MenuItem>
              <MenuItem value={'allowed'}>allowed</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
          >
            New User
          </Button>
        </div>
      </HeaderWrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>allowed</TableCell>
              <TableCell><Button>D</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>allowed</TableCell>
              <TableCell><Button>D</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>allowed</TableCell>
              <TableCell><Button>D</Button></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>allowed</TableCell>
              <TableCell><Button>D</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </PageWrapper>
  )
}

export default User;
