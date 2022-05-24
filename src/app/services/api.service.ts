import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postProduct(data: any) {
    return this.http.post<any>("https://6288d3f87af826e39e65a2de.mockapi.io/Productdetails/", data);

  }
  getProduct() {
    return this.http.get<any>("https://6288d3f87af826e39e65a2de.mockapi.io/Productdetails/");
  }
  putProduct(data: any, id: number) {
    return this.http.put<any>("https://6288d3f87af826e39e65a2de.mockapi.io/Productdetails/" + id, data);
  }
  deleteProduct(id: number) {
    return this.http.delete<any>("https://6288d3f87af826e39e65a2de.mockapi.io/Productdetails/" + id);
  }
}
