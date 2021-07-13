import { Component, ViewChild } from '@angular/core';
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { PermissionLevelEnum } from './components/constants/permissionLevelEnum';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form';
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      disable: false,
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
      value: "Male"
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"]
    },
    {
      type: "input",
      label: "Phone Number",
      inputType: "tel",
      name: "Phone Number",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Phone Number Required"
        },
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
      type: "input",
      label: "Assets($)",
      inputType: "text",
      name: "price",
      hasThousandSeparator: true
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true
    },
    {
      type: "input",
      label: "color",
      inputType: "color",
      name: "color",
    },
    {
      type: "textarea",
      label: "description",
      inputType: "textarea",
      name: "textarea",
    },
    {
      name: "saveBtn",
      type: "button",
      label: "Save"
    },
  ];
  submit(value: any) { }
}
