import { createAction, props } from '@ngrx/store'
import { Employee } from '../../models/employee.model'

export const onLoad = createAction(
    '[Employee] on load',
)

export const onLoadSuccess = createAction(
    '[Employee] on load success',
    props<{employees: Employee[]}>()
)

export const onAdd = createAction(
    '[Employee] on add',
    props<{empObj: any}>()
)

export const onAddSuccess = createAction(
    '[Employee] on add success',
    props<{employeeNew: Employee}>()
)

export const onUpdate = createAction(
    '[Employee] on update',
    props<{empObj: any, empid: String}>()
)

export const onUpdateSuccess = createAction(
    '[Employee] on update success',
    props<{employeeEdit: Employee}>()
)

export const onDelete = createAction(
    '[Employee] on delete',
    props<{empid: String}>()
)

export const onDeleteSuccess = createAction(
    '[Employee] on delete success',
    props<{employee: Employee}>()
)