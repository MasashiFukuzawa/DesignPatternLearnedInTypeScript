import { Print } from "./print";
import { Banner } from "../banner/banner";

export class PrintBanner extends Print {
  private readonly banner: Banner;
  constructor(string: string) {
    super();
    this.banner = new Banner(string);
  }

  printWeak(): void {
    this.banner.showWithParen();
  }

  printStrong(): void {
    this.banner.showWithAster();
  }
}
