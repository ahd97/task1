import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, FormControl, ValidatorFn, AbstractControl} from '@angular/forms';
import {UserData} from '../Model/user-data.model'
import {UserDataServiceService} from '../Provider/user-data-service.service'
import {Router, NavigationExtras} from "@angular/router";
import { from } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ChangehobbydialogComponent } from '../changehobbydialog/changehobbydialog.component';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  items = [
    {key: 'edu1', text: 'SSC'},
    {key: 'edu2', text: 'HSC'},
    {key: 'edu3', text: 'Graduation'},
    {key: 'edu4', text: 'Post Graduation'},
    {key: 'edu5', text: 'Diploma'}
  ];
  first_name:string="";
  last_name:string="";
  email_id:string="";
  contact_detail:number;
  addr:string="";
  gend:string="";
  education:string[]=[];
  hobby:string[]=[];
  skill_html:number;
  skill_css:number;
  skill_js:number;
  skill_ts:number;
  skill_angular:number;
  hobby_list:string[]=[];
  user_data:UserData;
  newItem:boolean=false;
  newEdu:boolean=false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  hobby_item:FormControl=new FormControl();
  edu_other:FormControl=new FormControl();

  constructor(private _formBuilder: FormBuilder, private usr:UserDataServiceService, private router:Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstName : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20), Validators.pattern('^[a-zA-Z]+$')])
    });

    this.secondFormGroup = this._formBuilder.group({
      email: new FormControl(null,[Validators.required,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
      contact: new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{10}$')]),
      address: new FormControl(null,Validators.required)
    });

    this.thirdFormGroup = this._formBuilder.group({
      gender: new FormControl(null, Validators.required),
      edu: new FormArray([], this.minSelectedCheckboxes(1)),
      html: new FormControl(null,Validators.min(4)),
      css: new FormControl(null,Validators.min(4)),
      js: new FormControl(null,Validators.min(4)),
      ts: new FormControl(null,Validators.min(4)),
      angular: new FormControl(null,Validators.min(4)),
    });
    this.addCheckboxes();
  }

  get ordersFormArray() {
    return this.thirdFormGroup.controls.edu as FormArray;
  }

  private addCheckboxes() {
    this.items.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  minSelectedCheckboxes (min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);
  
      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };
  
    return validator;
  }

  submit(){
    console.log(this.hobby_item.value);
    this.newItem=false;
    this.hobby_list.push(this.hobby_item.value);
    this.hobby_item.setValue("");
  }
  
  editItem(i:number,h:string){
    const dialogRef = this.dialog.open(ChangehobbydialogComponent, {
      width: '250px',
      data: {index:i, hobbies: h}
    });

    dialogRef.afterClosed().subscribe(result => {
      h=result;
      this.hobby_list.splice(i,1,h);
      console.log(this.hobby_list);
    });
  }

  deleteItem(index){
    var c = confirm("Do you want to delete this hobby?")
    if(c===true){
      this.hobby_list.splice(index,1);
    }
  }

  formatLabel(value: number) {
    return value;
  }

  eduDetail(){
    const selctedEducation = this.thirdFormGroup.value.edu
    .map((checked, i) => checked ? this.items[i].text : null)
    .filter(v => v !== null);
    return selctedEducation;
  }

  redirect(){
    this.education=this.eduDetail();
    this.usr.usrData=new UserData(this.first_name,this.last_name,this.email_id,this.contact_detail,this.addr,this.gend,this.education,this.hobby_list,this.skill_html,this.skill_css,this.skill_js,this.skill_ts,this.skill_angular);
    console.log(this.usr.usrData);
    this.router.navigate(['details']);
  }

  addEdu(){
    this.newEdu=false;
    this.items.push({key:"edu"+(this.items.length+1),text:this.edu_other.value});
    this.ordersFormArray.push(new FormControl(true));
  }

}