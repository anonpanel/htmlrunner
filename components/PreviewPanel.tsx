
import React from 'react';

interface PreviewPanelProps {
  srcDoc: string;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ srcDoc }) => {
  return (
    <div className="flex-grow bg-white rounded-b-lg overflow-hidden">
      <iframe
        srcDoc={srcDoc}
        title="Live Preview"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        className="transition-opacity duration-500"
        key={srcDoc} // Re-renders iframe for smooth updates, though can cause flicker
      />
    </div>
  );
};

export default PreviewPanel;
