import ModelService from '@/contracts/ModelService'
import { axios } from '@/plugins/axios'
import { type AxiosResponse } from 'axios'
import type { ToDoItem } from '@/types/ToDoItem'
import type DataResponse from '@/types/DataResponse'
import type PaginatedResponse from '@/types/PaginatedResponse'

export default class TodoService extends ModelService<ToDoItem> {
  index (page: number, filters: string, perPage: number | undefined): Promise<AxiosResponse<PaginatedResponse<ToDoItem>>> {
    return axios.get(`to-do-item?page=${page}&filters=${filters}&per_page=${perPage}`)
  }

  async show (id: number): Promise<AxiosResponse<DataResponse<ToDoItem>>> {
    return axios.get(`to-do-item/${id}`)
  }

  async store (model: ToDoItem): Promise<AxiosResponse<DataResponse<ToDoItem>>> {
    return axios.post(`to-do-item`, { data: model })
  }

  async update (id: number, model: ToDoItem): Promise<AxiosResponse<DataResponse<ToDoItem>>> {
    return axios.put(`to-do-item/${id}`, { data: model })
  }

  async destroy (model: ToDoItem): Promise<AxiosResponse> {
    return axios.delete(`to-do-item`, { data: model })
  }
}
