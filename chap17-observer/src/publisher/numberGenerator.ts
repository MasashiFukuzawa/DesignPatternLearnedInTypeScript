import { Observer } from "../subscriber/observer";

export abstract class NumberGenerator {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  deleteObserver(observer: Observer): void {
    this.observers = this.observers.filter((e) => e !== observer);
  }

  notifyObservers(): void {
    this.observers.forEach((e) => e.update(this));
  }

  abstract getNumber(): number;
  abstract execute(): void;
}
