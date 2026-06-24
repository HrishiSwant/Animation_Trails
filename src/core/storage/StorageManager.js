import STORAGE_VERSION from "./StorageVersion";

export default class StorageManager {

    static save(key, data) {

        try {

            const payload = {

                version: STORAGE_VERSION,

                updatedAt: new Date().toISOString(),

                data,

            };

            localStorage.setItem(

                key,

                JSON.stringify(payload)

            );

            return true;

        } catch (error) {

            console.error(

                "[StorageManager] Save Failed",

                error

            );

            return false;

        }

    }

    static load(key, fallback = null) {

        try {

            const raw = localStorage.getItem(key);

            if (!raw) {

                return fallback;

            }

            const payload = JSON.parse(raw);

            if (!payload.version) {

                return fallback;

            }

            return payload.data;

        } catch (error) {

            console.error(

                "[StorageManager] Load Failed",

                error

            );

            return fallback;

        }

    }

    static exists(key) {

        return localStorage.getItem(key) !== null;

    }

    static remove(key) {

        localStorage.removeItem(key);

    }

    static clear() {

        Object.keys(localStorage)

            .filter(key => key.startsWith("hrishi-studio"))

            .forEach(key => localStorage.removeItem(key));

    }

}
