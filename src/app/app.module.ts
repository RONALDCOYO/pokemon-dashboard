import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', component: PokemonGridComponent }
  // Agrega más rutas aquí si es necesario
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonGridComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideHttpClient(withFetch()) // Habilitar el uso de fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
