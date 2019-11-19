import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash,faEdit,faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserService } from "./services/user.service";
import { UserlistComponent } from "./user/userlist/userlist.component";

@NgModule({
   imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [UserlistComponent],
  bootstrap: [UserlistComponent],
  providers: [UserService]
})
export class AppModule {
   constructor(private library: FaIconLibrary) {
    library.addIcons(faTrash, faEdit, faSearch);
  }
}
