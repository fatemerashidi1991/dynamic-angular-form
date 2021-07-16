import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud.service';
import { Employee } from '../model';
import { FIXED_VALUES } from './constants';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService extends CrudService<Employee, number> {

    constructor(protected _http: HttpClient) {
        super(_http, `${FIXED_VALUES.mainServerUrl}`);
    }

}