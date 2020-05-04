import { HTMLWriter } from "./htmlWriter"
import { Database } from "./database";

export class PageMaker {
  static makeWelcomePage(mailAddr: string, fileName: string): void {
    try {
      const mailProp = Database.getProperty("maildata");
      const userName = mailProp.getProperty(mailAddr);
      const writer = new HTMLWriter(fileName);
      writer.title(`Welcome to ${userName}'s page!'`);
      writer.paragraph(`${userName}のページへようこそ。`);
      writer.paragraph("メール待っていますね。");
      writer.mailTo(mailAddr, userName);
      writer.close;
      console.log(`${fileName} is created for ${mailAddr} (${userName})`);
    } catch(e) {
      console.log(e);
    }
  }
}
