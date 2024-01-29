import { defineStore } from 'pinia';
import { initStore } from '@/models/location';

const useLocationStore = defineStore('location', initStore);

export default useLocationStore;
