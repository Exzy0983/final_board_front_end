<!-- src/views/BoardUpdate.vue -->
<template>
  <div class="update-container">
    <h2>게시글 수정</h2>

    <form @submit.prevent="board_update" name="updateForm">
      <label for="writer">작성자</label>
      <input type="text" id="writer" v-model="board.boardWriter" readonly>

      <label for="title">제목</label>
      <input type="text" id="title" v-model="board.boardTitle">

      <label for="board-pass">비밀번호 확인</label>
      <input type="text" v-model="inputPassword" id="board-pass" placeholder="작성 시 입력한 비밀번호">

      <label for="contents">내용</label>
      <textarea id="contents" v-model="board.boardContents"></textarea>

      <input type="button" value="수정하기" @click="board_update">
    </form>
  </div>
</template>

<script>
import { boardApi } from '@/services/boardApi'

export default {
  name: 'BoardUpdate',
  props: ['id'],
  data() {
    return {
      board: {},
      inputPassword: ''
    }
  },
  async created() {
    const response = await boardApi.getBoardForEdit(this.id)
    this.board = response.data
  },
  methods: {
    async board_update() {
      const passDB = this.board.boardPass

      if (this.inputPassword === passDB) {
        await boardApi.updateBoard(this.board.id, this.board)
        this.$router.push(`/board/${this.board.id}`)
      } else {
        alert("비밀번호가 틀립니다!!")
      }
    }
  }
}
</script>

<style scoped>
.update-container {
  background-color: #f0fdf4;
  padding: 40px;
  min-height: 100vh;
}

h2 {
  text-align: center;
  color: #65a30d;
}

form {
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border: 2px solid #d9f99d;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

label {
  display: block;
  margin-top: 15px;
  font-weight: bold;
  color: #374151;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  box-sizing: border-box;
}

input[type="text"][readonly] {
  background-color: #f3f4f6;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

input[type="button"] {
  margin-top: 25px;
  width: 100%;
  padding: 12px;
  background-color: #bef264;
  color: #1e3a08;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

input[type="button"]:hover {
  background-color: #a3e635;
}
</style>