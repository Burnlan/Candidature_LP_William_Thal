import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BiscuitsComponent } from './components/biscuits/biscuits.component';
import { AddBiscuitFormComponent } from './components/add-biscuit-form/add-biscuit-form.component';
import { BiscuitlistComponent } from './components/biscuitlist/biscuitlist.component';

@NgModule({
  declarations: [
    AppComponent,
    BiscuitsComponent,
    AddBiscuitFormComponent,
    BiscuitlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
