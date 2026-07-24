# shadcnvue-playground

Aplicación consumidora para probar el registro de `shadcn-vue` como un proyecto real e independiente.

Los componentes y composables se copian dentro de `vue/src`; no se importan desde un paquete compilado. Durante el desarrollo local, desde `shadcn-vue`:

```bash
node scripts/add.mjs separator use-date styles --cwd ../shadcnvue-playground/vue
```

El instalador no sobrescribe archivos existentes salvo que se use `--force` explícitamente.

## Vue

```bash
cd vue
npm install
npm run dev
```