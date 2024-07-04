import {HttpAdapter} from './http.adapter';
import axios from 'axios';

interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });
  }
  async get<T>(
    url: String,
    options?: Record<string, unknown> | undefined,
  ): Promise<T> {
    try {
      const {data} = await axios.get<T>(url, options);

      return data;
    } catch (error) {
      throw new Error(`Error fetching get: ${url}`);
    }
  }
}
