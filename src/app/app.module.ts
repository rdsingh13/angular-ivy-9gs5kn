import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from './app-routing/app-routing.module';
//import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [BrowserModule,RouterModule, FormsModule],
  declarations: [AppComponent, HelloComponent,WelcomeComponent,LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
