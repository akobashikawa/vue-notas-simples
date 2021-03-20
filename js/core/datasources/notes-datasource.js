import config from '../../config.js';

const ds = {
  async getItems(type) {
    try {
      const url = `${config.API_BASE_URL}/getgooglesheetcsv?id=${config.GOOGLE_SHEET_ID}`;
      const response = await axios.get(url);
      const result = response.data;
      return result;
    } catch (error) {
      throw error;
    }
  },

};

export default ds;