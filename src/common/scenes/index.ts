export interface NavItemParams {
  route: string;
  link: string;
  exact?: boolean;
  children?: any;
}

export class NavItem {
  readonly route: string;
  readonly link: string;
  readonly exact: boolean;
  readonly children: any;

  constructor({ link, route, exact = true, children }: NavItemParams) {
    this.link = link;
    this.route = route;
    this.exact = exact;
    this.children = children;
  }
}

export interface SceneItemParams {
  sceneName: string;
  sceneComponent: any;
  navigationItem: NavItem;
}

export class SceneItem implements SceneItemParams {
  readonly sceneName: string;
  readonly sceneComponent: any;
  readonly navigationItem: NavItem;

  constructor({ sceneName, sceneComponent, navigationItem }: SceneItemParams) {
    this.sceneName = sceneName;
    this.sceneComponent = sceneComponent;
    this.navigationItem = navigationItem;
  }
}
