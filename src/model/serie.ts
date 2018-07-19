export interface Serie {
    key?: string;
    serie: string;
    titulo_original: string;
    temporadas: {
        key?: string;
        temporada: string;
        lancamento: string;
        cartaz: string;
        episodios: [
            {
                episodio: string;
                titulo: string;
                data: Date;
                duracao: string;
            }
        ];
    };
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
    elenco: [
        { 
            key?: string;
            nome: string;
            atividade: string;
            pais: {
                id: number;
                pais: string;
                sigla: string;
            };
            nascimento: Date;
            foto: string;    
        }
    ]
}