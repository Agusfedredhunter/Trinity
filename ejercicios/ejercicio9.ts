// -----------------------------------------------------------------------------
// EJERCICIO 9 - ¿Existe algún alumno desaprobado?
// -----------------------------------------------------------------------------
// Devolver true si existe al menos un alumno con nota menor a 6.
// Resolver utilizando some.

import { alumnos, type Alumno } from "../model/db.js";

export function existeDesaprobado(alumnos: Alumno[]): boolean {
    return alumnos.some((alumno) => alumno.nota < 6);
}