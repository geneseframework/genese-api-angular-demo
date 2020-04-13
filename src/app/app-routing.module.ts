import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { GetComponent } from './features/get/get.component';
import { GetAllComponent } from './features/get-all/get-all.component';
import { PostComponent } from './features/post/post.component';
import { DeleteComponent } from './features/delete/delete.component';
import { PutComponent } from './features/put/put.component';
import { WelcomeComponent } from './features/welcome/welcome.component';


const routes: Routes = [
    { path: '',
        component: HomeComponent,
        canActivate: [AuthGuardService],
        children: [
            {path: '', component: WelcomeComponent, canActivate: [AuthGuardService]},
            {path: 'delete', component: DeleteComponent, canActivate: [AuthGuardService]},
            {path: 'get-all', component: GetAllComponent, canActivate: [AuthGuardService]},
            {path: 'get', component: GetComponent, canActivate: [AuthGuardService]},
            {path: 'post', component: PostComponent, canActivate: [AuthGuardService]},
            {path: 'put', component: PutComponent, canActivate: [AuthGuardService]},
        ]
    },
    { path: 'features', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: '**', component: HomeComponent, data: { error: 'Not found' }}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
