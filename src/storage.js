export const AUTOSAVE_KEY = 'speedlayout_autosave_v2';

export function slotKey(i) {
  return `speedlayout_slot_${i}`;
}

export function playKey(fieldId, i) {
  return `speedlayout_play_${fieldId}_${i}`;
}

export function playCountKey(fieldId) {
  return `speedlayout_play_count_${fieldId}`;
}

export function fieldSaveKey(fieldId) {
  return `speedlayout_field_${fieldId}`;
}
