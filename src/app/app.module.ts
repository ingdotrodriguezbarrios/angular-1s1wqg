import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { UserService } from "./services/user.service";
import { UserlistComponent } from "./user/userlist/userlist.component";

@NgModule({
   imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [UserlistComponent],
  bootstrap: [UserlistComponent],
  providers: [UserService]
})
export class AppModule {}
