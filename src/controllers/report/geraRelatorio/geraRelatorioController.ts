import { Request, Response } from "express";
import { BaseControllerAuth } from "../../baseControllerAuth";
import { GeraRelatorioUseCase } from "../../../domain/useCases/relatorio/geraRelatorioUseCase"


export class GeraRelatorioController extends BaseControllerAuth
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

        planilha.write("RelatorioRP1.xlsx", response);
        return response;
    }
}