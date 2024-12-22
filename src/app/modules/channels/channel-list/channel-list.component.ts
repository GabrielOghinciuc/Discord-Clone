import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { User } from '../discord/discord.component';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent {
  @Input() users: User[] = [];

  microphoneActive = false;
  headphonesActive = false;
  currentUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  toggleMicrophone() {
    this.microphoneActive = !this.microphoneActive;
  }

  isActive(link: string): boolean {
    return this.currentUrl.includes(link);
  }

  toggleHeadphones() {
    this.headphonesActive = !this.headphonesActive;
  }
}