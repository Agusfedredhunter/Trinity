// -----------------------------------------------------------------------------
// EJERCICIO 12 - Suma de edades
// -----------------------------------------------------------------------------
// Calcular la suma de las edades de todos los alumnos.
// Resolver utilizando reduce.

import { alumnos, type Alumno } from "../model/db.js";

export function sumarEdades(alumnos: Alumno[]): number {
    return alumnos.reduce((suma, alumno) => suma + alumno.edad, 0);
}