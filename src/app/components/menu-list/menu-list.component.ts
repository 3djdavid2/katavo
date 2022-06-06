import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { DialogSesionComponent } from '../dialog-sesion/dialog-sesion.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {

  @Output() menuClicked = new EventEmitter();
  @Output() menuToggle = new EventEmitter<void>();
  @Input() pEmail!: string;

  constructor( 
    private dialog: MatDialog,
    public authService: AuthService
    ) {

     }


  closeMenu() {
    this.menuToggle.emit();
  }
  onClicked(): void {
    this.menuClicked.emit();
  }
  listClose(){
    this.closeMenu();
    this.authService.logout();
  }

  openDialog() {
    this.closeMenu();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogSesionComponent, dialogConfig);

  }

}
