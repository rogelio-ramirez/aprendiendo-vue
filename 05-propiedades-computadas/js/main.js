const vue = new Vue({
    el: 'main',
    data: {
        mensaje: '¡hola mundo!',
        tareas: [
            { titulo: 'Aprender Vue.js', prioridad: true, antiguedad: 23 },
            { titulo: 'Aprender ES6', prioridad: false, antiguedad: 135 },
            { titulo: 'Publicar algo todos los días', prioridad: true, antiguedad: 378 }
        ]
    },
    methods: {

    },
    /* Las computed properties sólo se evalúan cuando cambia un valor del modelo, un método se evalúa en cada invocación */
    computed: {
        mensajeAlreves() {
            let mensajeArray = this.mensaje.split('');
            let mensajeArrayInverso = mensajeArray.reverse();
            let mensajeStrInverso = mensajeArrayInverso.join('');

            return mensajeStrInverso;
        },
        tareasConPrioridad() {
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasSinPrioridad() {
            return this.tareas.filter((tarea) => !tarea.prioridad);
        },
        tareasPorAntiguedad() {
            return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
        }
    }
});