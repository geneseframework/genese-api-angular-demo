import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { GetComponent } from './get/get.component';
import { GetAllComponent } from './get-all/get-all.component';
import { BooksListComponent } from './books-list/books-list.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';
import { PutComponent } from './put/put.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { GeneseRequestService } from '../../../genese/genese-api/services/genese-request.service';
import { ModalComponent } from '../core/components/modal/modal.component';


@NgModule({
    declarations: [
        PostComponent,
        DeleteComponent,
        BooksListComponent,
        WelcomeComponent,
        GetAllComponent,
        GetComponent,
        HomeComponent,
        PutComponent,
    ],
    imports: [
        CoreModule,
        FormsModule,

        AppRoutingModule
    ],
    entryComponents: [
        HomeComponent,
        ModalComponent
    ],
    providers: [
        GeneseRequestService
    ],
    exports: [],
})
export class HomeModule { }
