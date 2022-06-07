import { Component, OnInit } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'katavo';
  user$!: Observable<any>;
  emailSource = new BehaviorSubject(null);
  email$ = this.emailSource.asObservable();

 constructor(private authService: AuthService){

 }
  ngOnInit(): void {
    
    this.user$= this.authService.email$ 
   
  }

}
