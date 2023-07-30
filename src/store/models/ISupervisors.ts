export interface ISupervisor {
    id: number;
    lang: string;
    firstName: string;
    lastName: string;
    company: string;
    bio: string

}


export interface ISupervisors{
    id: number;
    totalCount: number;
    list: Array<ISupervisor>;
}
