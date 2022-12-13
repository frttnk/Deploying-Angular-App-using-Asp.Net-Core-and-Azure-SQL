import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL=environment.API_URL;
  
  constructor(private _httpClient:HttpClient) { }

  getAllUsers():Observable<any>{
    return this._httpClient.get<any>(this.API_URL+'/api/user/GetAllUsers');
  }
}
