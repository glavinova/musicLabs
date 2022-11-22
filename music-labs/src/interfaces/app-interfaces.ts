export interface ISongDetails {
    id: number;
    name: string;
    artist: string;
    parts: number;
    pages: number;
    duration: string;
    genre: GenreEnum;
    instrument: string;
    price: number;
    songKey: string;
    difficulty: DificulltyLevelEnum;
    description: string;
}
export enum GenreEnum {
    Classical = 'Classical',
    Popular = 'Popular',
    Rock = 'Rock',
    Jazz = 'Jazz',
    Country = 'Country',
    Electronic = 'Electronic'
} 

export enum DificulltyLevelEnum {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Professional = 'Professional',
} 

export interface IMainFeaturedPostProps {
    post: {
      description: string;
      image: string;
      imageText: string;
      title: string;
    };
  }