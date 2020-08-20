import { Component, OnInit } from '@angular/core';
import {UserData} from '../Model/user-data.model'
import {UserDataServiceService} from '../Provider/user-data-service.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  first_name:string;
  last_name:string;
  email:string;
  contact:number;
  address:string;
  gender:string;
  education:string[]=[];
  hobbies:string[]=[];
  skill_html:number;
  skill_css:number;
  skill_js:number;
  skill_ts:number;
  skill_angular:number;
  constructor(private usr:UserDataServiceService) { }

  ngOnInit(): void {
    this.first_name=this.usr.usrData.firstname;
    this.last_name=this.usr.usrData.lastname;
    this.email=this.usr.usrData.email;
    this.contact=this.usr.usrData.contact;
    this.address=this.usr.usrData.address;
    this.gender=this.usr.usrData.gender;
    this.education=this.usr.usrData.education;
    this.hobbies=this.usr.usrData.hobby;
    this.skill_html=this.usr.usrData.skill_html;
    this.skill_css=this.usr.usrData.skill_css;
    this.skill_js=this.usr.usrData.skill_javaScript;
    this.skill_ts=this.usr.usrData.skill_typeScript;
    this.skill_angular=this.usr.usrData.skill_angular;
  }

}
