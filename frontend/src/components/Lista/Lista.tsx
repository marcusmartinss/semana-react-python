import { Button } from '@mui/material';
import { Fragment } from 'react';
import { Professor } from '../../@types/professor';
import { ListaStyled, ItemLista, Foto, Informacoes, Nome, Valor, Descricao, ListaVazia } from "./Lista.style";

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {
    return(
        <Fragment>
            { props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto} />
                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{professor.valor_hora.toLocaleString('pt-br', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Valor>
                                <Descricao>{professor.descricao}</Descricao>
                                <Button sx={{ width: '80%' }}>Marcar aula com {professor.nome.trim().split(' ')[0]}</Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </Fragment>
    );
}

export default Lista;