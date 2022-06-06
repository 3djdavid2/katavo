import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'katavo';
  pEmail!:string;

 constructor(private authService: AuthService){

 }
  ngOnInit(): void {
    this.authService.email$
    .subscribe({
      next: (res: any) => {
        this.pEmail = res.email
      },
      error: (e: any) => {
        console.log("el error es:", e)
      },
      complete: () => {
        console.info('completed')
      }
    })
  }

}
