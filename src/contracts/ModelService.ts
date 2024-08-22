import type DataResponse from '@/types/DataResponse'
import type { AxiosResponse } from 'axios'

export default abstract class ModelService<T> {
  abstract index(): Promise<AxiosResponse<DataResponse<T[]>>>;
  abstract show(id: number): Promise<AxiosResponse<DataResponse<T>>>;
  abstract store(model: T): Promise<AxiosResponse<DataResponse<T>>>;
  abstract update(id: number, model: T): Promise<AxiosResponse<DataResponse<T>>>;
  abstract destroy(model: T): Promise<AxiosResponse>;
}
