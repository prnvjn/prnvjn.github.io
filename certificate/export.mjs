import { cp, rm } from 'node:fs/promises';

const destination = new URL('../artifacts/ai-literacy/', import.meta.url);
const source = new URL('./out/', import.meta.url);

await rm(destination, { recursive: true, force: true });
await cp(source, destination, { recursive: true });
