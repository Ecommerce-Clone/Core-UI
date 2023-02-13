import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { BodyModule } from './body/body.module';
import { HttpClientModule } from '@angular/common/http';
import { UserRegModule } from './user-reg/user-reg.module';
import { ParentModule } from './parent/parent.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,

    HeaderModule,
    FooterModule,
    BodyModule,
    UserRegModule,
    ParentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
