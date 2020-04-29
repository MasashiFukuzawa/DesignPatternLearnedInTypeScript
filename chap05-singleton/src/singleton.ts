export class Singleton {
  private static singleton = new Singleton();
  private constructor() {
    console.log('Create an instance.');
  }

  static getInstance() {
    return this.singleton;
  }
}
