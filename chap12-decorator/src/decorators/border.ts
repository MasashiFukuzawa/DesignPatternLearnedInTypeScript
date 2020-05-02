import { Display } from "../components/display";

export abstract class Border extends Display {
  constructor(protected readonly display: Display) {
    super();
  }
}
