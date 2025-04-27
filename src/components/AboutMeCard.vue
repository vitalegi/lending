<template>
  <q-card>
    <q-card-section>
      <q-avatar size="150px">
        <img :src="avatar" />
      </q-avatar>
    </q-card-section>
    <q-card-section class="q-gutter-xs">
      <div class="name">{{ name }}</div>
      <div class="role">{{ role }}</div>
      <div class="q-gutter-sm social">
        <a v-for="entry of social" :key="entry.href" target="_blank" :href="entry.href">
          <q-avatar size="24px">
            <img :src="entry.icon" />
          </q-avatar>
        </a>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
export interface SocialLink {
  icon: string;
  href: string;
}

export interface Props {
  name: string;
  role: string;
  avatar: string;
  social: SocialLink[];
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.q-card {
  min-width: 300px;
}
.name {
  font-size: 1.6rem;
  font-weight: 300;
}
.role {
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.75rem;
}
.social {
  margin-top: 15px;
}
</style>
