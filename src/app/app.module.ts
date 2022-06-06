import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from '../app/pages/contacto/contacto.component';
import { AutoFocusInputDirective } from 'src/app/directivas/auto-focus-input.directive';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { MenuListComponent } from './components/menu-list/menu-list.component'

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DialogSesionComponent } from './components/dialog-sesion/dialog-sesion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignupComponent } from './components/signup/signup.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AutoFocusInputDirective,
    AppComponent,
    HeaderComponent,
    MenuListComponent,
    ContactoComponent,
    DialogSesionComponent,
    SignupComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogSesionComponent]
})
export class AppModule { }
