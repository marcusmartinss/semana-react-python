import { Box, Button, Dialog, DialogActions, Grid, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { Fragment } from 'react'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'

function Botao(props: any) {
  return <a href='#'>{props.titulo}</a>
}

const Home: NextPage = () => {
  const {
    listaProfessores,
    nome,
    setNome,
    email,
    setEmail
  } = useIndex()
  
  return (
    <Fragment>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista professores={listaProfessores}></Lista>
      </Box>

      <Dialog
        open={true}
        fullWidth
        PaperProps={ { sx: {
          pt: 5,
          pr: 5,
          pb: 2,
          pl: 5
        }}}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite o nome"
              type="text"
              fullWidth
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite o e-mail"
              type="email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 2}}>
          <Button>Cancelar</Button>
          <Button>Marcar</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default Home
