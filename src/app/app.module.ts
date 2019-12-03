import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { InMemoryDataService } from './mocks/in-memory-data-service';
import { OnlyCharDirective } from './directives/only-char.directive';
import { StudentListComponent } from './modules/student-list/student-list.component';
import { ScoreComponent } from './modules/score/score.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { CalculadoraComponent } from './modules/calculadora/calculadora.component';
            


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    OnlyCharDirective,
    StudentListComponent,
    ScoreComponent,
    CalculadoraComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientTestingModule,
    ReactiveFormsModule,
    
    MatSelectModule,
    MatTableModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
