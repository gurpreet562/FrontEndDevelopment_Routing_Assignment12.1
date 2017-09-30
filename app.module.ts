import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { RootComponent } from './app.component';
import { DropDownService } from './drop-down.service';


// this module is provided by the cli
@NgModule({
  declarations: [
    RootComponent,
 
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DropDownService],
  bootstrap: [RootComponent]
})
export class AppModule { }

