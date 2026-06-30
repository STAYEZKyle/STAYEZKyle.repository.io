<template>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; text-align: center; background: #DEDEDE; background-image: url(/images/noise.png);">
    <h1 style="font-family: 'mak', serif; font-size: 150px; color: #1F1E1E; margin: 0; line-height: 1;">404</h1>
    <p style="font-size: 24px; color: #555; margin-bottom: 40px; font-weight: 500;">Упс! Кажется, этой страницы не существует.</p>
    <button @click="handleError" class="btn btn--red" style="padding: 15px 35px; border-radius: 8px; border: none; font-size: 18px; cursor: pointer;">
      Вернуться на главную
    </button>
  </div>
</template>

<script setup>
// Функция очистки ошибки и возврата на главную
const handleError = () => clearError({ redirect: '/' })
useHead({ title: 'Страница не найдена | Lenni Art' })
</script>
