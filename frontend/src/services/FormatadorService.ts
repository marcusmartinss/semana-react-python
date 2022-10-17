
export const FormatadorService = {
    valorMonetario(valor: Number): String {
        return valor.toLocaleString(
            'pt-br',
            {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            }
        );
    },
    limitarTexto(texto: String, tamanhoMaximo: Number): String {
        if ( texto.length < tamanhoMaximo )
            return texto;

        return ( texto.slice(0, 50) + '...' );
    }
}