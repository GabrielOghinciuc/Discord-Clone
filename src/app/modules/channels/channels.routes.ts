import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent } from './channels.component';
import { DiscordComponent } from './discord/discord.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'channels',
    component: ChannelsComponent,
    children: [
      {
        path: '',
        redirectTo: 'discord'
      },
      {
        path: '@me',
        component: DiscordComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutesModule {}
