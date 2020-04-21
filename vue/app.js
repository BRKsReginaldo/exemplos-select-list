const app = new Vue({
  data: () => ({
    alimentos: []
  }),
  methods: {
    adicionarAlimento(ev) {
      ev.preventDefault()

      const form = new FormData(ev.target)

      let nome = form.get('nome');
      let quantidade = form.get('quantidade');

      this.alimentos.push({
        nome,
        quantidade
      })

      ev.target.reset()

      return false
    },
    salvarAlimentos(ev) {
      alert('alimentos salvos')
    }
  }
}).$mount('#app')