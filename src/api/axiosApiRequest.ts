import axios from "axios";
import {TGetTeam} from "../kit/modules/admin_our_team/TCreateTeammate";
import {IGetMentor} from "../kit/modules/admin_mentors/TCreateMentors" 
import { TGetPartners } from "../kit/modules/admin_partners/TCreatePartner";
import { IGetSupervisor } from "../kit/modules/admin_supervisors/TCreateSupervisor";
import { TGetNews } from "../kit/modules/admin_news/TCreateNews";
import { TGetProject } from "../kit/modules/admin_project/TCreateProject";
import { TGetReport } from "../kit/modules/admin_ reports/TCreateReports";
import { TGetTeamById} from "../kit/modules/admin_our_team/admin_edit_team/TEditTeam";
import { TGetNewsById} from "../kit/modules/admin_news/admin_edit_news/TEditNews";
import { TGetPartnerById } from "../kit/modules/admin_partners/admin_edit_partners/TEditPartners";
import { TGetProjectById } from "../kit/modules/admin_project/admin_edit_project/TEditProject";
import { TGetSupervisorById } from "../kit/modules/admin_supervisors/admin_edit_supervisors/TEditSupervisor";
import { TGetReportById } from "../kit/modules/admin_ reports/admin_edit_reports/TEditReports";
import { IGetMentorSkillIds } from "../kit/modules/admin_mentors/admin_mentor_skills/TCreateSkills";
import { TGetMentorById } from "../kit/modules/admin_mentors/admin_edit_mentor/TEditMentor";
import { path } from "./ApiRequest";
export type TAuth = {
    username: string;
    password: string;
}

const axiosAuth = axios.create({
    withCredentials: true,
})

export const postAuthData = async (values: { username: string, password: string }) =>
    // tslint:disable-next-line:no-console
    await axiosAuth.post<TAuth>(`/api/auth/login`, values).then(response => console.log(response));

export const sendLogout = async () => await axiosAuth.post(`/api/auth/logout`).then((response) => response.data);

//Team
export const createTeamMember = async (payload: FormData) => await axiosAuth.post(`/api/admin/team_member/create`, payload)
    .then((response) => console.log(response));

export const deleteMember = async (id: number) => await axios.delete(`/api/admin/team_member/${id}`).then((response) => response.data)

export const getTeamMembers = async () => await axios.get<TGetTeam>(`/public-api/RUS/team_members`);
export const getTeamMemberById = async (id: string) => await axios.get<TGetTeamById>(`/public-api/RUS/team_member/${id}`);
// tslint:disable-next-line:no-shadowed-variable
export const editTeamMember = async (id: string, payload: FormData) => await axios.put(`/api/admin/team_member/${id}`, payload).then((res) => res.data);
// Mentor
export const createMentor  = async (payload: FormData) => await axiosAuth.post(`/public-api/mentor/create`, payload)
    .then((response) => console.log(response));

export const deleteMentor = async (id: number) => await axios.delete(`/api/admin/mentor/${id}`).then((response) => response.data)

export const getMentor= async () => await axios.get<IGetMentor>(`/public-api/RUS/mentors`);

export const getMentorById = async (id: string) => await axios.get<TGetMentorById>(`/public-api/RUS/mentor/${id}`);
// tslint:disable-next-line:no-shadowed-variable
export const editMentor = async (id: string, payload: FormData) => await axios.put(`/public-api/mentor/${id}`, payload).then((res) => res.data);

//MentorSkills
export const createMentorSkills  = async (payload: FormData) => await axiosAuth.post(`${path}/public-api/skill/create`, payload)
    .then((response) => console.log(response));

export const deleteMentorSkills = async (id: number) => await axios.delete(`/api/admin/skill/${id}`).then((response) => response.data)

export const getMentorSkills= async () => await axios.get<IGetMentorSkillIds>(`/public-api/skills`);

// Partner
export const createPartner  = async (payload: FormData) => await axiosAuth.post(`/api/admin/partner`, payload)
    .then((response) => console.log(response));

export const deletePartner = async (id: number) => await axios.delete(`/api/admin/partner/${id}`).then((response) => response.data)

export const getPartner = async () => await axios.get<TGetPartners>(`/public-api/RUS/partners`);

export const getPartnerById = async (id: string) => await axios.get<TGetPartnerById>(`/public-api/RUS/partner/${id}`);
export const editPartner = async (id: string, payload: FormData) => await axios.put(`/api/admin/partner/${id}`, payload).then((res) => res.data);

//supervisor
export const createSupervisor = async (payload: FormData) => await axiosAuth.post(`/api/admin/supervisor/create`,payload)
.then((response)=>console.log(response));

export const deleteSupervisor = async (id:number)=> await axios.delete(`/api/admin/supervisor/${id}`).then((response)=>response.data)

export const getSupervisors = async () => await axios.get<IGetSupervisor>(`/public-api/RUS/supervisors`);

export const getSupervisorById = async (id: string) => await axios.get<TGetSupervisorById>(`/public-api/RUS/supervisor/${id}`);

export const editSupervisor = async (id: string, payload: FormData) => await axios.put(`/api/admin/supervisor/${id}`, payload).then((res) => res.data);
//news
export const createNews = async (payload: FormData) => await axiosAuth.post(`/api/admin/news`, payload)
.then((response) => console.log(response));

export const deleteNews = async (id: number) => await axios.delete(`/api/admin/news/${id}`).then((response) => response.data)

export const getNews= async () => await axios.get<TGetNews>(`/public-api/RUS/news`);

export const getNewsById = async (id: string) => await axios.get<TGetNewsById>(`/public-api/RUS/news/${id}`);

export const editNews = async (id: string, payload: FormData) => await axios.put(`/api/admin/news/${id}`, payload).then((res) => res.data);

//project

export const createProject = async (payload : FormData) => await axiosAuth.post(`/api/admin/project/create`,payload)
.then((response)=> console.log(response));

export const deleteProject = async (id: number) => await axios.delete(`/api/admin/project/${id}`).then((response)=> response.data)

export const getProject = async () => await axios.get<TGetProject>(`/public-api/RUS/projects`);
export const getProjectById = async (id: string) => await axios.get<TGetProjectById>(`/public-api/RUS/project/${id}`);
// tslint:disable-next-line:no-shadowed-variable
export const editProject = async (id: string, payload: FormData) => await axios.put(`/api/admin/project/update/${id}`, payload).then((res) => res.data);

//REPORTS 
export const createReport = async (payload: FormData)=> await axiosAuth.post(`/api/admin/report/create`,payload)
.then((response)=> console.log(response));

export const deleteReport = async (id:number)=> await axios.delete(`/api/admin/report/${id}`).then((response)=>response.data)

export const getReport = async () => await axios.get<TGetReport>(`/public-api/RUS/reports`);

export const getReportById = async (id: string) => await axios.get<TGetReportById>(`/public-api/report/${id}/RUS/pdf`);
// tslint:disable-next-line:no-shadowed-variable
export const editReport = async (id: string, payload: FormData) => await axios.put(`/api/admin/report/${id}`, payload).then((res) => res.data);