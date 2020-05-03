import { State } from "./state";
import { Context } from "../context/context";
import { DayState } from "./dayState";

export class NightState implements State {
  private static singleton: NightState = new NightState();
  private constructor() {}

  static getInstance(): State {
    return NightState.singleton;
  }

  doClock(context: Context, hour: number): void {
    if (hour >= 9 && hour < 17) {
      context.changeState(DayState.getInstance());
    }
  }

  doUse(context: Context): void {
    context.recordLog('Use safe (night)');
  }

  doAlarm(context: Context): void {
    context.callSecurityCenter('Alarm (night)');
  }

  doPhone(context: Context): void {
    context.callSecurityCenter('Normal call (night)');
  }

  toString(): string {
    return '[night]';
  }
}
