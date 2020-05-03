import { Mediator } from '../mediator/mediator'

export interface Colleague {
  setMediator(mediator: Mediator): void;
  setColleagueEnabled(enabled: boolean): void;
}
