export interface IProduit {
  id: number,
  name: string;
  reference: string;
  image?: string;
}

export interface ICatalogue {
  listeProduits: IProduit[];
}
