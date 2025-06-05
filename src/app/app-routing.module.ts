import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DrapresizeboxComponent } from './components/drapresizebox/drapresizebox.component';


import { IptrackerComponent } from './components/iptracker/iptracker.component';

const routes: Routes = [{path:'',component:AppComponent},
  {path:'drag',component:DrapresizeboxComponent},

  {path:'ip',component:IptrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
