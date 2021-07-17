import { Component, ViewChild } from '@angular/core';
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { ActionTypeEnum } from './components/constants/actionTypeEnum';
import { EmployeeService } from './crudServices/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form';
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  constructor(private empService: EmployeeService) { }
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      disable: false,
      rowNumber: 1,
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      rowNumber: 1,
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      rowNumber: 3,
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male",
      rowNumber: 4,
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      rowNumber: 5,
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      rowNumber: 6,
      options: ["India", "UAE", "UK", "US"]
    },
    {
      type: "input",
      label: "Phone Number",
      inputType: "tel",
      name: "Phone Number",
      rowNumber: 7,
      validations: [
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
            //Valid formats:
            // (123) 456-7890
            // (123)456-7890
            // 123-456-7890
            // 123.456.7890
            // 1234567890
            // +31636363634
            // 075-63546725
          ),
          message: "Invalid phone number"
        }
      ]
    },
    {
      type: "textarea",
      label: "description",
      inputType: "textarea",
      name: "textarea",
      rowNumber: 11,
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true,
      rowNumber: 9,
    },
    {
      name: "saveBtn",
      type: "button",
      label: "Save",
      rowNumber: 12,
    },
  ];
  submit(value: any): void {
    this.empService.save(value).subscribe();
  }
  read(value: any): void {
    this.empService.findOne(value.id).subscribe();
  }
}
