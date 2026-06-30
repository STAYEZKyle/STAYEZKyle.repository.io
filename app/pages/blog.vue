<template>
  <main class="main">
    <section style="margin-top: 50px; margin-bottom: 100px;">
      <div class="container">
        <h1 style="font-family: 'mak', serif !important; font-size: 48px; color: #1F1E1E; margin-bottom: 40px;">Блог об искусстве</h1>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 30px;">
          
          <article style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <span style="font-size: 12px; color: #888; text-transform: uppercase;">Статья • 12 Мая</span>
            <h3 style="font-family: 'mak', serif; font-size: 24px; color: #1F1E1E; margin: 15px 0;">Как понимать современный супрематизм?</h3>
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">Краткий гид по главным галереям 21 века и разбор ключевых работ художников-авангардистов.</p>
            <button class="btn" style="padding: 10px 20px; background: #1F1E1E; color: white; border: none; border-radius: 6px; cursor: pointer;">Читать далее</button>
          </article>

          <article style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <span style="font-size: 12px; color: #888; text-transform: uppercase;">Интервью • 08 Июня</span>
            <h3 style="font-family: 'mak', serif; font-size: 24px; color: #1F1E1E; margin: 15px 0;">Закулисье подготовки выставок</h3>
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">Разговор с ведущим куратором арт-пространства Lenni Art о тонкостях организации экспозиций.</p>
            <button class="btn" style="padding: 10px 20px; background: #1F1E1E; color: white; border: none; border-radius: 6px; cursor: pointer;">Читать далее</button>
          </article>

        </div>
      </div>
    </section>
  </main>
</template>
<script setup>useHead({ title: 'Блог | Lenni Art' })</script>
