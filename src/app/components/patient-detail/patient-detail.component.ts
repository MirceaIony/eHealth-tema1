import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  constructor(
    public patientService: PatientService,
    public dialogRef: MatDialogRef<PatientDetailComponent>) {
  }

  ngOnInit(): void {
  
  }

  onClose(){
    this.dialogRef.close();
  }
}
