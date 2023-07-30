export type ISupervisor = {
    company: string;
    createSupervisorTrDtos:ICreateSupervisorTrDtos[]
}
export type ICreateSupervisorTrDtos = {
    lang: string;
    firstName: string;
    lastName: string;
    bio: string
}


export type ISupervisorList = {
    id: number;
    lang: string;
    firstName: string;
    lastName: string;
    company: string;
    bio: string;
}

export type IGetSupervisor = {
    totalcount: number;
    list: ISupervisorList[];
}

