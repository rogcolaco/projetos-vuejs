new Vue({
    el:'#desafio',
    data:{
        nome : 'Rogério Colaço',
        idade: 36,
        imageLink: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2021/12/jujutsu-kaisen-0-arte.jpg'
    },
    methods:{
        multiplicaIdade() {
            return this.idade * 3
        },
        sorteiaNumero() {
            return Math.random()
        }
    }
})
