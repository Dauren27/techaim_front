export interface IPartner {
  id: number;
  lang: string;
  name: string;
  logo: string;
}

export interface IPartners {
  totalCount: number;
  list: Array<IPartner>;
}
