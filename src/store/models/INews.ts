export interface INews {
  id: number;
  lang: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  teamMemberNameDto: ITeamMemberNameDTO;
  createDate:string;
}

interface ITeamMemberNameDTO {
  lang: string;
  firstName: string;
  lastName: string;
  position: string;
  competences: string;
  bio: string;
}

export interface IAllNews {
  id: number;
  totalCount: number;
  list: Array<INews>;
}
