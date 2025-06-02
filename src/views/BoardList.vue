<!-- src/views/BoardList.vue -->
<template>
  <div class="list-container">
    <h1>게시글 목록</h1>
    <router-link to="/save" class="btn-write">글쓰기</router-link>

    <table>
      <thead>
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성시간</th>
        <th>조회수</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="board in boardList" :key="board.id">
        <td>{{ board.id }}</td>
        <td>
          <router-link :to="`/board/${board.id}`">{{ board.boardTitle }}</router-link>
        </td>
        <td>{{ board.boardWriter }}</td>
        <td>{{ board.createdAt }}</td>
        <td>{{ board.boardHits }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { boardApi } from '@/services/boardApi'

export default {
  name: 'BoardList',
  data() {
    return {
      boardList: []
    }
  },
  async created() {
    const response = await boardApi.getAllBoards()
    this.boardList = response.data
  }
}
</script>

<style scoped>
.list-container {
  margin: 40px auto;
  max-width: 900px;
  background-color: #f9fdf9;
  color: #333;
}

h1 {
  color: #4CAF50;
  text-align: center;
  margin-bottom: 30px;
}

.btn-write {
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 18px;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-write:hover {
  background-color: #45a049;
}

table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 6px;
  overflow: hidden;
}

th, td {
  padding: 12px 10px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

th:last-child, td:last-child {
  border-right: none;
}

th {
  background-color: #4CAF50;
  color: white;
  text-align: left;
  font-weight: 600;
}

tr:hover {
  background-color: #f1f9f1;
}

a {
  color: #4CAF50;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>