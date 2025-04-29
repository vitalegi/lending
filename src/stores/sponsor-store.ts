import { defineStore, acceptHMRUpdate } from 'pinia';

const SPONSOR_KEY = 'banner_hide';

export const useSponsorStore = defineStore('sponsor', {
  state: () => ({
    show: window.localStorage.getItem(SPONSOR_KEY) !== 'true',
  }),

  getters: {},

  actions: {
    disable() {
      window.localStorage.setItem(SPONSOR_KEY, 'true');
      this.show = false;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSponsorStore, import.meta.hot));
}
