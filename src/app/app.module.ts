import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectedConsentsComponent } from './components/collected-consents/collected-consents.component';
import { NewConsentComponent } from './components/new-consent/new-consent.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BackendInterceptor } from './interceptors/backend.interceptor';
import { FormatPipe } from './pipes/format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewConsentComponent,
    CollectedConsentsComponent,
    PaginatorComponent,
    SidenavComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    FormBuilder,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
