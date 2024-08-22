import ModelService from '@/contracts/ModelService'
import { axios } from '@/plugins/axios'
import { type AxiosResponse } from 'axios'
import type { Task } from '@/types/Task'
import type DataResponse from '@/types/DataResponse'

export default class TodoService extends ModelService<Task> {
  index (): Promise<AxiosResponse<DataResponse<Task[]>>> {
    return axios.get(`/tasks`)
  }

  async show (id: number): Promise<AxiosResponse<DataResponse<Task>>> {
    return axios.get(`/tasks/${id}`)
  }

  async store (model: Task): Promise<AxiosResponse<DataResponse<Task>>> {
    return axios.post(`/tasks`, model)
  }

  async update (id: number, model: Task): Promise<AxiosResponse<DataResponse<Task>>> {
    return axios.put(`/tasks/${id}`, model)
  }

  async destroy (model: Task): Promise<AxiosResponse> {
    return axios.delete(`/tasks/${model.id}`)
  }
}
