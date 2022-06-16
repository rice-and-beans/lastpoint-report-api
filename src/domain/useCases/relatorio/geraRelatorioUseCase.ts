import { IFiltroRelatorioDTO } from "../../model/relatorio/relatorioDTO";
import { authApi } from "../../services/records/";
import { ValidacaoBase } from "../../validations/validacaoBase";
import { excelUtil } from "../../utils/excel/";
import { JSON_TESTE_RP1 } from "../../../constants/excel/cabecalhoPadraoConstants";

export class GeraRelatorioUseCase 
{
    constructor(private validaParamObrigatorios : ValidacaoBase)
    {
    }

    async execute(data: IFiltroRelatorioDTO)
    {
        await this.validaParams(data);

        const dadosApi:any = await authApi.buscaDadosRelatorioRP1(data.codTurma, data.dataInicial, data.dataFinal);

        await this.validaRetornoDados(dadosApi);
        await this.validaRetornoJson(dadosApi.data);

        return await excelUtil.geraRelatorio(JSON_TESTE_RP1);
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

    private async validaRetornoJson(data:any)
    {
        const dadosValidacao = new Map<Object, string>([
            [data, "retorno"],
        ]);

        await this.validaParamObrigatorios.valida(dadosValidacao);
    }
}