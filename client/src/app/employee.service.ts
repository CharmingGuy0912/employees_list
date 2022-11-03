import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Employee } from './employee';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	private url = 'http://localhost:5200/api';
	private employees$: Subject<Employee[]> = new Subject();

	constructor(private httpClient: HttpClient) {}

	private refreshEmployees() {
		this.httpClient
			.get<Employee[]>(`${this.url}/employees`)
			.subscribe((employees) => {
				this.employees$.next(employees);
			});
	}

	getEmployees(): Subject<Employee[]> {
		this.refreshEmployees();
		return this.employees$;
	}

	getEmployee(id: number): Observable<Employee> {
		return this.httpClient.get<Employee>(`${this.url}/employees/${id}`);
	}

	createEmployee(employee: Employee): Observable<string> {
		return this.httpClient.post(`${this.url}/employees`, employee, {
			responseType: 'text',
		});
	}

	updateEmployee(id: number, employee: Employee): Observable<string> {
		return this.httpClient.put(`${this.url}/employees/${id}`, employee, {
			responseType: 'text',
		});
	}

	deleteEmployee(id: number): Observable<string> {
		return this.httpClient.delete(`${this.url}/employees/${id}`, {
			responseType: 'text',
		});
	}
}
