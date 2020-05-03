import { NumberGenerator } from "../publisher/numberGenerator";

export interface Observer {
  update(generator: NumberGenerator): void;
}
