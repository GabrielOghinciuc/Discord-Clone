import { Component, Input } from '@angular/core';

interface User {
  username: string;
  discriminator: string;
  status: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-online-user',
  templateUrl: './online-user.component.html',
  styleUrls: ['./online-user.component.scss']
})
export class OnlineUserComponent {
  @Input() users: User[] = [];
  
  getOnlineUsers(): User[] {
    return this.users.filter(user => user.status === 'Online');
  }

  getOnlineUsersCount(): number {
    return this.getOnlineUsers().length;
  }
}