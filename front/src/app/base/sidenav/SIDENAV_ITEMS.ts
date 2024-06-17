import { SidenavItem } from "app/base/sidenav/sidenav.model";
import { PrimeIcons, MenuItem } from 'primeng/api';

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'products',
    labels: {
      en: "Products",
      fr: "Products"
    },
    link: 'products',
    icon: PrimeIcons.SHOPPING_CART
  },
  {
    id: 'admin',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    link: 'admin/products',
    icon: PrimeIcons.USERS
  }

];