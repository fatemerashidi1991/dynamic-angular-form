import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
  selector: "app-input",
  templateUrl: './input.html',
  styleUrls: ['./input.css']
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {
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