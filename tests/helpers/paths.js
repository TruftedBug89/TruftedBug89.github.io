import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'data');
const ROOT_DIR = path.join(__dirname, '..');

export function getDataDir() { return DATA_DIR; }
export function getRootDir() { return ROOT_DIR; }
