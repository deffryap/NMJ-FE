import axiosClient from './axiosClient';

export const getHeroSections = () => axiosClient.get('/hero-sections');
export const createHeroSection = (data) => axiosClient.post('/hero-sections', data);
export const getHeroSectionById = (id) => axiosClient.get(`/hero-sections/${id}`);
export const updateHeroSection = (id, data) => axiosClient.put(`/hero-sections/${id}`, data);
export const deleteHeroSection = (id) => axiosClient.delete(`/hero-sections/${id}`); 