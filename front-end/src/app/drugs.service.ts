import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrugDetails } from './drug-details';


@Injectable({
  providedIn: 'root'
})
export class DrugsService {

  constructor(private http:HttpClient) { }

 baseUrl:string='http://localhost:8081/drugdetailapp'
//baseUrl:string='http://ec2-52-66-148-241.ap-south-1.compute.amazonaws.com:8081/drugdetailapp'

  getAllDrugs():Observable<DrugDetails[]>
  {
      return this.http.get<DrugDetails[]>(`${this.baseUrl}/getAllDrugs`);
  }


  getDrugById(id:string)
  {
    let token=localStorage.getItem("token")
    const header = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    };
    return this.http.get<DrugDetails>(`${this.baseUrl}/searchDrugsById/${id}`,header);
  }

  getDrugByName(name:string)
  {
    let token=localStorage.getItem("token")
    const header = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    };
    return this.http.get<DrugDetails>(`${this.baseUrl}/searchDrugsByName/${name}`,header);
  }
 

}
