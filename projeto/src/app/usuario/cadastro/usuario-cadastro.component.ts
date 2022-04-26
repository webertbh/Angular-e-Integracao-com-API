import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Usuario } from 'src/app/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario: Usuario = new Usuario()

  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit(): void { }

  public salvar(){
    this.usuarioService.salvar(this.usuario).subscribe(
      response => {
        alert ("Salvo com sucesso")
      },
      error => {
        alert ("Não cadastrado")
      }
     )
    
  }
}
