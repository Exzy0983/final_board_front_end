<!-- src/views/BoardSave.vue -->
<template>
  <div class="save-container">
    <form @submit.prevent="save" class="board-form">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" v-model="boardTitle" id="title">
      </div>
      <div class="form-group">
        <label for="writer">작성자</label>
        <input type="text" v-model="boardWriter" id="writer">
      </div>
      <div class="form-group">
        <label for="pass">비밀번호</label>
        <input type="text" v-model="boardPass" id="pass">
      </div>
      <div class="form-group">
        <label for="contents">내용</label>
        <textarea v-model="boardContents" id="contents" cols="30" rows="10"></textarea>
      </div>
      <input type="submit" value="작성">
    </form>
  </div>
</template>

<script>
import { boardApi } from '@/services/boardApi'

export default {
  name: 'BoardSave',
  data() {
    return {
      boardTitle: '',
      boardWriter: '',
      boardPass: '',
      boardContents: ''
    }
  },
  methods: {
    async save() {
      const boardData = {
        boardTitle: this.boardTitle,
        boardWriter: this.boardWriter,
        boardPass: this.boardPass,
        boardContents: this.boardContents
      }

      await boardApi.createBoard(boardData)
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped>
.save-container {
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 40px;
}

.board-form {
  width: 100%;
  max-width: 500px;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>