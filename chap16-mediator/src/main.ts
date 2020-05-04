import { LoginFrame } from "./mediator/loginFrame"

class Main {
  main(): void {
    const l = new LoginFrame();

    // when guest
    l.checkGuest.setState(true);
    l.checkLogin.setState(false);
    console.log('Mark the guest checkbox');
    l.textUser.textValueChanged('')
    console.log(l.textUser.getState()); // false
    console.log(l.textPass.getState()); // false
    console.log('Text input cannot be used');
    console.log(l.buttonOk.getState()); // true
    console.log('OK Button can be used');

    console.log('=========================================');

    // when login
    l.checkGuest.setState(false);
    l.checkLogin.setState(true);
    console.log('Mark the login checkbox');
    console.log('Text input can be used');
    l.textUser.textValueChanged('Masashi Fukuzawa');
    l.textPass.textValueChanged('password');
    console.log(l.textUser.getState()); // true
    console.log(l.textPass.getState()); // true
    console.log('Fill the text inputs');
    console.log(l.buttonOk.getState()); // true
    console.log('OK Button can be used');
  }
}

const m = new Main();
m.main();
