export interface Association {
  id: number;
  name: string;
  logo?: string;
  description?: string;
  telegram?: string;
  phone?: string;
  email?: string;
  membership_fee?: number;
  role: AssociationRoleEnum;
}

export interface AssociationFilter {
  nameSearch?: string;
}

export enum AssociationTabsEnum {
  ABOUT = "about",
  EVENTS = "events",
}

export enum AssociationRoleEnum {
  MEMBER = "MEMBER",
  LEADER = "LEADER",
  NONE = "NONE",
}
