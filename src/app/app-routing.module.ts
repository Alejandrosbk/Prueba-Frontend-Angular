import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoggedGuard } from './guards/logged.guard';

// Creamos nuestro sistema de rutas validando si el usuario esta o no logueado con el guard logged
const routes: Routes = [
  {
    path: 'login',
      component: LoginComponent
  },
  {
    path: 'productos',
      component: ProductosComponent,
      canActivate: [LoggedGuard]
  },
  { path: '**',
      pathMatch: 'full',
      redirectTo: 'login' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
