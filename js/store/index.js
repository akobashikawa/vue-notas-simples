import main from './main.js';
import notes from './notes.js';

const store = new Vuex.Store({
  modules: {
    main,
    notes,
  }

});

export default store;