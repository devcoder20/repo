import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FormComponent } from './formA/form/form.component';
import { SearchComponent } from './search/search.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  { path: 'info', component: FormComponent },
  { path: 'find', component: SearchComponent },
  { path: 'final', component: FinalizeComponent },
  { path: '**', redirectTo: 'info' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    FinalizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(routes),
    HeaderComponent,
    FormComponent,
    SearchComponent,
    FinalizeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
