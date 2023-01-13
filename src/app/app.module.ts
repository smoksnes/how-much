import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ContentComponent } from './components/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { FlowWrapperComponent } from './components/flow/flow-wrapper/flow-wrapper.component';
import { FlowItemComponent } from './components/flow/flow-item/flow-item.component';
@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FlowWrapperComponent,
        FlowItemComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        MaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule
    ]
})
export class AppModule { }
