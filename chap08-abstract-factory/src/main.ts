import { Factory } from "./factory/factory";
import { ListFactory } from "./listFactory/listFactory";

class Main {
  main() {
    const args = process.argv;

    if (args.length > 3) {
      console.log('argument error');
      throw new Error('Invalid argument.');
    }

    Factory.factories.push(ListFactory);
    const className = args[2];
    const factory = Factory.getFactory(className);
    const asahi = factory.createLink('Asahi', 'https://www.asashi.com');
    const usYahoo = factory.createLink('Yahoo!', 'https://www.yahoo.com');
    const jpYahoo = factory.createLink('Yahoo!Japan', 'https://www/yahoo.co.jp');
    const excite = factory.createLink('Excite', 'https://www.excite.com');
    const google = factory.createLink('Google', 'https://www.google.com');

    const trayNews = factory.createTray('Newspaper');
    trayNews.add(usYahoo);
    trayNews.add(asahi);

    const trayYahoo = factory.createTray('Yahoo');
    trayYahoo.add(usYahoo);
    trayYahoo.add(jpYahoo);

    const traySearch = factory.createTray('Search Engine');
    traySearch.add(trayYahoo)
    traySearch.add(excite);
    traySearch.add(google);

    const page = factory.createPage('LinkPage', 'Ichiro Suzuki');
    page.add(trayNews);
    page.add(traySearch);
    page.output();
  }
}

const m = new Main();
m.main();
