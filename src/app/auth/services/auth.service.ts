import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthRequest } from '../request/index.request';
import { AuthResponse } from '../response/index.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
    constructor(private readonly http: HttpClient){}

    private url = 'auth';

    postAuthService(dto: AuthRequest): Observable<AuthResponse>{
        return this.http.post<AuthResponse>(`${this.url}/login`, dto);
    }
}