export type IMentorSkillIds = {
    name:string
}

export type IMentorSkillIdsList = {
    id: number;
    name:string;
}

export type IGetMentorSkillIds = {
    totalcount: number;
    list: IMentorSkillIdsList[]
}