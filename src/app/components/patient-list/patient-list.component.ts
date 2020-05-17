import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/model/patient';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatientDetailComponent } from './../patient-detail/patient-detail.component'

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  patients: Patient[];

  listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['id', 'first_name', 'last_name', 'gender','email','action'];

  constructor(private patientService: PatientService, private dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    this.patientService.findAll().subscribe(patients => {
      this.listData = new MatTableDataSource(patients);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  openDetails(patient){
    this.patientService.form.setValue(patient);
    this.patientService.form.disable();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(PatientDetailComponent, dialogConfig);
  }
}
