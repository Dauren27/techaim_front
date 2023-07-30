import {NavItem, SceneItem} from './common/scenes';
import MainScene from './scenes/MainScene';
import ServicesScene from './scenes/ServicesScene';
import CommunityScene from './scenes/CommunityScene';
import ConatactScene from './scenes/ContactScene';
import TeamScene from './scenes/TeamScene';
import ProjectsScene from './scenes/ProjectsScene';
import MentorsScene from './scenes/MentorsScene';
import ProjectScene from './scenes/ProjectScene';
import ProfileEditScene from './scenes/ProfileEditScene';
import LoginScene from './scenes/LoginScene';
import SignInScene from './scenes/SignInScene';
import JoinTeamScene from './scenes/JoinTeamScene';
import NewsScene from './scenes/NewsScene';
import MentorScene from './scenes/MentorScene';
import ReportsScene from './scenes/ReportsScene';
import AdminScene from './scenes/AdminScene';
import AdminProjectScene from './scenes/AdminProjectScene';
import AdminReportsScene from './scenes/AdminReportsScene';
import AdminOurTeamScene from './scenes/AdminOurTeam';
import AdminPartnersScene from './scenes/AdminPartnersScene';
import AdminSupervisorsScene from './scenes/AdminSupervisorsScene';
import MainPageMission from './kit/modules/main_page/mission';
import PartnersScene from './scenes/PartnersScene'
import NewsDetailsScene from './scenes/NewsDetailsPageScene';
import AdminMentorsScene from './scenes/AdminMentorsScene';
import AdminMainPageScene from './scenes/AdminMainPage';
import AdminEditTeam from "./kit/modules/admin_our_team/admin_edit_team";
import AdminEditNews from './kit/modules/admin_news/admin_edit_news';
import AdminEditPartner from './kit/modules/admin_partners/admin_edit_partners';
import AdminEditSupervisor from './kit/modules/admin_supervisors/admin_edit_supervisors';
import AdminEditProject from './kit/modules/admin_project/admin_edit_project';
import AdminEditReport from './kit/modules/admin_ reports/admin_edit_reports';
import AdminMentorSkills from './kit/modules/admin_mentors/admin_mentor_skills';
import AdminEditMentor from './kit/modules/admin_mentors/admin_edit_mentor';

export const SCENE_ITEMS: SceneItem[] = [
        new SceneItem({
            sceneName: 'MainScene',
            sceneComponent: MainScene,
            navigationItem: new NavItem({
                route: '/',
                link: '/',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'ServicesScene',
            sceneComponent: ServicesScene,
            navigationItem: new NavItem({
                route: '/services',
                link: '/services',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'MissionScene',
            sceneComponent: MainPageMission,
            navigationItem: new NavItem({
                route: '/mission',
                link: '/mission',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'CommunityScene',
            sceneComponent: CommunityScene,
            navigationItem: new NavItem({
                route: '/community',
                link: '/community',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'ConatactScene',
            sceneComponent: ConatactScene,
            navigationItem: new NavItem({
                route: '/contact',
                link: '/contact',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'TeamScene',
            sceneComponent: TeamScene,
            navigationItem: new NavItem({
                route: '/team',
                link: '/team',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'ProjectsScene',
            sceneComponent: ProjectsScene,
            navigationItem: new NavItem({
                route: '/projects',
                link: '/projects',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'LoginScene',
            sceneComponent: LoginScene,
            navigationItem: new NavItem({
                route: '/login',
                link: '/login',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'MentorsScene',
            sceneComponent: MentorsScene,
            navigationItem: new NavItem({
                route: '/mentors',
                link: '/mentors',
            }),
        }),
        new SceneItem({
            sceneName: 'MentorScene',
            sceneComponent: MentorScene,
            navigationItem: new NavItem({
                route: '/mentors/:id',
                link: '/mentors/:id',
            }),
        }),
        new SceneItem({
            sceneName: 'ProjectScene',
            sceneComponent: ProjectScene,
            navigationItem: new NavItem({
                route: '/projects/:id',
                link: '/projects/:id',
                exact: true,
            }),
        }),

        new SceneItem({
            sceneName: 'SignInScene',
            sceneComponent: SignInScene,
            navigationItem: new NavItem({
                route: '/sign_in',
                link: '/sign_in',
                exact: true,
            }),
        }),

        new SceneItem({
            sceneName: 'JoinTeamScene',
            sceneComponent: JoinTeamScene,
            navigationItem: new NavItem({
                route: '/join/team',
                link: '/join/team',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'ProfileEditScene',
            sceneComponent: ProfileEditScene,
            navigationItem: new NavItem({
                route: '/edit',
                link: '/edit',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'LoginScene',
            sceneComponent: LoginScene,
            navigationItem: new NavItem({
                route: '/login',
                link: '/login',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'SignInScene',
            sceneComponent: SignInScene,
            navigationItem: new NavItem({
                route: '/sign_in',
                link: '/sign_in',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'NewsScene',
            sceneComponent: NewsScene,
            navigationItem: new NavItem({
                route: '/news',
                link: '/news',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'NewsDetailsScene',
            sceneComponent: NewsDetailsScene,
            navigationItem: new NavItem({
                route: '/news/details/:id',
                link: '/news/details/:id',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'ReportsScene',
            sceneComponent: ReportsScene,
            navigationItem: new NavItem({
                route: '/reports',
                link: '/reports',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'PartnersScene',
            sceneComponent: PartnersScene,
            navigationItem: new NavItem({
                route: '/partners',
                link: '/partners',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminNews',
            sceneComponent: AdminScene,
            navigationItem: new NavItem({
                route: '/admin/news',
                link: '/admin/news',
                exact: true,
            }),
        }),

        new SceneItem({
            sceneName: 'AdminProject',
            sceneComponent: AdminProjectScene,
            navigationItem: new NavItem({
                route: '/admin/project',
                link: '/admin/project',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminReports',
            sceneComponent: AdminReportsScene,
            navigationItem: new NavItem({
                route: '/admin/reports',
                link: '/admin/reports',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminOurTeam',
            sceneComponent: AdminOurTeamScene,
            navigationItem: new NavItem({
                route: '/admin/team',
                link: '/admin/team',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminPartners',
            sceneComponent: AdminPartnersScene,
            navigationItem: new NavItem({
                route: '/admin/partners',
                link: '/admin/partners',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminSupervisors',
            sceneComponent: AdminSupervisorsScene,
            navigationItem: new NavItem({
                route: '/admin/supervisors',
                link: '/admin/supervisors',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminMentors',
            sceneComponent: AdminMentorsScene,
            navigationItem: new NavItem({
                route: '/admin/mentor',
                link: '/admin/mentor',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminMentorSkills',
            sceneComponent: AdminMentorSkills,
            navigationItem: new NavItem({
                route: '/admin/mentor/skills',
                link: '/admin/mentor/skills',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminMainPage',
            sceneComponent: AdminMainPageScene,
            navigationItem: new NavItem({
                route: '/admin',
                link: '/admin',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminEditTeam',
            sceneComponent: AdminEditTeam,
            navigationItem: new NavItem({
                route: '/admin/edit/team/:id',
                link: '/admin',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminEditNews',
            sceneComponent: AdminEditNews,
            navigationItem: new NavItem({
                route: '/admin/edit/news/:id',
                link: '/admin',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminEditPartner',
            sceneComponent: AdminEditPartner,
            navigationItem: new NavItem({
                route: '/admin/edit/partner/:id',
                link: '/admin',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminEditSupervisor',
            sceneComponent: AdminEditSupervisor,
            navigationItem: new NavItem({
                route: '/admin/edit/supervisor/:id',
                link: '/admin',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminEditProject',
            sceneComponent: AdminEditProject,
            navigationItem: new NavItem({
                route: '/admin/edit/project/:id',
                link: '/admin',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminEditReport',
            sceneComponent: AdminEditReport,
            navigationItem: new NavItem({
                route: '/admin/edit/report/:id',
                link: '/admin',
                exact: true,
            }),
        }),
        new SceneItem({
            sceneName: 'AdminEditMentor',
            sceneComponent: AdminEditMentor,
            navigationItem: new NavItem({
                route: '/admin/edit/mentor/:id',
                link: '/admin',
                exact: true,
            }),
        })
       
    ];
