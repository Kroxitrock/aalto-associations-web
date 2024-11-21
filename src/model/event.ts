export default interface Event {
  id: number;
  title: string;
  description: string;
  picture: string;
  date: Date;
  location: string;
  price: number;
  capacity: number;
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
}

export enum EventListType {
  MY_EVENTS = "my_events",
  ASSOCIATION_EVENTS = "association_events",
}
