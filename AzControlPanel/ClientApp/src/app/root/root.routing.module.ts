import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

const rootRoutes: Routes = [
    { path: 'root', redirectTo: 'root/home', pathMatch: 'full' },
    { path: 'root/home', component: HomeComponent },
    { path: 'root/counter', component: CounterComponent },
    { path: 'root/fetch-data', component: FetchDataComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(rootRoutes)],
    exports: [RouterModule],
    providers: []
})
export class RootRoutingModule { }
