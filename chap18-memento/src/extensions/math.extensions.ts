export {};

declare global {
  interface Math {
    getRandomInt(seed: number): number;
  }
}

Math.getRandomInt = (seed: number) => {
  return Math.floor(Math.random() * (Math.floor(seed)));
};
