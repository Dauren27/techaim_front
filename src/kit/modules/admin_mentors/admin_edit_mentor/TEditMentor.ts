import {ICreateMentorTrDtos} from '../TCreateMentors'

export type TEditMentor = {
    email: string;
    password: string;
    phone: number,
    facebook: string;
    twitter: string;
    linkedIn: string;
    createMentorTrDtos: ICreateMentorTrDtos[];
    mentorSkillIds: IMentorSkillIds[];
}
 
export type IMentorSkillIds = {
    id?:number
}

export type TGetMentorById = {
    id: number;
    email: string;
    password: string;
    phone: number,
    company: string;
    facebook: string;
    twitter: string;
    linkedIn: string;
    lang: string;
    mentorTrDto: {
        firstName: string;
        lastName: string;
        position: string;
        competences: string;
        bio: string
    }
}