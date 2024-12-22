import { Component, OnInit } from '@angular/core';

export interface User {
  username: string;
  discriminator: string;
  status: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
  styleUrls: ['./discord.component.scss']
})
export class DiscordComponent implements OnInit {
  selectedSection: string = 'online';
  onlineFriends: User[] = [];
  allFriends: User[] = [];
  pendingRequests: User[] = [];
  suggestions: string[] = [];
  blockedUsers: User[] = [];
  searchText: string = '';
  showClearButton: boolean = false;


  mockUsers: User[] = [
    { username: 'Alex', discriminator: '1234', status: 'Online', avatarUrl: 'profil1.png' },
    { username: 'Andrew', discriminator: '3333', status: 'Offline', avatarUrl: 'profil2.png' },
    { username: 'Carl', discriminator: '9999', status: 'Online', avatarUrl: 'profil3.png' },
    { username: 'Timmy', discriminator: '5678', status: 'Do Not Disturb', avatarUrl: 'profil4.png' }
  ];

  ngOnInit() {
    this.onlineFriends = this.mockUsers.filter(user => user.status === 'Online');
    this.allFriends = this.mockUsers;
  }

  // Method to handle search input changes
  onInputChange() {
    this.showClearButton = this.searchText.length > 0;
  }

  // Method to clear search text
  clearSearch() {
    this.searchText = '';
    this.showClearButton = false;
  }

  // Method to handle section changes
  onSectionChange(section: string) {
    this.selectedSection = section;
  }

  // Method to check if an array is empty
  isEmpty(array: any[]): boolean {
    return array.length === 0;
  }
}