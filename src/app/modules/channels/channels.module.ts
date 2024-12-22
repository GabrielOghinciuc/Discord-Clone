import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels.component';
import { ChannelsRoutesModule } from './channels.routes';
import { DiscordComponent } from './discord/discord.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { StatusmessageComponent } from './statusmessage/statusmessage.component';
import { OnlineUserComponent } from './online-user/online-user.component';
import { NitroComponent } from './nitro/nitro.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { TooltipModule } from '../../shared/components/tooltip/tooltip.module';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerRoutesModule } from '../server/server.routes';
import { OverlayModule } from '@angular/cdk/overlay';

const COMPONENTS = [
  SettingsListComponent,
  ChannelsComponent,
  DiscordComponent,
  SettingsComponent,
  OnlineUserComponent,
  NitroComponent,
  ChannelListComponent,
  UserSidebarComponent,
  UserListComponent,
  StatusmessageComponent
];

const MODULES = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, ServerRoutesModule, OverlayModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, TooltipModule],
  exports: [ChannelsComponent]
})
export class ChannelsModule {}
