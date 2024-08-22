import ModelService from '@/contracts/ModelService'
import { axios } from '@/plugins/axios'
import { type AxiosResponse } from 'axios'
import type { ToDoItem } from '@/types/ToDoItem'
import type DataResponse from '@/types/DataResponse'

export default class TodoService extends ModelService<ToDoItem> {
  index (): Promise<AxiosResponse<DataResponse<ToDoItem[]>>> {
    return axios.get(`/tasks`)
  }

  async show (id: number): Promise<AxiosResponse<DataResponse<ToDoItem>>> {
    return axios.get(`/tasks/${id}`)
  }

  async store (model: ToDoItem): Promise<AxiosResponse<DataResponse<ToDoItem>>> {
    return axios.post(`/tasks`, model)
  }

  async update (id: number, model: ToDoItem): Promise<AxiosResponse<DataResponse<ToDoItem>>> {
    return axios.put(`/tasks/${id}`, model)
  }

  async destroy (model: ToDoItem): Promise<AxiosResponse> {
    return axios.delete(`/tasks/${model.id}`)
  }
}
