import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
