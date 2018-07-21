export interface Serie {
    key?: string;
    serie: string;
    titulo_original: string;
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
    cartaz: string;
}