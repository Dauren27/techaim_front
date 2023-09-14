import { NavItem, SceneItem } from "./common/scenes";
import MainScene from "./scenes/MainScene";
import ServicesScene from "./scenes/ServicesScene";
import CommunityScene from "./scenes/CommunityScene";
import ConatactScene from "./scenes/ContactScene";
import TeamScene from "./scenes/TeamScene";
import ProjectsScene from "./scenes/ProjectsScene";
import MentorsScene from "./scenes/MentorsScene";
import ProjectScene from "./scenes/ProjectScene";
import JoinTeamScene from "./scenes/JoinTeamScene";
import NewsScene from "./scenes/NewsScene";
import MentorScene from "./scenes/MentorScene";
import ReportsScene from "./scenes/ReportsScene";
import MainPageMission from "./kit/modules/main_page/mission";
import PartnersScene from "./scenes/PartnersScene";
import NewsDetailsScene from "./scenes/NewsDetailsPageScene";

export const SCENE_ITEMS_PUBLIC: SceneItem[] = [
  new SceneItem({
    sceneName: "MainScene",
    sceneComponent: MainScene,
    navigationItem: new NavItem({
      route: "/",
      link: "/",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "ServicesScene",
    sceneComponent: ServicesScene,
    navigationItem: new NavItem({
      route: "/services",
      link: "/services",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "MissionScene",
    sceneComponent: MainPageMission,
    navigationItem: new NavItem({
      route: "/mission",
      link: "/mission",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "CommunityScene",
    sceneComponent: CommunityScene,
    navigationItem: new NavItem({
      route: "/community",
      link: "/community",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "ConatactScene",
    sceneComponent: ConatactScene,
    navigationItem: new NavItem({
      route: "/contact",
      link: "/contact",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "TeamScene",
    sceneComponent: TeamScene,
    navigationItem: new NavItem({
      route: "/team",
      link: "/team",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "ProjectsScene",
    sceneComponent: ProjectsScene,
    navigationItem: new NavItem({
      route: "/projects",
      link: "/projects",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "MentorsScene",
    sceneComponent: MentorsScene,
    navigationItem: new NavItem({
      route: "/mentors",
      link: "/mentors",
    }),
  }),
  new SceneItem({
    sceneName: "MentorScene",
    sceneComponent: MentorScene,
    navigationItem: new NavItem({
      route: "/mentors/:id",
      link: "/mentors/:id",
    }),
  }),
  new SceneItem({
    sceneName: "ProjectScene",
    sceneComponent: ProjectScene,
    navigationItem: new NavItem({
      route: "/projects/:id",
      link: "/projects/:id",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "JoinTeamScene",
    sceneComponent: JoinTeamScene,
    navigationItem: new NavItem({
      route: "/join/team",
      link: "/join/team",
      exact: true,
    }),
  }),

  new SceneItem({
    sceneName: "NewsScene",
    sceneComponent: NewsScene,
    navigationItem: new NavItem({
      route: "/news",
      link: "/news",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "NewsDetailsScene",
    sceneComponent: NewsDetailsScene,
    navigationItem: new NavItem({
      route: "/news/details/:id",
      link: "/news/details/:id",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "ReportsScene",
    sceneComponent: ReportsScene,
    navigationItem: new NavItem({
      route: "/reports",
      link: "/reports",
      exact: true,
    }),
  }),
  new SceneItem({
    sceneName: "PartnersScene",
    sceneComponent: PartnersScene,
    navigationItem: new NavItem({
      route: "/partners",
      link: "/partners",
      exact: true,
    }),
  }),
];
