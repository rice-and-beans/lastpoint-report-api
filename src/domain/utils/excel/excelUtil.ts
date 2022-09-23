const excel4node = require('excel4node');
const excelWK = new excel4node.Workbook();
const excelWKS = excelWK.addWorksheet('ArquivoExcel')

import { CABECALHO_PADRAO_RP1 } from '../../../constants/excel/cabecalhoPadraoConstants';
import { COLUNA_PADRAO_RP1 } from '../../../constants/excel/padraoTypeConstants';

export class IExcelUtil
{
    async geraRelatorio(data:any)
    {
        this.montaCabecalho();

        var idxLinha = 2;
        data.forEach(dados => {
            var dataInicial:string = this.separaDataHora(dados.aula.dataHoraInicio.toLocaleString());
            var dataFinal:string   = this.separaDataHora(dados.aula.dataHoraFim   .toLocaleString());

            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeAula      , dados.aula.nome);
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeCurso     , dados.aula.curso.nome);
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeTurma     , dados.aula.turma.nome);
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeDisciplina, dados.aula.disciplina.nome);
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.Data          , dataInicial[0].toString());
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.HoraInicial   , dataInicial[1].toString());
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.HoraFinal     , dataFinal  [1].toString());
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.NomeAluno     , dados.usuario.nome); 
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.TipoAluno     , dados.usuario.tipo == 1 ? "Professor" : "Estudante");
            this.montaLinhaRelatorio(idxLinha, COLUNA_PADRAO_RP1.Presenca      , dados.presenca === "P" ? "Presente" : "Faltou");
            idxLinha++;
        });

        return excelWK;
    }

    private async montaCabecalho() 
    {
        var IdxCabecalhoColuna = 1;
        CABECALHO_PADRAO_RP1.forEach(cabecalho => 
        {
            excelWKS.cell(1, IdxCabecalhoColuna++).string(cabecalho);
        });
    }

    private separaDataHora(data) : string
    {
        data.split("T");
        return data.split(" ");
    }

    private async montaLinhaRelatorio(Linha, Coluna, Opcao)
    {
        var stylePresente = excelWK.createStyle({
            font: {
            color: 'black'
            }
        })

        if (Coluna == COLUNA_PADRAO_RP1.Presenca)
        {
            stylePresente = excelWK.createStyle({
                font: 
                {
                color: Opcao == "Presente" ? 'green' : 'red',
                }
            })
        }

        excelWKS.cell(Linha, Coluna).string(Opcao).style(stylePresente);
    }
}