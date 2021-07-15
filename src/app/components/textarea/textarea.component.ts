import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { ThousandSeparatorPipe } from "../pipes/thousandSeparator";

@Component({
  selector: "app-textarea",
  templateUrl: './textarea.html',
  styleUrls: ['./textarea.css']
})
export class TextAreaComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {
  }

  ngOnInit() {
  }
}