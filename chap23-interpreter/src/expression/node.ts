import { Context } from "../context/context";

export interface Node {
  parse(context: Context): void;
}
