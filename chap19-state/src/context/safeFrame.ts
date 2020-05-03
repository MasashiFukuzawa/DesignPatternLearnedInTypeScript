import '../extensions/math.extensions';
import { Context } from "./context";
import { State } from "../state/state";
import { NightState } from "../state/nightState";

export class SafeFrame implements Context {
  private state: State = NightState.getInstance();

  actionPerformed() {
    const random = Math.getRandomInt(12) + 1;
    if (random % 3 == 0) {
      this.state.doUse(this);
    } else if (random % 3 == 1) {
      this.state.doAlarm(this);
    } else if (random % 3 == 2) {
      this.state.doPhone(this);
    }
  }

  setClock(hour: number): void {
    let str = 'Current time is '
    if (hour < 10) {
      str = str.concat('', `0${hour}:00`);
    } else {
      str = str.concat('', `${hour}:00`);
    }
    console.log(str);
    this.state.doClock(this, hour);
  }

  changeState(latestState: State): void {
    console.log(`The state changed from ${this.state.toString()} to ${latestState.toString()}`);
    this.state = latestState;
  }

  callSecurityCenter(msg: string): void {
    console.log(`call ${msg}`);
  }

  recordLog(msg: string): void {
    console.log(`record ${msg}`);
  }
}
