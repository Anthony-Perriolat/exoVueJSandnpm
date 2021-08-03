const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
    setInterval(() => {
        this.counter++
}, 1000)
}
}

const win = {
data() {
    return {
        
    }
}
}

const textWithInput = {
data() {
    return {
        text: "Une calculatrice ou calculette (terme souvent considéré comme péjoratif par les fabricants) est une machine conçue pour simplifier et fiabiliser des opérations de calcul. D'abord mécanique, puis électromécanique, la machine à calculer est devenue électronique dans les années 1960, avec l'introduction de la première machine à calculer électronique en 1961, suivie d'une miniaturisation accélérée des circuits intégrés. "
    }
},
methods: {
    validReponse() {
        if(1961) {
            
        }
    }
}

}

Vue.createApp(textWithInput).mount('#textWithInput')

Vue.createApp(Counter).mount('#counter')    
// vue appel de vuejs 
// mount liée id à l'objet
