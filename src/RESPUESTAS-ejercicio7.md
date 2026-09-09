# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

Interface permite tener muchas lineas de codigo escritas de la misma manera, cada linea agregando bloques diferentes en cada una. Pero no actuan como muchas, actuan como una sola linea de codigo donde se fusionan y combinan todos los bloques en uno solo. 

## ¿Qué permite hacer `type` que `interface` no?

Type permite hacer uso de Uniones (Las cuales le da acceso a las variables en uso la posibilidad de ser una opción de las ofrecidas), las Tuplas (Las cuales tienen un numero determinado de espacios donde agregar la información según la cantidad de tipos de variables estén escritas en los corchetes), los Tipos primitivos con alias (es solo darle un nombre o designación sencilla para una mejor identificación) y los Mapped Types (El cual toma un objeto, clona las propiedades y los modifica)

_(tu respuesta — pensá en uniones, tuplas, tipos primitivos con alias, mapped types)_

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Si pueden extenderse, claro que la interface no tiene problemas, ya que puede tener muchas lineas con el mismo codigo (interface AlumnoInterface {}) varias veces. No afectara al codigo ni soltara un error.

El Type, en cambio, necesita agregar un & para que funcione, combinando ambos tipos en uno solo: 

type BasedeDatos = { legajo: number }
type ClienteType = BasedeDatos & { nombre: string }

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Interface: Usaría este porque es mas sencilla y no dará problemas a futuro si el sistema crece demasiado y sea necesario agregar muchos mas elementos. 
