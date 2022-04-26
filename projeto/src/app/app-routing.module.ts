import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path:'home',
  //loadChildren:'./home/home.module#HomeModule',
  loadChildren: () =>  import('./home/home.module').then(home => home.HomeModule)
},
{
  path:'usuario',
  //loadChildren:'./home/home.module#HomeModule',
  loadChildren: () =>  import('./usuario/usuario.module').then(home => home.UsuarioModule)
},
{
  path:'estados',
  //loadChildren:'./home/home.module#HomeModule',
  loadChildren: () =>  import('./estados/estados.module').then(home => home.EstadosModule)
},
{
  path:'',
  pathMatch:'full',
  redirectTo: '/home'
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
