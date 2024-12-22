import { Component, Input } from '@angular/core';

interface User {
  username: string;
  discriminator: string;
  status: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Input() title: string = 'User List';

  isEmpty(array: any[]): boolean {
    return array.length === 0;
  }
}
