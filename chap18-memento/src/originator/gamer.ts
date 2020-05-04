import '../extensions/math.extensions'
import { Memento } from '../memento/memento';

export class Gamer {
  private fruits: string[] = [];
  private readonly fruitNames: string[] = ['apple', 'grape', 'banana', 'orange'];
  constructor(private money: number) {}

  getMoney(): number {
    return this.money;
  }

  getFruits(): string[] {
    return this.fruits;
  }

  bet(): void {
    const dice: number = Math.getRandomInt(6) + 1;
    if (dice === 1) {
      this.money += 100;
      console.log('You got money.');
    } else if (dice === 2) {
      this.money /= 2;
      console.log('Your money became in half.');
    } else if (dice === 6) {
      const fruit = this.getFruit();
      if (!!this.fruits) {
        console.log(`You got fruit: ${fruit}.`);
        this.fruits.push(fruit);
      }
    } else {
      console.log('Nothing happened.');
    }
  }

  createMemento(): Memento {
    const memento = new Memento(this.money);
    this.fruits.forEach((e) => {
      if (e.match(/Delicious/)) {
        memento.addFruits(e);
      }
    });
    return memento;
  }

  restoreMemento(memento: Memento): void {
    this.money = memento.getMoney();
    this.fruits = memento.clone();
  }

  private getFruit(): string {
    if (Math.getRandomInt(4) === 1) {
      const prefix = 'Delicious ';
      const index = Math.getRandomInt(this.fruitNames.length);
      return `${prefix}${this.fruitNames[index]}`;
    } else {
      return '';
    }
  }
}
