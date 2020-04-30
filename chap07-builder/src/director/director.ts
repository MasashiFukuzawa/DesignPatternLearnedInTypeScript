import { Builder } from "../builder/builder";

export class Director {
  constructor(private readonly builder: Builder) {}

  construct(): void {
    this.builder.makeTitle('Greeting');
    this.builder.makeString('In the morning and at noon');
    this.builder.makeItems(['Good morning', 'Good afternoon']);
    this.builder.makeString('At night');
    this.builder.makeItems(['Good evening', 'Good night', 'Good bye']);
    this.builder.close();
  }
}
