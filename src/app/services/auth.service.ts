import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from '../../environments/environment'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.baseUrl

  private loggedIn = new BehaviorSubject<boolean>(false);

  emailSource = new BehaviorSubject(null);
  email$ = this.emailSource.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }


  signUp(user: any) {
    // console.log(user) //= {email: 'sddd@d.cl', password: '123456', passwordConfirm: '123456'}
    return this.http.post<any>(this.URL + '/api/auth/registro', user)
  }

  signIn(user: any): Observable<any> {

    this.emailSource.next(user)
    this.loggedIn.next(true);
    
    let headers = new HttpHeaders({
      'clicksignin': 'true'
    });
    let options = { headers: headers };
    
    return this.http.post<any>(this.URL + '/api/auth/ingreso', user, options)
    
  }
  
  
  
  //Comprobar si existe un token
  isloggedIn() {
    return window.localStorage.getItem('token')
  }
  
  getToken() {
    return window.localStorage.getItem('token')
  }
  
  logout() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/home'])
  }
}
