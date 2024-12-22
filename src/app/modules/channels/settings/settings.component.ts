import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  friendRequestOptions = [
    { label: 'Everyone', isChecked: false },
    { label: 'Friends of Friends', isChecked: false },
    { label: 'Server Members', isChecked: false }
  ];

  toggleCheckbox(option: any) {
    option.isChecked = !option.isChecked;
  }

  emailHidden: boolean = true;
  phoneHidden: boolean = true;
  email: string = 'user12345@gmail.com';
  phoneNumber: string = '0765464632';

  toggleEmailVisibility(event: Event): void {
    event.preventDefault();
    this.emailHidden = !this.emailHidden;
  }

  togglePhoneVisibility(event: Event): void {
    event.preventDefault();
    this.phoneHidden = !this.phoneHidden;
  }

  censorEmail(email: string): string {
    const lastSix = email.slice(-10);
    return '***********' + lastSix;
  }
  censorPhoneNumber(phoneNumber: string): string {
    const lastFour = phoneNumber.slice(-4);
    return '********' + lastFour;
  }
  selectedOption = 'My Account';

  displayOption(option: string) {
    this.selectedOption = option;
  }
}
