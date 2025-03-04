import { SidebarActionInterface } from '../interfaces/sidebar-action.interface';

export const sidebarActions: { [key: string]: SidebarActionInterface } = {
  refresh: {
    hoverClass: 'fillBackground',
    fillHoverClass: '',
    icon: 'discord',
    bgColor: '#36373c'
  },
  search: {
    hoverClass: 'fillBackground',
    fillHoverClass: 'fill-green',
    icon: 'search',
    bgColor: '#36373c'
  },
  addServer: {
    hoverClass: 'fillBackground',
    fillHoverClass: 'fill-green',
    icon: 'plus',
    bgColor: '#36373c'
  },
  logout: {
    hoverClass: 'fillBackground',
    fillHoverClass: 'fill-red',
    icon: 'mono-logout',
    bgColor: '#36373c'
  }
};
