Vue.component('child', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Child: {{number}}</h4>
        <h4>Name: {{name}}</h4>
        <button class="btn btn-warning" @click="number++">+</button>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            name: "Martin",
            number: 0
        }
    },
    mounted(){
        this.$emit('nameChild', this.name),
        this.$emit('number', this.number)
    },
    updated(){
        this.$emit('number', this.number)
    }
})