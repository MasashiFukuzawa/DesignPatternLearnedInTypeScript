import { Colleague } from "./colleague";
import { Mediator } from "../mediator/mediator";

export class ColleagueTextField implements Colleague {
  private mediator: Mediator = Object as any;
  private state: boolean = true;
  constructor(private text: string) {}

  getText(): string {
    return this.text;
  }

  getState(): boolean {
    return this.state;
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  setColleagueEnabled(enabled: boolean): void {
    this.state = enabled;
  }

  textValueChanged(text: string): void {
    this.text = text;
    this.mediator.colleagueChanged();
  }
}
