import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
    selector: "app-checkbox",
    templateUrl: './checkbox.html',
    styleUrls: ['./checkbox.css']
})
export class CheckboxComponent implements OnInit {
    field: FieldConfig;
    group: FormGroup;
    constructor() { }
    ngOnInit() { }
}