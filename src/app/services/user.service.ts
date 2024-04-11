import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient) { }

  //method to get all users
  public getUserPagination(page:number):Observable<any>{
    return this._HttpClient.get(`https://reqres.in/api/users?page=${page}`)
  };

    //method to get user details
    public getUserDetails(id:number):Observable<any>{
      return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
    };

  

}
