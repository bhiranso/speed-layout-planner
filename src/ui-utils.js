export function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function svgIcon(id, c) {
  switch (id) {
    case 'snake':
    case 'mini_snake':
      return `<path d="M2 17 Q6 7 12 12 Q18 17 22 7" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
    case 'dorito':
    case 'mini_dorito':
      return `<polygon points="12,3 22,20 2,20" fill="${c}88" stroke="${c}" stroke-width="1.5"/>`;
    case 'can':
      return `<ellipse cx="12" cy="7" rx="6" ry="2.5" fill="${c}"/><rect x="6" y="7" width="12" height="11" fill="${c}99"/><ellipse cx="12" cy="18" rx="6" ry="2.5" fill="${c}cc"/>`;
    case 'fatboy':
      return `<ellipse cx="12" cy="7" rx="9" ry="3" fill="${c}"/><rect x="3" y="7" width="18" height="10" fill="${c}99"/><ellipse cx="12" cy="17" rx="9" ry="3" fill="${c}cc"/>`;
    case 'cake':
      return `<ellipse cx="12" cy="9" rx="10" ry="3.5" fill="${c}"/><rect x="2" y="9" width="20" height="6" fill="${c}99"/><ellipse cx="12" cy="15" rx="10" ry="3.5" fill="${c}cc"/>`;
    case 'brick':
      return `<rect x="2" y="9" width="20" height="7" rx="1" fill="${c}99" stroke="${c}" stroke-width="1.2"/>`;
    case 'tombstone':
      return `<rect x="8" y="3" width="8" height="18" rx="2.5" fill="${c}99" stroke="${c}" stroke-width="1.2"/>`;
    case 'sup_air':
      return `<rect x="3" y="4" width="18" height="16" rx="2" fill="${c}99" stroke="${c}" stroke-width="1.2"/>`;
    case 'tck':
      return `<rect x="2" y="4" width="20" height="6" rx="1" fill="${c}99" stroke="${c}" stroke-width="1"/><rect x="9" y="10" width="6" height="10" rx="1" fill="${c}77" stroke="${c}" stroke-width="1"/>`;
    case 'corner':
      return `<path d="M3 20 L3 5 L9 5 L9 14 L21 14 L21 20 Z" fill="${c}88" stroke="${c}" stroke-width="1.2"/>`;
    case 'x_bunker':
      return `<path d="M10 2 L14 2 L14 10 L22 10 L22 14 L14 14 L14 22 L10 22 L10 14 L2 14 L2 10 L10 10 Z" fill="${c}88" stroke="${c}" stroke-width="1"/>`;
    default:
      return `<rect x="4" y="4" width="16" height="16" fill="${c}"/>`;
  }
}
