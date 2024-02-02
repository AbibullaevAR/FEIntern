import { defineStore } from 'pinia';
import { initStore } from '@/models/painting';

const usePaintingStore = defineStore('painting', initStore);

export default usePaintingStore;
