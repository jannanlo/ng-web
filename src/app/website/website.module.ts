import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';


import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';

import { HeaderComponent, SidebarComponent, NavbarComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        WebsiteRoutingModule,
        TranslateModule
    ],
    declarations: [
        WebsiteComponent,
        HeaderComponent,
        SidebarComponent,
        NavbarComponent,
    ]
})

export class WebsiteModule { }
