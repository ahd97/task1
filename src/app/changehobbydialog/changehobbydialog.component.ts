import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponentComponent } from '../form-component/form-component.component';


@Component({
  selector: 'app-changehobbydialog',
  templateUrl: './changehobbydialog.component.html',
  styleUrls: ['./changehobbydialog.component.css']
})
export class ChangehobbydialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<FormComponentComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
