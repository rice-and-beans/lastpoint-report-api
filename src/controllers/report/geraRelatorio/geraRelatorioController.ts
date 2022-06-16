import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { GeraRelatorioUseCase } from "../../../domain/useCases/relatorio/geraRelatorioUseCase"


export class GeraRelatorioController extends BaseController 
{
    constructor(private gerarRelatorioUseCase: GeraRelatorioUseCase) 
    {
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>
    {
        const { codTurma, dataInicial, dataFinal } = request.body;
        
        const planilha = await this.gerarRelatorioUseCase.execute({
            codTurma,
            dataInicial,
            dataFinal
        });

        planilha.write("arquivoExcel.xlsx", response);
        return response;
    }
}