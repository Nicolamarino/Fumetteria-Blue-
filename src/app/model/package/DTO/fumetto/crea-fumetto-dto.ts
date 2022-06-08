

export class CreaFumettoDto {
  id: number;
  name: string;
  description: string;
  type: string;
  author: {
    id: number;
    name: string;
    surname: string;
  };
  category: {
    id:string;
    name:string;
    description:string;
  }
  photo: any;
}
