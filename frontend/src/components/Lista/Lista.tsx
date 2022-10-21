import { Button } from '@mui/material';
import { Fragment } from 'react';
import { Professor } from '../../@types/professor';
import { FormatadorService } from '../../services/FormatadorService';
import { ListaStyled, ItemLista, Foto, Informacoes, Nome, Valor, Descricao, ListaVazia } from "./Lista.style";

interface ListaProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void
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
                                <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                                <Descricao>{FormatadorService.limitarTexto(professor.descricao, 200)}</Descricao>
                                <Button 
                                    sx={{ width: '80%' }}
                                    onClick={() => { props.onSelect(professor) }}
                                >
                                    Marcar aula com {professor.nome.trim().split(' ')[0]}
                                </Button>
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