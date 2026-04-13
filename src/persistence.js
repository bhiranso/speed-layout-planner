export function makePlaySnapshot({ players, arrowStrokes, heightBaseline, bodyFatNormal }) {
  return {
    players: players.map(g => ({
      team: g.userData.team,
      weapon: g.userData.weapon,
      playerName: g.userData.playerName || '',
      stance: g.userData.stance || 'standing',
      faceIndex: g.userData.faceIndex ?? 0,
      playerHeight: g.userData.playerHeight ?? heightBaseline,
      playerWidth: g.userData.playerWidth ?? bodyFatNormal,
      rotY: g.rotation.y,
      x: g.position.x,
      z: g.position.z,
    })),
    arrows: arrowStrokes.map(s => ({ ...s })),
  };
}

export function makeStateSnapshot({
  activeFieldId,
  fieldWidth,
  fieldLength,
  placed,
  players,
  arrowStrokes,
  plays,
  playCount,
  activePlay,
  heightBaseline,
  bodyFatNormal,
}) {
  return {
    version: 2,
    fieldId: activeFieldId,
    fieldW: fieldWidth,
    fieldL: fieldLength,
    placed: placed.map(g => ({
      type: g.userData.bunker.id,
      label: g.userData.bunker.label,
      overrideColor: g.userData.overrideColor || null,
      x: g.position.x,
      z: g.position.z,
      rotY: g.rotation.y,
      scaleX: g.scale.x,
      scaleZ: g.scale.z,
    })),
    players: players.map(g => ({
      team: g.userData.team,
      weapon: g.userData.weapon,
      playerName: g.userData.playerName || '',
      stance: g.userData.stance || 'standing',
      faceIndex: g.userData.faceIndex ?? 0,
      playerHeight: g.userData.playerHeight ?? heightBaseline,
      playerWidth: g.userData.playerWidth ?? bodyFatNormal,
      rotY: g.rotation.y,
      x: g.position.x,
      z: g.position.z,
    })),
    arrows: arrowStrokes.map(s => ({ ...s })),
    plays,
    playCount,
    activePlay,
  };
}
