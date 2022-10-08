import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'

function Botao(props: any) {
  return <a href='#'>{props.titulo}</a>
}

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Marcus Martins",
      foto: "https://github.com/marcusmartinsxx.png",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Narcus Nartins",
      foto: "https://github.com/marcusmartinsxx.png",
      descricao: "Descrição do professor 2",
      valor_hora: 100
    },
    {
      id: 3,
      nome: "Parcus Patins",
      foto: "https://github.com/marcusmartinsxx.png",
      descricao: "Descrição do professor 3",
      valor_hora: 100
    },
    {
      id: 4,
      nome: "Kalculus Kartins",
      foto: "https://github.com/marcusmartinsxx.png",
      descricao: "Descrição do professor 4",
      valor_hora: 100
    }
  ]
  
  return (
    <Fragment>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista professores={professores}></Lista>
      </Box>
    </Fragment>
  )
}

export default Home
