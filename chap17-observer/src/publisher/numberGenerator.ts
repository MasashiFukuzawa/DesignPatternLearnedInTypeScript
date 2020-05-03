import { Observer } from "../subscriber/observer";

export abstract class NumberGenerator {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  deleteObserver(observer: Observer): void {
    this.observers.forEach((o, i) => {
      // todo
      if (o !== observer) {
        this.observers.splice(i, 1);
      }
    });
  }

  notifyObservers(): void {
    this.observers.forEach(o => {
      o.update(this);
    });
  }

  abstract getNumber(): number;
  abstract execute(): void;
}
