/// <reference types="./@types/svg" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string,
    readonly VITE_APP_FIREBASE_API_KEY?: string,
    readonly VITE_APP_FIREBASE_AUTH_DOMAIN?: string,
    readonly VITE_APP_FIREBASE_PROJECT_ID?: string,
    readonly VITE_APP_FIREBASE_STORAGE_BUCKET?: string,
    readonly VITE_APP_FIREBASE_MESSAGING_SENDER?: string,
    readonly VITE_APP_FIREBASE_ID?: string,
    readonly VITE_APP_FIREBASE_MEASUREMENT_ID?: string


}

