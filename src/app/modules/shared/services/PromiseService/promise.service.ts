import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {
  data!: string;
  constructor(private http: HttpClient) { }
  GetDetails(id: number): Promise<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .toPromise().then((response: any) => {
        this.data = response['title'];
      }).catch((error: any) => {
        console.log(error);
      });
  }
}
