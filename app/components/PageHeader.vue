<template>
  <header class="page-header">
    <div class="page-header__container">
      <NuxtLink to="/" class="page-header__logo">
        <svg class="page-header__logo-icon" width="202" height="147">
          <use xlink:href="/svg-sprite/logo.svg#logo"></use>
        </svg>
      </NuxtLink>

      <!-- Нативная мобильная кнопка из styles.css -->
      <button class="mobile-menu-btn" :class="{ 'active': isMobileMenuOpen }" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Нативное меню из styles.css -->
      <nav class="page-header__nav" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <NuxtLink class="page-header__nav-link" to="/events" @click="isMobileMenuOpen = false">Мероприятия</NuxtLink>
        <NuxtLink class="page-header__nav-link" to="/blog" @click="isMobileMenuOpen = false">Блог</NuxtLink>
        <NuxtLink class="page-header__nav-link" to="/about" @click="isMobileMenuOpen = false">О нас</NuxtLink>
        <NuxtLink class="page-header__nav-link" to="/contacts" @click="isMobileMenuOpen = false">Контакты</NuxtLink>
      </nav>

      <div class="page-header__right-block">
        <button class="page-header__btn btn" type="button" @click="modalStore.openModal">Оставить заявку</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useModalStore } from '../stores/modal'

const modalStore = useModalStore()
const isMobileMenuOpen = ref(false)
</script>

<style scoped>
/* Пусто! Мы полностью полагаемся на ваш идеальный styles.css */
</style>
