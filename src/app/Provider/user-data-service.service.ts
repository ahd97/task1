import { Injectable } from '@angular/core';
import {UserData} from '../Model/user-data.model'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {
  usrData:UserData;
  constructor() { }
}
