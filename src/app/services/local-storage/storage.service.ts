import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { Usuario } from '../usuario.service';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _stotage: Storage | null = null;

  constructor(private storage: Storage) {
      this.init();
   }


   async init()
   {
      const storage = await this.storage.create();
      this._stotage = storage;
   }

   public async gravarNome(nomeP: string)
   {
      await this.storage.set('name', nomeP)
    //  const nome = await this.storage.get('name');
    //  return nome; 
   }

   public async mostrarNome()
   {
     const nome = await this.storage.get('name');
     console.log(nome)
   }

   public async gravarToken(token: string)
   {
     await this.storage.set('token', token);
   }

   public async buscarToken()
   {
     const token = await this.storage.get('token');
     return token;
   }

   public async gravarInformacoesUsuario(usuario: Usuario)
   {
     await this.storage.set('infoUsu', usuario);  
   }

  public async buscarInformacoesUsuario()
  {
    const usu = this.storage.get('infoUsu');
    return usu;
  }

  //Gravará valores booleanos para verificar e o usuário está logado
  public async gravarLogin(logado: boolean)
  {
    await this.storage.set('logado', logado)
  }

  public async verificarLogin()
  {
    return await this.storage.get('logado');
  }

   
}
