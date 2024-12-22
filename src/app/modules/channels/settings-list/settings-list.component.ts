import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent {
  @Output() optionSelected = new EventEmitter<string>(); // Emite un string pentru opțiunea selectată

  selectOption(option: string) {
    this.optionSelected.emit(option); // Emite opțiunea selectată către componenta părinte
  }
  selectedOption: string = 'My Account'; // Opțiunea selectată implicit
}
