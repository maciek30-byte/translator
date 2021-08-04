import {log} from "util";

const fs = require("fs");
class FileHelper {
  static async writeToFile(
    languageCode: string,
    data: unknown,
    title?: string
  ) {
    await fs.writeFile(
        `src/DB/${languageCode}.json`,
        data,
        {encoding:'utf-8'},
        (e:Error)=> {
          if(e){
            console.log(e.message)
          }
        },
        process.stdout.write("File created successfully!")
    );
  }

  // static async writeToFile(languageCode:string, data: unknown) {
  //   try {
  //     await fs.writeFile(
  //         `src/Db/${languageCode}.json`,
  //         data,
  //         { encoding: "utf-8" },
  //         (e: Error) => {
  //           e ? console.error(e.message) : console.log('file save succes')
  //           console.log(e.message)
  //         }
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  static readFromFile(filename: string) {
    console.log("czytam z pliku json ");
    return fs.readFile(
      `src/DB/${filename}.json`,
      (e: Error, content: Buffer) => {
        e ? e.message : content;
      }
    );
  }

  // static findFile(filename: string): boolean {
  //   return fs.access(`src/DB/${filename}.json`, (e: Error) => {
  //     if (e) {
  //       console.error("file is not find");
  //       return false;
  //     } else {
  //       console.log("file is find ");
  //       return true;
  //     }
  //   });
  // }

  // static async checkThatExist(filename: string) {
  //   try {
  //     fs.access(`src/DB/${filename}.json`);
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // }

  static syncFind(filename: string): boolean {
    return fs.existsSync(`src/DB/${filename}.json`);
  }
}
export default FileHelper;
