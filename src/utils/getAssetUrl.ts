export function getAssetUrl(filename: string): string {
  // This creates a URL relative to the `assets/images` folder.
  // Vite will correctly handle this.
  return new URL(`../assets/images/${filename}`, import.meta.url).href;
}
