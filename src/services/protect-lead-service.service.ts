import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl ="http://localhost:8081"
@Injectable({
  providedIn: 'root'
})
export class ProtectLeadServiceService {

  constructor(private http: HttpClient) { }
  submitData(data:any)
  {
    console.log(data);
    return this.http.post(baseUrl+'/api/add',data)
  }
  getAllLeads()
  {
    return this.http.get(baseUrl+'/api/getall');
  }
  getAllTodos()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
