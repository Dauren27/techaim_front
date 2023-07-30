import { ICreateSupervisorTrDtos } from '../TCreateSupervisor'

export type TEditSupervisor = {
    company: string;
    createSupervisorTrDtos: ICreateSupervisorTrDtos[]
}

export type TGetSupervisorById = {
    id: number;
    lang: string;
    firstName: string;
    lastName: string;
    company: string;
    bio: string;
}
