import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgbModule,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from "./services/auth.service";
import {HttpModule} from "@angular/http";
import {AccountService} from "./services/account.service";
import { ProfileComponent } from './components/profile/profile.component';
import {routing} from "./app.routing";
import {FacebookModule} from "ngx-facebook";
import {UrlPermission} from "./urlPermission/url.permission";
import { ProfileService } from './services/profile.service.service';
import { NewTaskService } from './services/new-task.service';
import { CreateTaskComponent } from './components/create-task/create-task.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CreateTaskComponent,


  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,routing, FacebookModule.forRoot(),NgbModule.forRoot(),
  ],
  providers: [AuthService,AccountService,UrlPermission, ProfileService, NewTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
