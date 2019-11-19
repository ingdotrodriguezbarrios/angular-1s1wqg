import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { UserService } from './services/user.service';
import { UserlistComponent } from './user/userlist/userlist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ UserlistComponent ],
  bootstrap:    [ UserlistComponent ],
  providers: [UserService],
  RouterModule.forRoot([
      { path: '', component: UserlistComponent }
    ])
})
export class AppModule { }
