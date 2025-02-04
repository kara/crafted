import {PortalModule} from '@angular/cdk/portal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatButtonToggleModule, MatDialogModule} from '@angular/material';
import {FormFieldModule} from '../../form/form-field/form-field.module';
import {WidgetEdit} from './widget-edit';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    PortalModule,
    ReactiveFormsModule,
    FormFieldModule,
    MatButtonToggleModule,
  ],
  declarations: [WidgetEdit],
  exports: [WidgetEdit],
  entryComponents: [WidgetEdit]
})
export class WidgetEditModule {
}
