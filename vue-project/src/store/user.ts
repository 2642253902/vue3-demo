import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
    actions: {
        changeUsername(value: string) {
            if (value && value.length < 10) {
                this.username += value;
            }

        }
    },
    getters: {
        getUsername(): string {
            return this.username.toUpperCase();
        }
    },
    state() {
        return {
            username: '--'
        }
    }
},
)