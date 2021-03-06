import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { StorageComponent } from './storage/storage.component';
import { InteractionsComponent } from './interactions/interactions.component';
import { HomeComponent } from './home/home.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StorageComponent,
    InteractionsComponent,
    HomeComponent,
  ],
  imports: [
    AmplifyAngularModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
