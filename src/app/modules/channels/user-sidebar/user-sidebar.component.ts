import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent {
  @Output() sectionSelected = new EventEmitter<string>(); // Eveniment pentru a emite secțiunea selectată
  activeSection: string = 'online'; // Secțiunea activă implicită
selectSection(section: string) {
    this.activeSection = section; // Setează secțiunea activă
    this.sectionSelected.emit(section); // Trimite secțiunea selectată către componenta părinte
  }
}
