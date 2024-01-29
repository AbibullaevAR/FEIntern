import { defineStore } from 'pinia';
import { initStore } from '@/models/author';

const useAuthorStore = defineStore('author', initStore);

export default useAuthorStore;
