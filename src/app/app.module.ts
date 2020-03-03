import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './formA/form/form.component';
import { SearchComponent } from './search/search.component';
import { FinalizeComponent } from './finalize/finalize.component';
import { ContetfulCommonComponent } from './contetfulComp/contetful-common/contetful-common.component';

import { ContentfulService } from './services/contentful/contentful.service';

const routes: Routes = [
  { path: 'info', component: FormComponent },
  { path: 'find', component: SearchComponent },
  { path: 'final', component: FinalizeComponent },
  { path: 'contentful', component: ContetfulCommonComponent },
  { path: '**', redirectTo: 'info' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    FinalizeComponent,
    ContetfulCommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {}
