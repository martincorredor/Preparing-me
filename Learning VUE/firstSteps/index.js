/*================= Introduction ===================== */
/*
const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hello world with Vue',
    frutas: [
        {nombre:'pera', cantidad: 10 },
        {nombre: 'manzana', cantidad: 0},
        {nombre: 'platano', cantidad: 8}
    ]
  },
});
*/

/*================= Second Class ===================== */
const app = new Vue({
    el: '#app',
    data: {
      title: 'Hello world with Vue',
      fruits: [
          {name:'pera', quantity: 10 },
          {name: 'manzana', quantity: 0},
          {name: 'platano', quantity: 8}
      ],
      newFruit: ''
    },
    methods: {
        addFruit (){
            this.fruits.push({
                name: this.newFruit, quantity: 0
            })
        }
    }
  });
