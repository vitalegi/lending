<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> {{ $t('siteName') }} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();

const linksList: EssentialLinkProps[] = [
  {
    title: i18n.t('navbar.fixedLending.title'),
    caption: i18n.t('navbar.fixedLending.caption'),
    icon: 'school',
    route: '/fixed',
  },
  {
    title: i18n.t('navbar.aboutMe.title'),
    caption: i18n.t('navbar.aboutMe.caption'),
    icon: 'contact_page',
    route: '/about',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
