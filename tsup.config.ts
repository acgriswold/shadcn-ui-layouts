import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    entry: [
        "src/index.ts",
        "style.css"
    ],

    dts: {
        entry: [
            "src/index.ts",
        ]
    },
    outDir: "dist",
    format: ["esm", "cjs"],
    name: "shadcn-ui-layouts",
    splitting: true,
    outExtension({ format }) {
        return {
            js: `.${format}.js`,
        }
    },
    sourcemap: false,
    clean: true,

    target: ['es2020'],

    minify: !options.watch
}));