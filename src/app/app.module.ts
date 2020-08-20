import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';

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

import {UserDataServiceService} from './Provider/user-data-service.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FormComponentComponent } from './form-component/form-component.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    DetailComponent
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
    MatFormFieldModule
  ],
  providers: [UserDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
