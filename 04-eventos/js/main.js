const vue = new Vue({
    el: 'main',
    data: {
        tareas: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Publicar algo todos los días'
        ],
        nuevaTarea: null
    },
    methods: {
        agregarTarea() {
            // console.log('Funciona');
            if (!this.nuevaTarea) {
                return;
            }
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
});

// Vanilla Javascript
// function agregarTarea() {
//     const input = document.querySelector('input[type=text]');

//     vue.tareas.unshift(input.value);
//     input.value = '';
// }