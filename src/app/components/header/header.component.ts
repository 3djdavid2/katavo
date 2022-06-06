import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class HeaderComponent implements OnChanges {

  @Output() menuClicked = new EventEmitter();
  @Input() pEmail: any;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    public authService: AuthService) {

  }

  
ngOnChanges(changes: SimpleChanges): void {
  console.log("cambios")
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
        this.router.navigate(['/home'])
      })

  }
}
