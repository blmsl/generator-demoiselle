import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared';

import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { UserEditComponent } from './user-edit.component';
import { UserViewComponent } from './user-view.component';
import { UserResolver } from './user.resolver';

@NgModule({
    imports: [
        SharedModule,
        UserRoutingModule
    ],
    declarations: [
        UserComponent,
        UserEditComponent,
        UserViewComponent
    ],
    providers: [
        UserService,
        UserResolver
    ],
    exports: []
})
export class UserModule { }
