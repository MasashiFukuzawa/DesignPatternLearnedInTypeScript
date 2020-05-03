import { Drawable } from "./drawable"

export class DrawCommand {
  constructor(
    private readonly drawable: Drawable,
    private readonly position: { [key: string]: number }
  ) {}

  execute(): void {
    this.drawable.draw(this.position['x'], this.position['y']);
  }
}
