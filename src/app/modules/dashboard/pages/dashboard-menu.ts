import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: { icon: 'home', pack: 'fa' },
    link: '/home',
    home: true,
  },
  {
    title: 'Stock',
    icon: { icon: 'cubes', pack: 'fa' },
    link: '/dashboard/stock',
  },
  {
    title: 'Adhèrent',
    icon: { icon: 'user-check', pack: 'fa' },
    link: '/dashboard/adherent',
  },
  {
    title: 'Achat',
    icon: { icon: 'cart-arrow-down', pack: 'fa' },
    link: '/dashboard/achat',
  },
  {
    title: 'Vente',
    icon: { icon: 'cash-register', pack: 'fa' },
    link: '/dashboard/vente',
  },
  {
    title: 'Finance',
    icon: { icon: 'file-invoice-dollar', pack: 'fa' },
    link: '/dashboard/finance',
  },
  {
    title: 'Admin',
    icon: { icon: 'tools', pack: 'fa' },
    link: '/dashboard/admin',
  },
];
