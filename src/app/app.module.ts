import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import {SocialLoginModule,SocialAuthServiceConfig} from 'angularx-social-login'
import {GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login'


import {MatStepperModule} from '@angular/material/stepper'
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatChipsModule} from '@angular/material/chips'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list'
import {MatRadioModule} from '@angular/material/radio'
import {MatSliderModule} from '@angular/material/slider'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDialogModule} from '@angular/material/dialog'
import {MatCard, MatCardModule} from '@angular/material/card'

import {UserDataServiceService} from './Provider/user-data-service.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FormComponentComponent } from './form-component/form-component.component';
import { DetailComponent } from './detail/detail.component';
import { ChangehobbydialogComponent } from './changehobbydialog/changehobbydialog.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    DetailComponent,
    ChangehobbydialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSliderModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    SocialLoginModule
  ],
  providers: [UserDataServiceService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '482948980903-pm827hrv2qrdebiteulams2fm3ou4idv.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('665460847653638'),
          },
        ],
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
