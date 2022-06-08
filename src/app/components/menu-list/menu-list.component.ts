import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DialogSesionComponent } from '../dialog-sesion/dialog-sesion.component';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit{

  @Output() menuClicked = new EventEmitter();
  @Output() menuToggle = new EventEmitter<void>();

  @Input() user!: any;
  @Input() isLogged!: any;

  pEmail!: string;

  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
    private router:Router
  ) {

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



  closeMenu() {
    this.menuToggle.emit();
  }
  onClicked(): void {
    this.menuClicked.emit();
  }
  listClose() {
    this.closeMenu();
    this.authService.logout();
    this.user=false;
  }

  openDialog() {
    this.closeMenu();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(DialogSesionComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(() => {
        this.router.onSameUrlNavigation
      })

  }



}
