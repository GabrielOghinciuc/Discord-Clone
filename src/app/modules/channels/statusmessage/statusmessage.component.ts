import { Component } from '@angular/core';

@Component({
  selector: 'app-status-message',
  templateUrl: './statusmessage.component.html',
  styleUrls: ['./statusmessage.component.scss']
})
export class StatusmessageComponent {
  activeFriends: string[] = [];
}
