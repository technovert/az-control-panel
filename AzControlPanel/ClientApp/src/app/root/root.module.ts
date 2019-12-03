import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootRoutingModule } from './root.routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
    declarations: [
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent
    ],
    imports: [
        CommonModule,
        RootRoutingModule
    ]
})
export class RootModule { }
