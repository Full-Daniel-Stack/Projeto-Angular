import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'curso/:index', component: CursoDetailComponent},
  ]) ],
  declarations: [ AppComponent, HelloComponent,HomeComponent, CursosComponent, CursoDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
