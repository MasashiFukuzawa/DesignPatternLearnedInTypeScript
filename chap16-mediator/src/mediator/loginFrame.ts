import { Mediator } from "./mediator";
import { ColleagueCheckbox } from "../colleague/colleagueCheckbox";
import { ColleagueTextField } from "../colleague/colleagueTextField";
import { ColleagueButton } from "../colleague/colleagueButton";

export class LoginFrame implements Mediator {
  checkGuest: ColleagueCheckbox;
  checkLogin: ColleagueCheckbox;
  textUser: ColleagueTextField;
  textPass: ColleagueTextField;
  buttonOk: ColleagueButton;
  buttonCancel: ColleagueButton;
  constructor() {
    this.checkGuest = new ColleagueCheckbox();
    this.checkLogin = new ColleagueCheckbox();
    this.textUser = new ColleagueTextField('');
    this.textPass = new ColleagueTextField('');
    this.buttonOk = new ColleagueButton();
    this.buttonCancel = new ColleagueButton();
    this.createColleagues();
  }

  createColleagues() {
    this.checkGuest.setMediator(this);
    this.checkLogin.setMediator(this);
    this.textUser.setMediator(this);
    this.textPass.setMediator(this);
    this.buttonOk.setMediator(this);
    this.buttonCancel.setMediator(this);
  }

  colleagueChanged(): void {
    if (this.checkGuest.getState()) {
      this.textUser.setColleagueEnabled(false);
      this.textPass.setColleagueEnabled(false);
      this.buttonOk.setColleagueEnabled(true);
    } else {
      this.textUser.setColleagueEnabled(true);
      this.userPassChanged();
    }
  }

  private userPassChanged() {
    if (this.textUser.getText().length > 0) {
      this.textPass.setColleagueEnabled(true);
      if (this.textPass.getText().length > 0) {
        this.buttonOk.setColleagueEnabled(true);
      } else {
        this.buttonOk.setColleagueEnabled(false);
      }
    } else {
      this.textPass.setColleagueEnabled(false);
      this.buttonOk.setColleagueEnabled(false);
    }
  }
}
