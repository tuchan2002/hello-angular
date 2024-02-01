import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NameChildComponent } from './name-child/name-child.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VoteTakerComponent } from './votetaker/votetaker.component';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NameChildComponent,
    VersionChildComponent,
    VoteTakerComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
