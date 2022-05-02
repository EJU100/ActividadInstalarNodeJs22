app.component('menu-component', {
    template: `<!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Link 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link 3</a>
            </li>
          </ul>
          <div class="end-text">
            {{user }}
            <input type="text" v-model="testValue" /><button @click="toFather">To Father</button>
          </div>
        </div> 
    </nav>`,
    props: {
        user: String
    },
    data(){
        return {
            testValue: ''
        }
    },
    emits: ['response'],
    methods: {
        toFather(){
            this.$emit('response', this.testValue);
        }
    }
})