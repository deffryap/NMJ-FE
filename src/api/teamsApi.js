import axiosClient from './axiosClient';

export const getTeams = () => axiosClient.get('/teams');
export const createTeam = (data) => axiosClient.post('/teams', data);
export const getTeamById = (id) => axiosClient.get(`/teams/${id}`);
export const updateTeam = (id, data) => axiosClient.put(`/teams/${id}`, data);
export const deleteTeam = (id) => axiosClient.delete(`/teams/${id}`); 