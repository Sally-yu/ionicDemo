import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginPage} from './login/login.page';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', component:LoginPage},
  { path: 'popover', loadChildren: './tab1/popover/popover.module#PopoverPageModule' },
  { path: 'popover', loadChildren: './tab2/popover/popover.module#PopoverPageModule' },
  { path: 'popover', loadChildren: './tab3/popover/popover.module#PopoverPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
