import { prismaClient } from "../database/prismaClient";
import { IUsuarioRepository } from "../../domain/repositories/usuarioRepository";
import { Usuario } from "../entities/usuario";

export class UsuarioRepositoryImpl implements IUsuarioRepository {
    async buscarPorEmail(email: string): Promise<Usuario>{
        const usuario = await prismaClient.usuario.findUnique({
            where:{
                email: email
            }
        })
        return usuario != null ? new Usuario(usuario) : usuario;
    }
    async salvar(usuario: Usuario){
        const usuarioSalvo = await prismaClient.usuario.create({
            data: {
              codigo: usuario.codigo,
              nome: usuario.nome,
              email: usuario.email,
              senha: usuario.senha,
              tipo: usuario.tipo
            },
          })
        console.log(usuarioSalvo)
        return usuarioSalvo
    }

   async atualizar(email:string, usuario:Usuario){  
       const usuarioAtualizado = await prismaClient.usuario.update({
           where:{
               email: email,
           },
           data:{
            codigo: usuario.codigo,
            nome: usuario.nome,
            email: usuario.email,
            senha: usuario.senha,
            tipo: usuario.tipo
           }
       })
       return usuarioAtualizado
   }

   async deletar(email:string){
       const usuarioDeletado = await prismaClient.usuario.delete({
           where:{
               email: email,
           }
       })
       return usuarioDeletado
   }
       
}