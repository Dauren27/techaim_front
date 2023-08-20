import { TGetTeam } from "../kit/modules/admin_our_team/TCreateTeammate";
import { IGetMentor } from "../kit/modules/admin_mentors/TCreateMentors";
import { TGetPartners } from "../kit/modules/admin_partners/TCreatePartner";
import { IGetSupervisor } from "../kit/modules/admin_supervisors/TCreateSupervisor";
import { TGetNews } from "../kit/modules/admin_news/TCreateNews";
import { TGetProject } from "../kit/modules/admin_project/TCreateProject";
import { TGetReport } from "../kit/modules/admin_ reports/TCreateReports";
import { TGetTeamById } from "../kit/modules/admin_our_team/admin_edit_team/TEditTeam";
import { TGetNewsById } from "../kit/modules/admin_news/admin_edit_news/TEditNews";
import { TGetPartnerById } from "../kit/modules/admin_partners/admin_edit_partners/TEditPartners";
import { TGetProjectById } from "../kit/modules/admin_project/admin_edit_project/TEditProject";
import { TGetSupervisorById } from "../kit/modules/admin_supervisors/admin_edit_supervisors/TEditSupervisor";
import { TGetReportById } from "../kit/modules/admin_ reports/admin_edit_reports/TEditReports";
import { IGetMentorSkillIds } from "../kit/modules/admin_mentors/admin_mentor_skills/TCreateSkills";
import { TGetMentorById } from "../kit/modules/admin_mentors/admin_edit_mentor/TEditMentor";
import { $api } from ".";
export type TAuth = {
  username: string;
  password: string;
};

export const postAuthData = async (values: {
  username: string;
  password: string;
}) => await $api.post<TAuth>(`/api/auth/login`, values).then((response) => {});

export const sendLogout = async () =>
  await $api.post(`/api/auth/logout`).then((response) => response.data);

//Team
export const createTeamMember = async (payload: FormData) =>
  await $api
    .post(`/api/admin/team_member/create`, payload)
    .then((response) => console.log(response));

export const deleteMember = async (id: number) =>
  await $api
    .delete(`/api/admin/team_member/${id}`)
    .then((response) => response.data);

export const getTeamMembers = async () =>
  await $api.get<TGetTeam>(`/public-api/RUS/team_members`);
export const getTeamMemberById = async (id: string) =>
  await $api.get<TGetTeamById>(`/public-api/RUS/team_member/${id}`);
// tslint:disable-next-line:no-shadowed-variable
export const editTeamMember = async (id: string, payload: FormData) =>
  await $api
    .put(`/api/admin/team_member/${id}`, payload)
    .then((res) => res.data);
// Mentor
export const createMentor = async (payload: FormData) =>
  await $api
    .post(`/public-api/mentor/create`, payload)
    .then((response) => console.log(response));

export const deleteMentor = async (id: number) =>
  await $api
    .delete(`/api/admin/mentor/${id}`)
    .then((response) => response.data);

export const getMentor = async () =>
  await $api.get<IGetMentor>(`/public-api/RUS/mentors`);

export const getMentorById = async (id: string) =>
  await $api.get<TGetMentorById>(`/public-api/RUS/mentor/${id}`);
// tslint:disable-next-line:no-shadowed-variable
export const editMentor = async (id: string, payload: FormData) =>
  await $api.put(`/public-api/mentor/${id}`, payload).then((res) => res.data);

//MentorSkills
export const createMentorSkills = async (payload: FormData) =>
  await $api
    .post(`/public-api/skill/create`, payload)
    .then((response) => console.log(response));

export const deleteMentorSkills = async (id: number) =>
  await $api.delete(`/api/admin/skill/${id}`).then((response) => response.data);

export const getMentorSkills = async () =>
  await $api.get<IGetMentorSkillIds>(`/public-api/skills`);

// Partner
export const createPartner = async (payload: FormData) =>
  await $api
    .post(`/api/admin/partner`, payload)
    .then((response) => console.log(response));

export const deletePartner = async (id: number) =>
  await $api
    .delete(`/api/admin/partner/${id}`)
    .then((response) => response.data);

export const getPartner = async () =>
  await $api.get<TGetPartners>(`/public-api/RUS/partners`);

export const getPartnerById = async (id: string) =>
  await $api.get<TGetPartnerById>(`/public-api/RUS/partner/${id}`);
export const editPartner = async (id: string, payload: FormData) =>
  await $api.put(`/api/admin/partner/${id}`, payload).then((res) => res.data);

//supervisor
export const createSupervisor = async (payload: FormData) =>
  await $api
    .post(`/api/admin/supervisor/create`, payload)
    .then((response) => console.log(response));

export const deleteSupervisor = async (id: number) =>
  await $api
    .delete(`/api/admin/supervisor/${id}`)
    .then((response) => response.data);

export const getSupervisors = async () =>
  await $api.get<IGetSupervisor>(`/public-api/RUS/supervisors`);

export const getSupervisorById = async (id: string) =>
  await $api.get<TGetSupervisorById>(`/public-api/RUS/supervisor/${id}`);

export const editSupervisor = async (id: string, payload: FormData) =>
  await $api
    .put(`/api/admin/supervisor/${id}`, payload)
    .then((res) => res.data);
//news
export const createNews = async (payload: FormData) =>
  await $api
    .post(`/api/admin/news`, payload)
    .then((response) => console.log(response));

export const deleteNews = async (id: number) =>
  await $api.delete(`/api/admin/news/${id}`).then((response) => response.data);

export const getNews = async () =>
  await $api.get<TGetNews>(`/public-api/RUS/news`);

export const getNewsById = async (id: string) =>
  await $api.get<TGetNewsById>(`/public-api/RUS/news/${id}`);

export const editNews = async (id: string, payload: FormData) =>
  await $api.put(`/api/admin/news/${id}`, payload).then((res) => res.data);

//project

export const createProject = async (payload: FormData) =>
  await $api
    .post(`/api/admin/project/create`, payload)
    .then((response) => console.log(response));

export const deleteProject = async (id: number) =>
  await $api
    .delete(`/api/admin/project/${id}`)
    .then((response) => response.data);

export const getProject = async () =>
  await $api.get<TGetProject>(`/public-api/RUS/projects`);
export const getProjectById = async (id: string) =>
  await $api.get<TGetProjectById>(`/public-api/RUS/project/${id}`);
// tslint:disable-next-line:no-shadowed-variable
export const editProject = async (id: string, payload: FormData) =>
  await $api
    .put(`/api/admin/project/update/${id}`, payload)
    .then((res) => res.data);

//REPORTS
export const createReport = async (payload: FormData) =>
  await $api
    .post(`/api/admin/report/create`, payload)
    .then((response) => console.log(response));

export const deleteReport = async (id: number) =>
  await $api
    .delete(`/api/admin/report/${id}`)
    .then((response) => response.data);

export const getReport = async () =>
  await $api.get<TGetReport>(`/public-api/RUS/reports`);

export const getReportById = async (id: string) =>
  await $api.get<TGetReportById>(`/public-api/report/${id}/RUS/pdf`);
// tslint:disable-next-line:no-shadowed-variable
export const editReport = async (id: string, payload: FormData) =>
  await $api.put(`/api/admin/report/${id}`, payload).then((res) => res.data);
