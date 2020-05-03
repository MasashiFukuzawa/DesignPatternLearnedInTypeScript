import { Colleague } from "./colleague";
import { Mediator } from "../mediator/mediator";

export class ColleagueCheckbox implements Colleague {
  private mediator: Mediator = Object as any;
  private state: boolean = true;

  getState(): boolean {
    return this.state;
  }

  setState(enabled: boolean): void {
    this.state = enabled;
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  setColleagueEnabled(enabled: boolean): void {
    this.state = enabled;
  }
}
