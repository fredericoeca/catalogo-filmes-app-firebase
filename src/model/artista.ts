export interface Artista {
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