export interface LastReadItem {
  surahNumber: number;
  surahName: string;
  surahArabic: string;
  ayahNumber: number;
  totalAyah: number;
  translation: string;
  updatedAt: string;
}

export const LAST_READ_STORAGE_KEY = 'tarbiyah_last_read';

export function getLastRead(): LastReadItem | null {
  try {
    const data = localStorage.getItem(LAST_READ_STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function saveLastRead(item: LastReadItem) {
  try {
    localStorage.setItem(LAST_READ_STORAGE_KEY, JSON.stringify(item));
    window.dispatchEvent(new Event('tarbiyah_last_read_updated'));
  } catch (e) {
    console.error('Error saving last read', e);
  }
}

export function clearLastRead() {
  try {
    localStorage.removeItem(LAST_READ_STORAGE_KEY);
    window.dispatchEvent(new Event('tarbiyah_last_read_updated'));
  } catch (e) {
    console.error('Error clearing last read', e);
  }
}
