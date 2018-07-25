export interface Filme {
    key?: string;
    filme: string;
    titulo_original: string;
    lancamento: number;
    pais: { 
        id: number;
        pais: string;
        sigla: string;
    };
    idioma: {
        id: number;
        idioma: string;
        sigla: string;
    };
    distribuidor: string;
    genero: string;
    sinopse: string;
    duracao: string;
    cartaz: string;
}