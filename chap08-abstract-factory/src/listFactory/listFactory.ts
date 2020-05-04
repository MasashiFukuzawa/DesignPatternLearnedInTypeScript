import { Factory } from "../factory/factory";
import { ListLink } from "./listLink";
import { ListTray } from "./listTray";
import { ListPage } from "./listPage";

export class ListFactory extends Factory {
  createLink(caption: string, url: string): ListLink {
    return new ListLink(caption, url);
  }

  createTray(caption: string): ListTray {
    return new ListTray(caption);
  }

  createPage(title: string, author: string): ListPage {
    return new ListPage(title, author);
  }
}
