export class Context {
  private readonly tokenizer: StrongTokenizer;
  private currentToken: string = '';
  constructor(text: string) {
    this.tokenizer = new StrongTokenizer(text)
  }

  getCurrentToken(): string {
    return this.currentToken;
  }

  nextToken(): string {
    if (this.tokenizer.hasMoreTokens()) {
      this.currentToken = this.tokenizer.nextToken();
    } else {
      this.currentToken = '';
    }
    return this.currentToken;
  }

  skipToken(token: string): void {
    if (!this.currentToken) {
      this.currentToken = token;
    }
    if (token !== this.currentToken) {
      throw new Error(`Warning: ${token} is excepted, but ${this.currentToken} is found.`);
    }
    this.nextToken();
  }

  currentNumber(): number {
    return Number(this.currentToken);
  }
}

class StrongTokenizer {
  private readonly tokens: string[] = [];
  private currentTokenNumber = 0;
  constructor(text: string) {
    this.tokens = text.split(' ');
  }

  hasMoreTokens(): boolean {
    this.currentTokenNumber++;
    return !!this.tokens[this.currentTokenNumber];
  }

  nextToken(): string {
    return this.tokens[this.currentTokenNumber];
  }
}
