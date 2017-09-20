import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
