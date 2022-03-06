var app = new Vue({
    el: '#app',
    data:{
        message : "Do you wanna to build vuejs ?"
    }
});
// directive bind
var app2 = new Vue({
    el: '#app2',
    data:{
        message : 'You are at the page ' + new Date().toLocaleString()
    }
});
// directive if
var app3  = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})
// directive for
var app4 = new Vue({
    el: "#app4",
    data: {
        todos : [
            {text: "Le Hai Dang"},
            {text: "Tran Van An"}
        ]
    }
})

app4.todos.push({text: "Hello world"});

// directive on
var app5 = new Vue({
    el: "#app5",
    data: {
        message :"We dont talk any more"
    },
    methods: {
        reverseMsg: function(){
            this.message = this.message.split(' ').reverse().join(' ');
        }
    }
})

//directive model (binding 2 ways)
var app6 = new Vue({
    el: "#app6",
    data: {
        inputData: ""
    }
})

// component vuejs
// component name must rename like this
// ex: supercompo, super-compo
Vue.component('supercompo', {
    props: ['singleitem'],
    template: '<li>{{ singleitem.message }}</li>'
})
  
var app7 = new Vue({
    el: '#app7',
    data: {
      itemList: [
        { id: 0, message: 'Admin' },
        { id: 1, message: 'User' },
      ]
    }
  })
