import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [diffResult, setDiffResult] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    document.body.className = 'dark-theme';
  }, []);

  const handleCompare = () => {
    const diffLines = [];
    const text1Lines = text1.split('\n');
    const text2Lines = text2.split('\n');

    text1Lines.forEach((line, index) => {
      if (line !== text2Lines[index]) {
        if (text2Lines[index] === undefined) {
          diffLines.push({ type: 'removed', text: `- ${line}` });
        } else {
          diffLines.push({ type: 'removed', text: `- ${line}` });
          diffLines.push({ type: 'added', text: `+ ${text2Lines[index]}` });
        }
      } else {
        diffLines.push({ type: 'unchanged', text: `  ${line}` });
      }
    });

    text2Lines.slice(text1Lines.length).forEach((line) => {
      diffLines.push({ type: 'added', text: `+ ${line}` });
    });

    setDiffResult(diffLines);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    document.body.className = isDarkTheme ? 'light-theme' : 'dark-theme';
  };

  return (
    <div className="app-container">
      <h1>Text Diff Tool</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
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
      <button onClick={handleCompare}>Compare</button>
      <pre className="diff-result">
        {diffResult.map((line, index) => (
          <div key={index} className={line.type}>{line.text}</div>
        ))}
      </pre>
    </div>
  );
}

export default App;
