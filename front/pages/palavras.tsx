import styled from '@emotion/styled';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import Sidebar from '../components/commons/Sidebar';

const PageWrapper = styled.main`
  padding-inline: 30px;
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

const Palavras: NextPage = () => {
  const [fiter, setFilter] = useState('permitida');

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <PageWrapper>
        <HeaderWrapper>
          <Typography variant="h1">
            Palavras
          </Typography>
          <div className='filters'>
            <TextField
              label="pesquisa"
              size="small"
              placeholder="palavra"
            />
            <FormControl>
              <InputLabel id="words-status-select">Estado</InputLabel>
              <Select
                labelId="words-status-select"
                label="Estado"
                value={fiter}
                onChange={(e) => setFilter(e.target.value)}
                size="small"
              >
                <MenuItem value={'banida'}>banida</MenuItem>
                <MenuItem value={'permitida'}>permitida</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
            >
              Adicionar Palavra
            </Button>
          </div>
        </HeaderWrapper>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }}>
            <TableHead>
              <TableRow>
                <TableCell>Palavra</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>palavrão</TableCell>
                <TableCell>banida</TableCell>
                <TableCell><Button>D</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>palavrão</TableCell>
                <TableCell>banida</TableCell>
                <TableCell><Button>D</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>palavrão</TableCell>
                <TableCell>banida</TableCell>
                <TableCell><Button>D</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>palavrão</TableCell>
                <TableCell>banida</TableCell>
                <TableCell><Button>D</Button></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </PageWrapper>
    </div>
  )
}

export default Palavras;
