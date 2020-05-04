import { Link } from "./link";
import { Tray } from "./tray";
import { Page } from "./page";
import { FactoryRepository } from "../repository/factoryRepository";

export abstract class Factory {
  static getFactory(className: string): Factory {
    const factory = FactoryRepository.factories.find((e) => e.name === className);
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
