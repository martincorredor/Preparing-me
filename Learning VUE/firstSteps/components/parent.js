Vue.component('parent', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Parent: {{numberParent}} </h2>
        <h2>Number: {{number}} </h2>
        <button class="btn btn-primary" @click="number++, numberParent++">+</button>
        <button class="btn btn-danger" @click="number--, numberParent--">-</button>
        {{nameParent}}
        <child :numero="numberParent" @nameChild="nameParent = $event" @number="number = $event"></child>
    </div>
    `,
    data(){
        return {
            numberParent: 0,
            nameParent: '',
            number: 0
        }
    }
})