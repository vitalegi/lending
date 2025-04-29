<template>
  <div v-if="show">
    <q-banner inline-actions rounded class="q-pa-xs q-ma-xs text-center text-white bg-primary">
      {{ $t('footer.text') }}
      <a target="_blank" href="https://www.instagram.com/orione.russianblue">
        <q-avatar size="22px">
          <img src="/social/instagram.svg" />
        </q-avatar>
      </a>
      <template v-slot:action>
        <q-btn flat round text-color="white" icon="close" @click="sponsorStore.disable()" />
      </template>
    </q-banner>
  </div>
</template>

<script setup lang="ts">
import { useSponsorStore } from 'src/stores/sponsor-store';
import { computed } from 'vue';

const sponsorStore = useSponsorStore();

const show = computed(() => sponsorStore.show);
</script>
