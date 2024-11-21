export default interface UpcomingEventDto {
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
