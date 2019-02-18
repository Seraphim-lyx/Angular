import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './heros/hero-details/hero-details.component';
import { MessageComponent } from './message/message.component';
import { InMemoryDataService } from './service/in-memory-data.service';
import { HeroService } from './service/hero.service';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailsComponent,
    MessageComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
