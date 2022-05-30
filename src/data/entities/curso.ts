export class Curso {
    public readonly id: string;
    public codigo: string;
    public descricao: string;
    public nome: string;
    

    constructor(props: Omit<Curso, 'id'>, id?: string){
        Object.assign(this, props);
    }
}