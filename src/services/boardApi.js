// src/services/boardApi.js
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8081/api'
})

export const boardApi = {
    getAllBoards() {
        return api.get('/board')
    },

    getBoardById(id) {
        return api.get(`/board/${id}`)
    },

    getBoardForEdit(id) {
        return api.get(`/board/${id}/edit`)
    },

    createBoard(boardData) {
        return api.post('/board', boardData)
    },

    updateBoard(id, boardData) {
        return api.put(`/board/${id}`, boardData)
    },

    deleteBoard(id) {
        return api.delete(`/board/${id}`)
    }
}