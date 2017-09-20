import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.route';

import { AppComponent } from './app.component';
import { GroupbyPipe } from './filters/groupby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GroupbyPipe
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
