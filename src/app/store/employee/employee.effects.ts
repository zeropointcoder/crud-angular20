import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EmployeeService } from '../../services/employee'
import { map, Observable, switchMap, tap } from 'rxjs'
import { Employee } from '../../models/employee.model'
import { Action } from '@ngrx/store'
import { onAdd, onAddSuccess, onDelete, onDeleteSuccess, onLoad, onLoadSuccess, onUpdate, onUpdateSuccess } from './employee.actions'

@Injectable()
export class EmployeeEffects {
    actions$: Actions = inject(Actions)
    es: EmployeeService = inject(EmployeeService)

    constructor() {}

    onLoad$ = createEffect((): Observable<Action> => 
        this.actions$.pipe(
            ofType(onLoad),
            tap(action => console.log(action)),
            switchMap((action) => 
                this.es.onLoad().pipe(
                    map((res: Employee[]) => onLoadSuccess({employees: res}))
                )
            )
        )
    )

    onAdd$ = createEffect((): Observable<Action> => 
        this.actions$.pipe(
            ofType(onAdd),
            tap((action) => console.log(action)),
            switchMap(({empObj}) => 
                this.es.onAdd(empObj).pipe(
                    map((res: Employee) => onAddSuccess({employeeNew: res}))
                )
            )
        )
    )

    onUpdate$ = createEffect((): Observable<Action> => 
        this.actions$.pipe(
            ofType(onUpdate),
            tap(action => console.log(action)),
            switchMap(({empObj, empid}) => 
                this.es.onUpdate(empObj, empid).pipe(
                    map((res: Employee) => onUpdateSuccess({employeeEdit: res}))
                )
            )
        )
    )

    onDelete$ = createEffect((): Observable<Action> => 
        this.actions$.pipe(
            ofType(onDelete),
            tap(action => console.log(action)),
            switchMap(({empid}) => 
                this.es.onDelete(empid).pipe(
                    map((res: Employee) => onDeleteSuccess({employee: res}))
                )
            )
        )
    )
}