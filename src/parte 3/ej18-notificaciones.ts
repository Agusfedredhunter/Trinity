/**
 * EJERCICIO 18 - Sistema de notificaciones
 * ---------------------------------------------------------------------------
 * `enviarNotificaciones` debe funcionar con cualquier tipo de notificación,
 * sin importarle cuál es el tipo concreto.
 */
export abstract class Notificacion {
    abstract enviar(mensaje: string): void;
}

export class NotificacionEmail extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`email en tramite al destinatario: ${mensaje}`);

        // TODO: informar por consola (console.log) que se envía un email
        // con ese mensaje (mencionar "email").
    }
}

export class NotificacionSMS extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`sms en ruta a su destino: ${mensaje}`);
        // TODO: idem, mencionando "sms"
    }
}

export class NotificacionPush extends Notificacion {
    enviar(mensaje: string): void {
        console.log(`push en viaje: ${mensaje}`);
        // TODO: idem, mencionando "push"
    }
}

export function enviarNotificaciones(
    notificaciones: Notificacion[],
    mensaje: string
): void {
    // TODO: enviar el mensaje a través de cada notificación recibida.
    notificaciones.forEach(notificacion => notificacion.enviar(mensaje));
}
