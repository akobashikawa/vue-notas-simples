const Component = {
  name: 'app',
  
  computed: {
    ...Vuex.mapState(['main']),
  },

  template: `<div class="app-box">
        <header>
            <b-navbar toggleable="lg" type="dark" variant="info">
                <b-navbar-brand href="./">
                    <b-icon icon="collection"></b-icon>
                    Notas Simples
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item route to="/">Inicio</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </header>

        <main>
            <router-view></router-view>
        </main>

        <footer>
            <div class="text-center">
                <small> Notas Simples - {{ main.version }} </small> <br>
            </div>
        </footer>
    </div>`,
};

export default Component;