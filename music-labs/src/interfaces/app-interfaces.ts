export interface IGridItemData {
    name: string;
    artist: string;
    parts: number;
    pages: number;
    duration: string;
    genre: GenreEnum;
    instrument: string;
    price: number;
}
export enum GenreEnum {
    Classical = 'Classical',
    Popular = 'Popular',
    Rock = 'Rock',
    Jazz = 'Jazz',
    Country = 'Country',
    Electronic = 'Electronic'
} 

export interface IMainFeaturedPostProps {
    post: {
      description: string;
      image: string;
      imageText: string;
      title: string;
    };
  }