const service = {
  datasource: null,

  create({ datasource }) {
    var service = Object.create(this);
    service.datasource = datasource;
    return service;
  },

  async getItems() {
    try {
      const items = await this.datasource.getItems();

      return items;

    } catch (error) {
      throw error;
    }
  },

};

export default service;