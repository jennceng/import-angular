import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LogService } from 'app/log.service';
import { HeaderComponent } from './header/header.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileBrowserDirective } from './file-browser.directive';
import { FileUploadHelperService } from 'app/file-upload-helper.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileUploaderComponent,
    FileBrowserDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [FileUploadHelperService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
