<template>
  <q-page class="full-width full-height text-center">
    <div class="q-pa-md row justify-center items-start">
      <h1 class="col-12">{{ $t('aboutMe.title') }}</h1>
      <div class="col-12 q-pa-xs text-subtitle1">{{ $t('aboutMe.subtitle') }}</div>
      <div class="col-12 row q-gutter-md justify-center">
        <AboutMeCard
          :name="$t('aboutMe.pinco.name')"
          :role="$t('aboutMe.pinco.role')"
          avatar="/team/princimicio.jpg"
          :social="[
            { icon: '/social/instagram.svg', href: 'https://www.instagram.com/orione.russianblue' },
          ]"
        />
        <AboutMeCard
          :name="$t('aboutMe.vitalegi.name')"
          :role="$t('aboutMe.vitalegi.role')"
          avatar="/team/vitalegi.jpg"
          :social="[
            { icon: '/social/github.svg', href: 'https://github.com/vitalegi' },
            {
              icon: '/social/instagram.svg',
              href: 'https://www.instagram.com/giorgio.bellavita.vitale',
            },
          ]"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import AboutMeCard from 'src/components/AboutMeCard.vue';
</script>

<style scoped lang="scss"></style>
