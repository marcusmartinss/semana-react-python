import { styled } from "@mui/material";

let corPrimaria = '#F52273'
export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;
    padding: 3rem 1rem 5rem 1rem;
    /* padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)}; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: space-between;
    gap: 3rem;

    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: 10rem 0;
`;

export const ItemLista = styled('li')`
    list-style: none;
`;

export const Foto = styled('img')`
    width: 100%;
`;

export const Informacoes = styled('div')`

`;

export const Nome = styled('h3')`
    margin: 1rem 0 0 0;
    /* margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)}; O tema tem um padrão de 8 pixels e spacing recebe os espaços no formato de inteiro */
    /* apesar de existir esta forma, deixei como rem para manter a responsividade */
`;

export const Valor = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.main };
`;

export const Descricao = styled('p')`
    word-break: break-word;
`;