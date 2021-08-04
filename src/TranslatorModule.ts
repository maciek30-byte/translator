const { Translate } = require("@google-cloud/translate").v2;
require("dotenv").config();
// @ts-ignore
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// cliient configuration
const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_id,
});

class TranslatorModule {
  constructor(client){
    this.client = ...
  }
  static async detectLanguage(text: string) {
    try {
      let response = await translate.detect(text);
      return response[0].language;
    } catch (error) {
      console.log(`Error at detectLanguage --> ${error}`);
      return 0;
    }
  }
  static async translateText(text: string, targetLanguage: string) {
    try {
      let [response] = await translate.translate(text, targetLanguage);
      return response;
    } catch (error) {
      console.log(`Error at translateText --> ${error}`);
      return 0;
    }
  }
}
export default TranslatorModule