const FileTree = ({ files, onSelectFile }) => {
  const renderTree = (items) => (
    items.map((item, index) => (
      <div key={index} className="file-item">
        {item.type === 'folder' ? (
          <>
            <FaFolder />
            <span>{item.name}</span>
            <div className="sub-folder">
              {renderTree(item.items)}
            </div>
          </>
        ) : (
          <>
            <FaFile />
            <span onClick={() => onSelectFile(item)}>
              {item.name}
            </span>
          </>
        )}
      </div>
    ))
  );

  return <div className="file-explorer">{renderTree(files)}</div>;
};