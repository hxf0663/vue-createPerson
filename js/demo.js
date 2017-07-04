new Vue({
    el: '#app',
    data: {
        people: [],
        newPerson: [],
        message: 'hello Vue~'
    },
    mounted: function() {
        this.$nextTick(function() {
            this.View();
        })
    },
    methods: {
        View: function() {
            // GET /someUrl
            this.$http.get("data/data.json").then(res => {
                this.people = res.body.people;
                this.newPerson = res.body.newPerson;
                console.log(this.peopleList);
            }, res => {
                // error callbac
                alert('数据请求失败');
            });
        },
        createPerson: function(){
            this.people.push(this.newPerson);
            // 添加完newPerson对象后，重置newPerson对象
            this.newPerson = {name: '', age: 0, sex: 'Male'}
        },
        deletePerson: function(index) {
            this.people.splice(index, 1);
        }
    }
})
