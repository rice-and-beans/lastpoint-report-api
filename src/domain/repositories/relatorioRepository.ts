import { IFiltroRelatorioDTO } from "../model/relatorio/relatorioDTO";

export interface IRelatorioRepository
{
    buscaDadosRelatorioRP1(data: IFiltroRelatorioDTO);
}