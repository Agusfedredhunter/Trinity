// -----------------------------------------------------------------------------
// EJERCICIO 10 - ¿Todos aprobaron?
// -----------------------------------------------------------------------------
// Devolver true solamente si todos los alumnos tienen nota mayor o igual a 6.
// Resolver utilizando every.

import { alumnos, type Alumno } from "../model/db.js";

export function todosAprobaron(alumnos: Alumno[]): boolean {
    return alumnos.every((alumno) => alumno.nota >= 6);
}