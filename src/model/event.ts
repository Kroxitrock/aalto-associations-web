import { Association } from "./association";

export default interface Event {
  id?: number;
  title: string;
  description?: string;
  picture?: string;
  date?: Date;
  location?: string;
  price: number;
  capacity?: number;
  association: Association;
  joined: boolean;
}

export interface UpcomingEventDto {
  id: number;
  title: string;
  description: string;
  picture: string;
  date: Date;
  location: string;
  price: number;
  capacity: number;
  associationName: string;
  joined: boolean;
  participants: number;
}

export enum EventListType {
  MY_EVENTS = "my_events",
  ASSOCIATION_EVENTS = "association_events",
}
