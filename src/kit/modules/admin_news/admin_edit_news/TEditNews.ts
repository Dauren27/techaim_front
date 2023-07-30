import {TCreateUpdateNewsTrDtos} from "../TCreateNews";
export type TEditNews = {
    teamMemberId:number;
    readTime: number;
    createUpdateNewsTrDtos: TCreateUpdateNewsTrDtos[];
}

export type TGetNewsById = {
    id: number;
    lang: string;
    title: string;
    readTime: number;
    teamMemberId: number;
    shortDescription: string;
    fullDescription: string;
}
