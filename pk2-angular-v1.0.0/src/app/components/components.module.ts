import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

import { BasicelementsComponent } from './basicelements/basicelements.component';

import { ComponentsComponent } from './components.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JWBootstrapSwitchModule
       
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent
    ],
    entryComponents: [],
    exports: [ComponentsComponent]
})
export class ComponentsModule { }
