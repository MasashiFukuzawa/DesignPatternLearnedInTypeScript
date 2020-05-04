import { Command } from "../command/command"

export class DrawCanvas {
  private readonly color: Color = Color.red;
  private readonly radius: number = 6;
  constructor(
    private readonly width: number,
    private readonly height: number,
    private readonly history: Command
  ) {
    Canvas.size(width, height);
    Canvas.background(Color.white);
  }

  paint(): void {
    this.history.execute();
  }

  draw(x: number, y: number): void {
    const g = new Graphics();
    g.color(this.color);
    g.fillOval(
      x - this.radius,
      y - this.radius,
      this.radius * 2,
      this.radius * 2
    );
  }
}

class Canvas {
  static size(width: number, height: number): void {
    // do something
  }

  static background(color: Color): void {
    // do something
  }
}

class Color {
  static red: string = 'red';
  static white: string = 'white';
}

class Graphics {
  color(color: Color): void {
    // do something
  }

  fillOval(x: number, y: number, width: number, height: number): void {
    // do something
  }
}
