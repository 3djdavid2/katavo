import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DialogSesionComponent } from '../dialog-sesion/dialog-sesion.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Output() menuClicked = new EventEmitter();
  
  @Input() user!: any;
  @Input() isLogged!: any;
  
  pEmail: any;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    public authService: AuthService) {

  }

  ngOnInit(): void {

    this.authService.isloggedIn();
   

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

  onClicked(): void {
    this.menuClicked.emit();

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(DialogSesionComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(() => {
        this.router.onSameUrlNavigation
      })
  }


  logout(){
    this.authService.logout()
   let res= this.authService.isloggedIn()
   if(res== null){  
    console.log("No esta logeado")
    this.user=false
   }
   console.log("en logout islogginIn() es: ", res)
  }
}
