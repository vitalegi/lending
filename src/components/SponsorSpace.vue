<template>
  <div class="q-pa-xs text-center box">
    <div class="full-width">
      {{ $t('footer.text') }}
      <a target="_blank" href="https://www.instagram.com/orione.russianblue">
        <q-avatar size="22px">
          <img src="/social/instagram.svg" />
        </q-avatar>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box {
  background: #1e8fff;
  color: white;
}
</style>
