import { Component, Input, OnInit } from '@angular/core';

export interface User {
  username: string;
  discriminator: string;
  status: string;
  avatarUrl: string;
}
@Component({
  selector: 'app-nitro',
  templateUrl: './nitro.component.html',
  styleUrls: ['./nitro.component.scss']
})
export class NitroComponent implements OnInit {
  onlineFriends: User[] = [];
  allFriends: User[] = [];

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
}
