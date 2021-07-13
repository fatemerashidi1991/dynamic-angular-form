import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { ThousandSeparatorPipe } from "../pipes/thousandSeparator";

@Component({
  selector: "app-input",
  template: `
  <mat-form-field class="demo-full-width" [formGroup]="group" >
  <input matInput [formControlName]="field!.name" [placeholder]="field.label!" [type]="field.inputType!"  mask="field.mask!" 
  (focusout)="processMyValue()" [(ngModel)]="field.value" [readonly]="field.disable">
  <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
  <mat-error *ngIf="group.get(field.name)!.hasError(validation.name)">{{validation.message}}</mat-error>
  </ng-container>
  </mat-form-field>
  `,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor(private thousandSeparator: ThousandSeparatorPipe) {
  }
  processMyValue(): void {
    let numberVal = parseInt(this.field.value).toLocaleString();
    if (!isNaN(this.field.value) && this.field.hasThousandSeparator) {
      this.field.value = numberVal;
    }
  }
  ngOnInit() {
  }
}