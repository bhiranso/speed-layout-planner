# Speedsoft Layout Planner

A browser-based tool for planning speedsoft and airsoft game strategies. Visualize bunker placements, player positions, and movement paths on interactive 3D fields.

## Features

- **3D Field Visualization** - Interactive Three.js-powered fields with perspective views
- **Bunker System** - Drag-and-drop bunker placements with customizable names and colors
- **Player Markers** - Place players on the field with team colors (Red/Blue) and weapon types
- **Arrow Drawing** - Draw movement and shot arrows with multiple colors, sizes, and styles
- **Playbook** - Save up to 9 different plays per field with easy switching
- **Multiple Fields** - Support for different field layouts (Project N1, Snake Run, etc.)
- **Export/Import** - Save and load your layouts as JSON files
- **Mirror Mode** - Automatically mirror bunker placements for symmetrical fields
- **Mobile Support** - Responsive design with touch controls for tablets and phones
- **FPS Walk Mode** - Explore your layout in first-person view

## Controls

### Desktop
| Action | Control |
|--------|---------|
| Select bunker/player | Click |
| Move bunker/player | Drag |
| Rotate CW/CCW | R / E keys |
| Box-select | Drag empty space |
| Delete selected | Delete / Backspace |
| Rename | Double-click |
| Context menu | Right-click |

### Mobile
| Action | Control |
|--------|---------|
| Select | Tap |
| Move | Drag |
| Open bunker panel | Hamburger menu (bottom-left) |
| Close panel | Tap X (top-right) or tap field |

## Getting Started

1. Open `index.html` in any modern browser
2. Select a field from the dropdown menu
3. Drag bunkers from the sidebar onto the field
4. Use Player mode to place player markers
5. Use Arrow mode to draw movement paths
6. Save your plays using the Playbook slots

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires WebGL support.

## Technology

- **Three.js** - 3D rendering
- **Vanilla JavaScript** - No framework dependencies
- **HTML5 Canvas** - Arrow drawing layer
- **LocalStorage** - Auto-saves playbook data

## License

MIT License
