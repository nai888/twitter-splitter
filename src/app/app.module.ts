import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EntryComponent } from './entry/entry.component';
import { OptionsComponent } from './options/options.component';
import { ControlsComponent } from './controls/controls.component';
import { PreviewComponent } from './preview/preview.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EntryComponent,
    OptionsComponent,
    ControlsComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
