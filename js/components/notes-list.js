const Component = {
  data() {
    return {
      items: null,

      fields: [
        { key: 'actions', label: '' },
        { key: 'Marca temporal', label: 'fecha' },
        { key: 'Nueva Nota Simple', label: 'texto' },
        { key: 'Etiquetas', label: 'etiquetas' },
        { key: 'Referencias', label: 'referencias' },
      ],

      filter: '',

      error: null,
      loading: false,
    };
  },

  computed: {
    filteredItems() {
      if (this.filter) {
        return this.items.filter(item => {
          const includesTexto = item['Nueva Nota Simple'].trim().toLowerCase().includes(this.filter.trim().toLowerCase());
          const includesEtiquetas = item['Etiquetas'].trim().toLowerCase().includes(this.filter.trim().toLowerCase());
          const includesReferencias = item['Referencias'].trim().toLowerCase().includes(this.filter.trim().toLowerCase());
          const includesFecha = item['Marca temporal'].trim().toLowerCase().includes(this.filter.trim().toLowerCase());

          return includesTexto
            || includesEtiquetas
            || includesReferencias
            || includesFecha
            ;
        });
      }

      return this.items;
    },
  },

  filters: {
    formatDateTime(value) {
      return dateFns.format(value, 'DD/MM/YYYY hh:mm a');
    },
  },

  mounted() {
    this.getItems();
  },

  methods: {
    cleanFilter() {
      this.filter = '';
    },

    async getItems() {
      this.items = null;
      this.error = null;
      this.loading = true;
      try {
        const items = await this.$store.dispatch('notes/getItems');

        this.items = items;

        this.loading = false;
      } catch (error) {
        this.error = error;
        this.loading = false;

        this.$bvToast.toast('Error al intentar traer los items', {
          title: 'Error',
          toaster: 'b-toaster-bottom-center',
          // noAutoHide: true,
          variant: 'danger',
        });
      }
    },
  },

  template: `<div>
    <b-container fluid>
      <div class="mb-2">
        <b-form inline>
            <b-overlay
                :show="loading"
                class="d-inline-block"
                rounded
                opacity="0.6"
                spinner-small
                spinner-variant="primary"
            >
                <b-button @click="getItems" variant="primary">Listar</b-button>
            </b-overlay>
            <b-input-group class="ml-1">
                <b-form-input v-model="filter" placeholder="palabra clave" v-if="items"></b-form-input>
                <b-input-group-append>
                    <b-button variant="outline-secondary" v-if="items" @click="cleanFilter">Limpiar</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form>


      </div>

      <b-table ref="table" small head-variant="light" foot-clone striped hover :items="filteredItems" :fields="fields" v-if="filteredItems">
        <template v-slot:cell(actions)="row">
            <b-button size="sm" class="mb-2" @click="row.toggleDetails" variant="light">
                <b-icon icon="chevron-up" v-if="row.detailsShowing"></b-icon>
                <b-icon icon="chevron-down" v-else></b-icon>
            </b-button>
        </template>
        <template v-slot:row-details="row">
            <b-card>
                <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>fecha:</b></b-col>
                    <b-col>{{ row.item['Marca temporal'] }}</b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>texto:</b></b-col>
                    <b-col>
                      <div class="bordered shadow p-4">
                        {{ row.item['Nueva Nota Simple'] }}
                      </div>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>etiquetas:</b></b-col>
                    <b-col>{{ row.item['Etiquetas'] }}</b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>referencias:</b></b-col>
                    <b-col>{{ row.item['Referencias'] }}</b-col>
                </b-row>
            </b-card>
        </template>
    </b-table>

    <div v-else>
        Ningún item que mostrar
    </div>

    </b-container>
  </div>`,
};

export default Component;