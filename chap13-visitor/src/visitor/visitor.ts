import { File } from "../entry/file";
import { Directory } from "../entry/directory";

export abstract class Visitor {
  abstract visitFile(file: File): void;
  abstract visitDirectory(directory: Directory): void;
}
