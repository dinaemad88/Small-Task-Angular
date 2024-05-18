import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginnComponent } from './loginn/loginn.component';
import { HeaderComponent } from './shard/header/header.component';
import { FooterComponent } from './shard/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginnComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent // Declare the LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add this line
    AppRoutingModule,
    FontAwesomeModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }