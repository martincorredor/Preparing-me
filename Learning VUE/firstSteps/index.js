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
/*
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
*/


/*================= Third Class ===================== */
/*
const app = new Vue({
  el: '#app',
  data: {
    title: 'Hello world with Vue',
    fruits: [
      { name: 'pera', quantity: 10 },
      { name: 'manzana', quantity: 0 },
      { name: 'platano', quantity: 8 },
    ],
    newFruit: '',
    total: 0
  },
  methods: {
    addFruit() {
      this.fruits.push({
        name: this.newFruit,
        quantity: 0,
      });
      this.newFruit = '';
    },
  },
  computed: {
      sumFruits(){
          this.total = 0;
          for(fruit of this.fruits){
              this.total = this.total + fruit.quantity;
          }
          return this.total;
      }
  }
});
*/

/*================= Fourth Class ===================== */
/*
const app = new Vue({
    el: '#app',
    data: {
        background: 'bg-warning',
        color: false      
    },
    methods: {
      operations(){
          console.log([] == ![])
          console.log(NaN === NaN)
          console.log(typeof NaN)
          console.log(0.1 + 0.2 === 0.3)
          console.log(3 > 2 > 1)
          console.log([1, 2, 3]+ [4, 5, 6])
          console.log(!![])
          console.log([] == true)
      }
    },
  });
  */

  /*================= Firfth Class ===================== */
/*
  const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Martin',
        counter: 0 
    },
    methods: {
      
    },
    computed: {
        invested(){
            return this.message.split('').reverse().join('')
        },
        color(){
            return {
                'bg-success' : this.counter <= 10,
                'bg-warning' : this.counter > 10 && this.counter < 20,
                'bg-danger' : this.counter >= 20
            }
        }
    }
  });
*/

/*================= Sixth Class ===================== */
const app = new Vue({
    el: '#app',
    data: {
        saludo: "soy el ciclo de vida de Vue"
    },


    beforeCreate() {
        // Se ejecuta al crear la instancia de "new Vue"
        console.log("beforeCreate")
    },
    created() {
        // Se ejeccuta al crear los metodos, observadores y eventos, pero aún no se accede al DOM.
        // Aún no se accede a "el".
        console.log("created")
    },
    beforeMounted() {
        //Se ejecuta antes de insertar al DOM
        console.log("beforeMounted")
    },
    mounted(){
        //Se ejecuta al insertar al DOM
        console.log("mounted")
    },
    beforeUpdate(){
        // Se ejecuta cuando detecta algun cambio en nuestro HTML
        console.log("beforeUpdate")
    },
    updated(){
        // Se ejecuta al realizar los cambios
        console.log("updated")
    },
    beforeDestroy(){
        // Se ejecuta al destruir la instancia
        console.log("beforeDestroy")
    },
    destroyed(){
        // Se destruye toda la instancia
        console.log("destroyed")
    },


    methods: {
        destroy(){
            this.$destroy()
        }
    }
});

