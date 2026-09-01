// -----------------------------------------------------------------------------
// EJERCICIO 1 - Obtener nombres
// -----------------------------------------------------------------------------
// Implementar una función que reciba un arreglo de alumnos y devuelva un arreglo
// que contenga únicamente los nombres de los alumnos.
//
// Ejemplo:
// obtenerNombres(alumnos)
// -> ["Juan", "María", "Pedro", ...]
//export function obtenerNombres(alumnos: Alumno[]): string[] {
//    // TODO
//    throw new Error("Implementar");
//}

import { alumnos, type Alumno } from "../model/db.js";

function obtenerNombres(lista: Alumno[]): string[]{
    let nombre: string[] = [];
    return lista.map(alumno => alumno.nombre);
}