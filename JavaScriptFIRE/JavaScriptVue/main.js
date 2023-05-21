const ifo = {
    message: 'boo. your noo',
    clicks: 0,
    users:[]
}


const dodatok = {
    data(){
        return ifo;
    },
    methods: {
        clicker(){
            this.clicks++
        }
    },
    mounted(){
        db.collection('fourtune').get().then(res => {
            res.forEach(user => {
                let ludina = user.data();
                ludina.id = user.id;
                this.users.push(ludina)
            })
        })
    }
}
Vue.createApp(dodatok).mount('#test');