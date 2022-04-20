let app = new Vue ({
    el: '#app',
    data: {
        message: 'Prova, prova, Sa, sa',
        img: 'https://picsum.photos/301/300'
    },
    methods: {
        refresh(){
            if(this.img == 'https://picsum.photos/301/300') {
                this.img = 'https://picsum.photos/300/301'
            } else {
                this.img = 'https://picsum.photos/301/300'
            }
            
        }
    }
})