import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBtnComponent, DialogContentExampleDialog } from './add-btn/add-btn.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListEntryComponent } from './list-entry/list-entry.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { EntryLocationComponent } from './entry-location/entry-location.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { SignInScreenComponent } from './sign-in-screen/sign-in-screen.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBtnComponent,
    DialogContentExampleDialog,
    ListEntryComponent,
    EntryLocationComponent,
    RegisterScreenComponent,
    SignInScreenComponent,
    ForgotPwdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MglTimelineModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent, AddBtnComponent,],
  entryComponents:[AddBtnComponent, DialogContentExampleDialog]
})
export class AppModule {}
export class IconOverviewExample {}
export class ButtonOverviewExample {}
