import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
    selector: "app-radiobutton",
    templateUrl: './radiobutton.html',
    styleUrls: ['./radiobutton.css']
})
export class RadiobuttonComponent implements OnInit {
    field: FieldConfig;
    group: FormGroup;
    constructor() { }
    ngOnInit() { }
}