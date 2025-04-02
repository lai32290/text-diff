import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [diffResult, setDiffResult] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [autoCompare, setAutoCompare] = useState(false);

  useEffect(() => {
    // Inicialize com tema escuro
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  useEffect(() => {
    // Comparar automaticamente quando o texto mudar se autoCompare estiver ativado
    if (autoCompare) {
      handleCompare();
    }
  }, [text1, text2, autoCompare]);

  const handleCompare = () => {
    const diffLines = [];
    const text1Lines = text1.split('\n');
    const text2Lines = text2.split('\n');

    text1Lines.forEach((line, index) => {
      if (line !== text2Lines[index]) {
        if (text2Lines[index] === undefined) {
          diffLines.push({ type: 'removed', text: `- ${line}`, lineNumber: index + 1 });
        } else {
          diffLines.push({ type: 'removed', text: `- ${line}`, lineNumber: index + 1 });
          diffLines.push({ type: 'added', text: `+ ${text2Lines[index]}`, lineNumber: index + 1 });
        }
      } else {
        diffLines.push({ type: 'unchanged', text: `  ${line}`, lineNumber: index + 1 });
      }
    });

    text2Lines.slice(text1Lines.length).forEach((line, index) => {
      diffLines.push({ type: 'added', text: `+ ${line}`, lineNumber: text1Lines.length + index + 1 });
    });

    setDiffResult(diffLines);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className="app-container">
      <div className="title-container">
        <h1 className="main-title">
          <span className="title-highlight">Text</span> 
          <span className="title-diff">Diff</span> 
          <span className="title-tool">Tool</span>
        </h1>
        <p className="title-subtitle">Compare text and see the differences</p>
      </div>
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
      
      <div className="auto-compare-container">
        <label className="auto-compare-label">
          <input 
            type="checkbox" 
            checked={autoCompare} 
            onChange={(e) => setAutoCompare(e.target.checked)} 
            className="auto-compare-checkbox"
          />
          Auto-compare on change
        </label>
      </div>
      
      <div className="input-container">
        <textarea
          placeholder="Enter first text here..."
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
        <textarea
          placeholder="Enter second text here..."
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
      </div>
      
      {!autoCompare && (
        <button onClick={handleCompare} className="compare-button">Compare</button>
      )}
      
      {diffResult.length > 0 && (
        <pre className="diff-result">
          {diffResult.map((line, index) => (
            <div key={index} className={line.type}>
              <span className="line-number">{line.lineNumber}</span> {line.text}
            </div>
          ))}
        </pre>
      )}
    </div>
  );
}

export default App;
