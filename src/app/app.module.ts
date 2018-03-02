import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";



import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppearDirective } from './directives/appear.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppearDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
