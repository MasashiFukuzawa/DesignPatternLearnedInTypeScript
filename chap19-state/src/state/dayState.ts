import { Context } from "../context/context"
import { NightState } from "./nightState";
import { State } from "./state";

export class DayState implements State {
  private static singleton: DayState = new DayState();
  private constructor() {}

  static getInstance(): State {
    return DayState.singleton;
  }

  doClock(context: Context, hour: number): void {
    if (hour < 9 || hour >= 17) {
      context.changeState(NightState.getInstance());
    }
  }

  doUse(context: Context): void {
    context.recordLog('Use safe (day)');
  }

  doAlarm(context: Context): void {
    context.callSecurityCenter('Alarm (day)');
  }

  doPhone(context: Context): void {
    context.callSecurityCenter('Normal call (day)');
  }

  toString(): string {
    return '[day]';
  }
}