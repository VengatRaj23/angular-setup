import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
