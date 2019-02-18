import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent} from './heros/hero-details/hero-details.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
	 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	 { path: 'heroes', component: HeroesComponent },
	 { path: 'dashboard', component: DashboardComponent },
	 { path: 'detail/:id', component: HeroDetailsComponent },
	 { path: 'message', component: MessageComponent },
];
	

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
