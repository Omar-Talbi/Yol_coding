import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { ButtonComponent } from './components/button/button.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { DetailedCardComponent } from './components/detailed-card/detailed-card.component';


const appRoutes: Routes = [
  { path: '', component: CardsListComponent },
  { path: 'detailed', component: DetailedCardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    ButtonComponent,
    CardItemComponent,
    DetailedCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
