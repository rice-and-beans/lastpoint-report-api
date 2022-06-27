import { prismaClient } from "../database/prismaClient";
import { IRelatorioRepository } from "../../domain/repositories/relatorioRepository";
import { IFiltroRelatorioDTO } from "../../domain/model/relatorio/relatorioDTO";

export class reportRepositoryImpl implements IRelatorioRepository 
{
    async buscaDadosRelatorioRP1(data: IFiltroRelatorioDTO)
    {
        var datainicio = null;
        var datafim = null;
        
        if(data.dataInicial)
        {
            datainicio = new Date(data.dataInicial);
        }
        
        if(data.dataFinal)
        {
            datafim = new Date(data.dataFinal);
        }
    
        const chamada = await prismaClient.chamada.findMany({
            select: 
            {
                presenca: true,
                usuario:{ select: {nome: true, tipo: true}},           
                aula: 
                {
                    select: 
                    {
                        nome: true,
                        dataHoraInicio: true,
                        dataHoraFim: true,
                        curso: { select: { nome: true }},
                        turma: { select: {nome: true }},
                        disciplina: { select: {nome: true }}
                    }
                }
            },
            where: 
            {
                aula:
                {
                    AND:
                    [
                        {turmaCodigo: data.codTurma != null ? data.codTurma : undefined},
                        {dataHoraInicio: {gte: datainicio}},
                        {dataHoraFim: {lte: datafim}}
                    ],
                }
            }
        })
    
        return chamada;
    }
} 