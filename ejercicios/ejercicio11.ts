// -----------------------------------------------------------------------------
// EJERCICIO 11 - Cantidad de alumnos aprobados
// -----------------------------------------------------------------------------
// Devolver la cantidad de alumnos aprobados.
// Resolver utilizando filter y length.

import { alumnos, type Alumno } from "../model/db.js";

export function cantidadAprobados(alumnos: Alumno[]): number {
    const aprobados = alumnos.filter((alumno) => alumno.nota >= 6);
    return aprobados.length;
}