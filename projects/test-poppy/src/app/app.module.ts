import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PoppyModule } from "../../../poppy/src/public-api";
import { TestDirective } from './test.directive';

@NgModule({
	declarations: [
		AppComponent,
		TestDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PoppyModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
