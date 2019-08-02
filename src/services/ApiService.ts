import axios, { AxiosInstance } from "axios";

export default class Services {
  
  service: AxiosInstance;
  
  constructor(api: string) {
    this.service = axios.create({
      baseURL: api,
      withCredentials: true
    });
  }

  get = async (endpoint: string, id?: string) => {
    const path: string = id ? `/${endpoint}/${id}` : `/${endpoint}`;
    return this.service.get(path).then((data: { data: Object }) => data.data);
  };

  post = async (endpoint: string, id?: string, data?: Object) => {
    const path: string = id ? `/${endpoint}/${id}` : `/${endpoint}`;
    return this.service
      .post(path, data ? data : null)
      .then((data: { data: Object }) => data.data);
  };

  put = async (endpoint: string, id?: string, data?: Object) => {
    const path: string = id ? `/${endpoint}/${id}` : `/${endpoint}`;
    return this.service
      .put(path, data ? data : null)
      .then((data: { data: Object }) => data.data);
  };

  del = async (endpoint: string, id?: string) => {
    const path: string = id ? `/${endpoint}/${id}` : `/${endpoint}`;
    return this.service
      .delete(path)
      .then((data: { data: Object }) => data.data);
  };
}
