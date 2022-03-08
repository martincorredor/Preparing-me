Vue.component('child', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Child: {{numero}}</h4>
    </div>
    `,
    props: ['numero']
})