
import React, { useState, useEffect } from 'react';
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import Header from './components/Header';
import { useDebounce } from './hooks/useDebounce';
import { Language } from './types';
import { INITIAL_HTML, INITIAL_CSS, INITIAL_JS } from './constants';

const App: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState<string>(INITIAL_HTML);
  const [cssCode, setCssCode] = useState<string>(INITIAL_CSS);
  const [jsCode, setJsCode] = useState<string>(INITIAL_JS);
  const [srcDoc, setSrcDoc] = useState<string>('');

  const debouncedHtml = useDebounce(htmlCode, 500);
  const debouncedCss = useDebounce(cssCode, 500);
  const debouncedJs = useDebounce(jsCode, 500);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${debouncedCss}</style>
          </head>
          <body>
            ${debouncedHtml}
            <script>${debouncedJs}</script>
          </body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [debouncedHtml, debouncedCss, debouncedJs]);

  const editorPanels: { language: Language; value: string; onChange: (value: string) => void }[] = [
    { language: 'html', value: htmlCode, onChange: setHtmlCode },
    { language: 'css', value: cssCode, onChange: setCssCode },
    { language: 'javascript', value: jsCode, onChange: setJsCode },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#10101a] text-gray-200 font-sans overflow-hidden">
      <Header />
      <main className="flex-grow flex flex-col lg:flex-row p-2 gap-2 overflow-hidden">
        <div className="flex-1 flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:grid-rows-2">
          {/* Editor Panels */}
          <div className="lg:col-span-1 lg:row-span-1">
            <EditorPanel 
              language={editorPanels[0].language} 
              value={editorPanels[0].value} 
              onChange={editorPanels[0].onChange} 
            />
          </div>
          <div className="lg:col-span-1 lg:row-span-1">
             <EditorPanel 
              language={editorPanels[1].language} 
              value={editorPanels[1].value} 
              onChange={editorPanels[1].onChange} 
            />
          </div>
          <div className="lg:col-span-2 lg:row-span-1">
             <EditorPanel 
              language={editorPanels[2].language} 
              value={editorPanels[2].value} 
              onChange={editorPanels[2].onChange} 
            />
          </div>
        </div>
        
        {/* Preview Panel */}
        <div className="flex-1 flex flex-col bg-[#1e1e2e] rounded-lg border border-gray-700/50 shadow-lg transition-all duration-300">
          <div className="flex items-center p-2 bg-[#2a2a3e] rounded-t-lg border-b border-gray-700/50">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-sky-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm1.5 0a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V5z" clipRule="evenodd" />
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.464 9.536a.5.5 0 010-.708l4-4a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L5.5 6.207V13.5a.5.5 0 01-1 0V6.207L.464 9.536zM15.5 6.207L11.464 10.243a.5.5 0 01-.708-.708l4-4a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L15.5 6.207z" clipRule="evenodd" />
            </svg>
            <h2 className="font-semibold text-sm tracking-wider">Live Preview</h2>
          </div>
          <PreviewPanel srcDoc={srcDoc} />
        </div>
      </main>
    </div>
  );
};

export default App;
