<template>
  <main class="main">
    <section style="margin-top: 50px; margin-bottom: 100px;">
      <div class="container">
        <h1 style="font-family: 'mak', serif !important; font-size: 48px; color: #1F1E1E; margin-bottom: 40px;">Контакты</h1>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px;">
          <div style="background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <h3 style="font-family: 'mak', serif; font-size: 24px; color: #1F1E1E; margin-top: 0;">Наш адрес</h3>
            <p style="color: #555; margin-bottom: 30px; font-size: 18px;">г. Санкт-Петербург, Барочная улица, 6с1</p>
            
            <h3 style="font-family: 'mak', serif; font-size: 24px; color: #1F1E1E;">Телефон</h3>
            <p style="color: #555; margin-bottom: 30px; font-size: 18px;">+7 (812) 123-45-67</p>
            
            <h3 style="font-family: 'mak', serif; font-size: 24px; color: #1F1E1E;">Почта</h3>
            <p style="color: #555; margin-bottom: 0; font-size: 18px;">hello@lenni-art.ru</p>
          </div>

          <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); height: 400px; background: #eee;">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e6a2b8e3a24b17f5f9e7d91e6b3b5b5&source=constructor" width="100%" height="100%" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>useHead({ title: 'Контакты | Lenni Art' })</script>
