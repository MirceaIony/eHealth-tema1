import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../model/patient';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  url = 'https://alexgr.ro/ehealth/patients.json';

  form = new FormGroup({
    id: new FormControl(null),
    first_name: new FormControl(null),
    last_name: new FormControl(null),
    gender: new FormControl(null),
    email: new FormControl(null),
    diagnosis_code: new FormControl(null),
    diagnosis_description: new FormControl(null),
    diagnosis_description_detailed: new FormControl(null),
    administered_drug_treatment: new FormControl(null),
  })

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Patient[]> {
    return this.httpClient.get(this.url).pipe(map(
      (dataArray: any[]) => dataArray.map(data => 
        new Patient(data.id, data.first_name, data.last_name, data.email,data.gender,
                    data.diagnosis_code,data.diagnosis_description,data.diagnosis_description_detailed,data.administered_drug_treatment)
      )
    ));
  }

}
