import axiosClient from './axiosClient';

export const getServices = () => axiosClient.get('/services');
export const createService = (data) => axiosClient.post('/services', data);
export const getServiceById = (id) => axiosClient.get(`/services/${id}`);
export const updateService = (id, data) => axiosClient.put(`/services/${id}`, data);
export const deleteService = (id) => axiosClient.delete(`/services/${id}`); 