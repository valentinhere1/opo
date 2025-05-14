export const StatusBar = ({ stats, zoomLevel, onZoomChange }) => {
  return (
    <div className="status-bar">
      <div className="status-section">
        <span>Líneas: {stats.lines}</span>
        <span>Palabras: {stats.words}</span>
        <span>Caracteres: {stats.characters}</span>
      </div>
      
      <div className="zoom-controls">
        <button onClick={() => onZoomChange(Math.max(50, zoomLevel - 10))}>
          -
        </button>
        <span>{zoomLevel}%</span>
        <button onClick={() => onZoomChange(Math.min(150, zoomLevel + 10))}>
          +
        </button>
      </div>
    </div>
  );
};