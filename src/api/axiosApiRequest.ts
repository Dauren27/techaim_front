import { $api } from ".";
export type TAuth = {
  username: string;
  password: string;
};

export const postAuthData = async (values: {
  username: string;
  password: string;
}) => await $api.post(`/api/auth/login`, values).then((response) => {});

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
  await $api.get(`/public-api/RUS/team_members`);
export const getTeamMemberById = async (id: string) =>
  await $api.get(`/public-api/RUS/team_member/${id}`);
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

export const getMentor = async () => await $api.get(`/public-api/RUS/mentors`);

export const getMentorById = async (id: string) =>
  await $api.get(`/public-api/RUS/mentor/${id}`);
export const editMentor = async (id: string, payload: FormData) =>
  await $api.put(`/public-api/mentor/${id}`, payload).then((res) => res.data);

//MentorSkills
export const createMentorSkills = async (payload: FormData) =>
  await $api
    .post(`/public-api/skill/create`, payload)
    .then((response) => console.log(response));

export const deleteMentorSkills = async (id: number) =>
  await $api.delete(`/api/admin/skill/${id}`).then((response) => response.data);

export const getMentorSkills = async () => await $api.get(`/public-api/skills`);

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
  await $api.get(`/public-api/RUS/partners`);

export const getPartnerById = async (id: string) =>
  await $api.get(`/public-api/RUS/partner/${id}`);
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
  await $api.get(`/public-api/RUS/supervisors`);

export const getSupervisorById = async (id: string) =>
  await $api.get(`/public-api/RUS/supervisor/${id}`);

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

export const getNews = async () => await $api.get(`/public-api/RUS/news`);

export const getNewsById = async (id: string) =>
  await $api.get(`/public-api/RUS/news/${id}`);

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
  await $api.get(`/public-api/RUS/projects`);
export const getProjectById = async (id: string) =>
  await $api.get(`/public-api/RUS/project/${id}`);
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

export const getReport = async () => await $api.get(`/public-api/RUS/reports`);

export const getReportById = async (id: string) =>
  await $api.get(`/public-api/report/${id}/RUS/pdf`);
export const editReport = async (id: string, payload: FormData) =>
  await $api.put(`/api/admin/report/${id}`, payload).then((res) => res.data);
