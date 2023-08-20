import { TCreateUpdateNewsTrDtos } from "../TCreateNews";
export type TEditNews = {
  teamMemberId: number;
  readTime: number;
  createUpdateNewsTrDtos: TCreateUpdateNewsTrDtos[];
};

export type TGetNewsById = {
  id: number;
  lang: string;
  title: string;
  readTime: number;
  teamMemberId?: number;
  shortDescription: string;
  fullDescription: string;
  teamMemberNameDto?: TTeamMemberNameDto;
};

export type TTeamMemberNameDto = {
  id: number;
  firstName: string;
  lastName: string;
  lang: string;
};
