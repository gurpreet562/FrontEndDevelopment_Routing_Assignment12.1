import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { RootComponent } from './app.component';
import { DropDownService } from './drop-down.service';
import {AppRoutingModule} from './app-routing.module'
import {routingComponents} from './app-routing.module'



// this module is provided by the cli
@NgModule({
  declarations: [
    RootComponent,routingComponents
 
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DropDownService],
  bootstrap: [RootComponent]
})
export class AppModule { }

