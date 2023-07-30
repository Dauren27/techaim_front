export type TNews = {
    teamMemberId:number;
    readTime: number;
    createUpdateNewsTrDtos: TCreateUpdateNewsTrDtos[];
}

export type TCreateUpdateNewsTrDtos = {
    title: string;
    lang: string;
    shortDescription: string;
    fullDescription: string;
    teamMemberId:number;
}
  

export type TNewsList = {
    id: number;
    lang: string;
    title: string;
    readTime: number;
    teamMemberId: number;
    shortDescription: string;
    fullDescription: string;
}

export type TGetNews = {
    totalCount:number;
    list: TNewsList[]
}
