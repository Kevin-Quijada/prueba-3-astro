import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://Kevin-Quijada.github.io',/* aqui colocarias el nombre de tu cuenta*/
    base: '/prueba-3-astro',/* aqui colocarias el nombre de tu repositorio*/
    build: {
    assets: 'astro' /// muy importante
    }
    });
