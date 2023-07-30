export interface IForm {
    id: number;
    name: string;
    url: string;
  }
  
  export interface IForms {
    totalCount: number;
    list: Array<IForm>;
  }
  