export default class Logger {
  log(something) {
    console.log(`--------------------------------------`);
    console.log(`${something}\n`);
    console.log(`--------------------------------------`);
  }

  error(something) {
    console.log(`--------------------------------------`);
    console.error(`${something}\n`);
    console.log(`--------------------------------------`);
  }
}
