export const path = process.env.REACT_APP_PUBLIC_API_PATH;
export default class ApiRequest {
  static formParamsString(params: { [key: string]: any } = {}) {
    return Object.keys(params)
      .map((key) => {
        return `${key}=${encodeURIComponent(params[key])}`;
      })
      .join('&');
  }

  static async get(url: string, params: { [key: string]: any } = {}) {
    const paramsStr = ApiRequest.formParamsString(params);

    return fetch(`${path}${url}?${paramsStr}`).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    });
  }
}
