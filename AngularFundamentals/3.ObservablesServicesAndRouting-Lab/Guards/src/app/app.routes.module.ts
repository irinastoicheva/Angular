import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './home/about.component';
import {AuthenticatedRoute} from './shared/authenticated-route.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about/:id/:name',
    component: AboutComponent,
    canActivate: [AuthenticatedRoute]
  },
  { path: 'about', component: AboutComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticatedRoute]
})
export class AppRoutesModule {}
