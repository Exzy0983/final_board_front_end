<!-- src/views/BoardDetail.vue -->
<template>
  <div class="detail-container">
    <table>
      <tbody>
      <tr>
        <th>id</th>
        <td>{{ board.id }}</td>
      </tr>
      <tr>
        <th>title</th>
        <td>{{ board.boardTitle }}</td>
      </tr>
      <tr>
        <th>writer</th>
        <td>{{ board.boardWriter }}</td>
      </tr>
      <tr>
        <th>date</th>
        <td>{{ board.createdAt }}</td>
      </tr>
      <tr>
        <th>hits</th>
        <td>{{ board.boardHits }}</td>
      </tr>
      <tr>
        <th>contents</th>
        <td>{{ board.boardContents }}</td>
      </tr>
      </tbody>
    </table>

    <button @click="listReq">목록</button>
    <button @click="updateReq">수정</button>
    <button @click="deleteReq">삭제</button>
  </div>
</template>

<script>
import { boardApi } from '@/services/boardApi'

export default {
  name: 'BoardDetail',
  props: ['id'],
  data() {
    return {
      board: {}
    }
  },
  async created() {
    const response = await boardApi.getBoardById(this.id)
    this.board = response.data
  },
  methods: {
    listReq() {
      this.$router.push('/list')
    },
    updateReq() {
      this.$router.push(`/update/${this.board.id}`)
    },
    async deleteReq() {
      await boardApi.deleteBoard(this.board.id)
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped>
.detail-container {
  max-width: 700px;
  margin: 40px auto;
  background-color: #f9fdf9;
  color: #333;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  background: white;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 30px;
}

th, td {
  padding: 14px 12px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  vertical-align: top;
  text-align: left;
}

th:last-child, td:last-child {
  border-right: none;
}

th {
  background-color: #4CAF50;
  color: white;
  font-weight: 600;
  width: 130px;
}

tr:last-child td {
  border-bottom: none;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 12px 22px;
  margin-right: 10px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}
</style>