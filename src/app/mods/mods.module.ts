import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModuleComponent } from './module/module.component';

import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ModuleComponent, ModalComponent],
  imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
