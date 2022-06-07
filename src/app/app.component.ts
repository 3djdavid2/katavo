import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'katavo';
  user$!: Observable<any>;
  isAuthorized$!: Observable<boolean>;

 constructor(private authService: AuthService){

 }
  ngOnInit(): void {
    
    this.user$= this.authService.email$ as Observable<any>
    this.isAuthorized$= this.authService.isAuthorized$ as Observable<any>
   
  }

}
