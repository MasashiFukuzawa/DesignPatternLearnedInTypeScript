import { Link } from "./link";
import { Tray } from "./tray";
import { Page } from "./page";

interface Constructable<T> extends Function {
  new (...args: any[]): T;
}

export abstract class Factory {
  static factories: Constructable<Factory>[] = [];
  static getFactory(className: string): Factory {
    const factory = this.factories.find((e) => e.name === className);
    if (factory) {
      return new factory();
    } else {
      throw new Error('Unknown className.');
    }
  }

  abstract createLink(caption: string, url: string): Link;
  abstract createTray(caption: string): Tray;
  abstract createPage(title: string, author: string): Page;
}
