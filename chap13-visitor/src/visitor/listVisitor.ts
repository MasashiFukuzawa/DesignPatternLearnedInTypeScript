import { Visitor } from './visitor'
import { File } from '../entry/file';
import { Directory } from '../entry/directory';

export class ListVisitor extends Visitor {
  private currentDir = '';

  visitFile(file: File): void {
    console.log(`${this.currentDir}/${file}`);
  }

  visitDirectory(directory: Directory): void {
    console.log(`${this.currentDir}/${directory}`);
    const saveDir = this.currentDir;
    this.currentDir = `${this.currentDir}/${directory.getName()}`;
    directory.getDir().forEach(d => {
      d.accept(this);
    });
    this.currentDir = saveDir;
  }
}