import { defineStore } from 'pinia';
import { initStore } from '@/models/location';

const useLocationStore = defineStore('author', initStore);

export default useLocationStore;
