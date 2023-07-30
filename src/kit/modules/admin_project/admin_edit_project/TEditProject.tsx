import {ICreateProjectTrDtos} from '../TCreateProject';

export type TEditProject = {
    facebook: string;
    beginDate: string;
    endDate: string;
    createProjectTrDtos: ICreateProjectTrDtos[]
}

export type TGetProjectById = {
    facebook:string;
    id: number;
    beginDate: string;
    endDate: string;
    lang: string;
    name: string;
    goal: string;
    result: string;
}