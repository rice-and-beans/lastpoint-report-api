export class Aula {
    public readonly id: string;
    public codigo: string;
    public datahorainicio: Date;
    public datahorafim: Date;
    public nome: string;
    public descricao: string;

    constructor(props: Omit<Aula, 'id'>, id?: string){
        Object.assign(this, props);
    }
}