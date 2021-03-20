import NotesService from '../core/services/notes-service.js';
import notesDataSource from '../core/datasources/notes-datasource.js';

const notesService = NotesService.create({ datasource: notesDataSource });

const notesStore = {
  namespaced: true,
  strict: true,

  state: {
  },

  mutations: {
  },

  actions: {
    async getItems({ commit, state }) {
      try {
        const items = await notesService.getItems();
        return items;
      } catch (error) {
        throw error;
      }
    },
  }
};

export default notesStore;