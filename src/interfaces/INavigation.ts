export type BadgeVariant = "default" | "success" | "warning" | "error" | "info";
export type MenuItemVariant = "default" | "danger";

export interface IBadge {
  text: string;
  variant: BadgeVariant;
}

export interface INavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  isActive: boolean;
  badge?: IBadge | null;
  children?: INavigationItem[];
  section?: string;
}

export interface IBreadcrumb {
  label: string;
  href: string | null;
  isActive: boolean;
}

export interface IMenuItem {
  id: string;
  label?: string;
  href?: string;
  action?: string;
  icon?: string;
  shortcut?: string;
  variant?: MenuItemVariant;
  type?: "item" | "separator";
}
