const vue = new Vue({
    el: 'main',
    data: {
        laborales: [
            'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'
        ],
        tareas: [
            { nombre: 'Hacer la compra', prioridad: 'baja' },
            { nombre: 'Aprender Vue.js y Firebase', prioridad: 'alta' },
            { nombre: 'Ir al gimnasio', prioridad: 'alta' }
        ],
        persona: {
            nombre: 'Rogelio',
            profesión: 'Desarrollador',
            ciudad: 'México'
        }
    }
});