import { IFiltroRelatorioDTO } from "../../model/relatorio/relatorioDTO";
import { ValidacaoBase } from "../../validations/validacaoBase"
import { excelUtil } from "../../utils/excel/";
import { IRelatorioRepository } from "../../repositories/relatorioRepository";

export class GeraRelatorioUseCase 
{
    constructor(private validaParamObrigatorios : ValidacaoBase, private relatorioRP1 : IRelatorioRepository)
    {
    }
 
    async execute(data: IFiltroRelatorioDTO)
    {
        await this.validaParams(data);

        const dadosApi:any = await this.relatorioRP1.buscaDadosRelatorioRP1(data);

        await this.validaRetornoDados(dadosApi);

        return await excelUtil.geraRelatorio(dadosApi);
    }

    private async validaParams(data: IFiltroRelatorioDTO)
    {
        const dadosValidacao = new Map<Object, string>([
            [data.codTurma, "codTurma"],
            [data.dataInicial, "dataInicial"],
            [data.dataFinal, "dataFinal"]
        ]);

        await this.validaParamObrigatorios.valida(dadosValidacao);
    }
    
    private async validaRetornoDados(data:any)
    {
        const dadosValidacao = new Map<Object, string>([
            [data, "retorno"],
        ]);

        await this.validaParamObrigatorios.valida(dadosValidacao);
    }
}