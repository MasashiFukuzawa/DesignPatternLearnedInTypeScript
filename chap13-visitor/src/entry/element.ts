import { Visitor } from "../visitor/visitor";

export interface Element {
  accept(v: Visitor): void;
}
