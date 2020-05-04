import { Colleague } from "./colleague"
import { Mediator } from "../mediator/mediator";

export class ColleagueButton implements Colleague {
  private mediator: Mediator = Object as any;
  private state: boolean = false;

  getState(): boolean {
    return this.state;
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  setColleagueEnabled(enabled: boolean): void {
    this.state = enabled;
  }
}
