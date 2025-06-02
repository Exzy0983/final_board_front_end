<!-- src/views/Home.vue -->
<template>
  <div class="home-container">
    <h1>Hello Spring Boot!</h1>
    <router-link to="/save" class="write-link">✍️ 새로운 글 쓰기</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
}

.write-link {
  display: inline-block;
  text-decoration: none;
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.write-link:hover {
  background-color: #45a049;
}
</style>