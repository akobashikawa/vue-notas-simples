import NotesList from './notes-list.js';

const Component = {
  name: 'home',

  components: { NotesList },

  template: `<div>
        <b-container class="mt-4">
            <h3>Notas Simples</h3>
            <p>
                Una nota simple a la vez.
            </p>
        </b-container>

        <notes-list></notes-list>
    </div>`,
};

export default Component;