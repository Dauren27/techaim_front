export type IMentor = {
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

export type ICreateMentorTrDtos= {
    lang: string;
    firstName: string;
    lastName: string;
    position: string;
    competences: string;
    bio: string
}


export type IMentorList = {
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
    export type IGetMentor = {
    totalcount: number;
    list: IMentorList[];
}



