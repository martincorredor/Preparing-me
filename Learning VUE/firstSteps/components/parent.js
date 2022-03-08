Vue.component('parent', {
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Parent: {{numberParent}} </h2>
        <button class="btn btn-primary" @click="numberParent++">+</button>
        <button class="btn btn-danger" @click="numberParent--">-</button>
        <child :numero="numberParent"></child>
    </div>
    `,
    data(){
        return {
            numberParent: 0
        }
    }
})