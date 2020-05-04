import { Properties } from '../property/properties';

export class Database {
  static getProperty(dbName: string): Properties {
    const fileName = `./src/${dbName}.txt`
    return new Properties(fileName);
  }
}
