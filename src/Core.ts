import FileHelper from "./FileHelper";
import TranslatorModule from "./TranslatorModule";
const flatten = require("flat");
const unflatten = require('flat').unflatten

class Core {
  async translate(objToTranslate: unknown, selectedLanguage: string) {
    try {
      if (FileHelper.syncFind(selectedLanguage)) {
        await FileHelper.readFromFile(selectedLanguage);
      } else {
        const flatObj = flatten(objToTranslate);
        let translated: unknown = {};

        for (const element in flatObj) {
          const textToTranslate = flatObj[element];
          const translatedElement = await TranslatorModule.translateText(
            element,
            selectedLanguage
          );
          Object.assign(translated, { [element]: translatedElement });
        }
        const readyToSaveFile = unflatten(translated);
        await FileHelper.writeToFile(
          selectedLanguage,
          JSON.stringify(readyToSaveFile)
        );
        ???
      }
    } catch (e) {
        console.error(e.message)
        // throw new Error(e.message)
    }
  }
}
export default Core;
