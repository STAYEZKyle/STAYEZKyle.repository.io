<template>
  <main class="main">
    <div class="container" v-if="event" style="margin-top: 50px;">
      <NuxtLink to="/" style="color: #666; text-decoration: none; margin-bottom: 20px; display: inline-block;">← Вернуться на главную</NuxtLink>
      <h1 style="font-size: 42px; margin-bottom: 10px;">{{ event.title }}</h1>
      <p style="font-size: 18px; color: #555; margin-bottom: 30px;">{{ event.date }} • {{ event.type }}</p>
      <img :src="event.image" :alt="event.title" style="width: 100%; height: 500px; object-fit: cover; border-radius: 12px;">
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

// SSR-запрос для страницы конкретного мероприятия (Критерий 8)
const { data: event } = await useFetch(`/api/events/${route.params.id}`)

// SEO (Критерий 17)
useHead({
  title: event.value ? `${event.value.title} | Lenni Art` : 'Мероприятие'
})
</script>
