import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: "Type 'help' to get started" }
  ]);
  const [currentPath, setCurrentPath] = useState('~');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Sample file system structure
  const fileSystem = {
    '~': {
      type: 'directory',
      contents: {
        'projects': {
          type: 'directory',
          contents: {
            'portfolio': { type: 'directory', contents: {} },
            'blog': { type: 'directory', contents: {} },
            'README.md': { type: 'file', content: 'Welcome to my projects!' }
          }
        },
        'documents': {
          type: 'directory',
          contents: {
            'resume.pdf': { type: 'file', content: 'Resume file' },
            'notes.txt': { type: 'file', content: 'Personal notes' }
          }
        },
        'about.txt': { type: 'file', content: 'Full-stack developer passionate about creating amazing web experiences.' }
      }
    }
  };

  // Available commands
  const commands = {
    help: () => [
      'Available commands:',
      '  help     - Show this help message',
      '  clear    - Clear the terminal',
      '  ls       - List directory contents',
      '  cd       - Change directory',
      '  cat      - Display file contents',
      '  pwd      - Show current directory',
      '  whoami   - Display user information',
      '  date     - Show current date',
      '  echo     - Display text',
      '  about    - About me',
      '  skills   - My technical skills',
      '  contact  - Contact information'
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
    ls: () => {
      const currentDir = getCurrentDirectory();
      if (currentDir && currentDir.contents) {
        return Object.keys(currentDir.contents).map(item => {
          const itemObj = currentDir.contents[item];
          return itemObj.type === 'directory' ? `📁 ${item}/` : `📄 ${item}`;
        });
      }
      return ['Directory not found'];
    },
    pwd: () => [currentPath],
    whoami: () => ['niranjan-dev'],
    date: () => [new Date().toString()],
    about: () => [
      'Hi! I\'m Niranjan, a Full-stack Developer',
      'Focused on JavaScript, Svelte, React, and Node.js',
      'I craft fast, accessible interfaces and build scalable,',
      'maintainable backend systems.',
      '',
      'Currently exploring new technologies and building',
      'innovative web solutions.'
    ],
    skills: () => [
      'Technical Skills:',
      '• Frontend: Svelte, React, TypeScript, JavaScript, HTML5, CSS3',
      '• Backend: Node.js, Express',
      '• Database: MongoDB',
      '• Tools: Git, Linux',
    ],
    contact: () => [
      'Get in touch:',
      '• Email: niranjan.g2k@gmail.com',
      '• GitHub: github.com/niranjanUidev',
      '• LinkedIn: linkedin.com/in/niranjan-dev',
      '• Website: niranjan-dev.de'
    ]
  };

  const getCurrentDirectory = () => {
    const pathParts = currentPath.split('/').filter(part => part !== '');
    let current = fileSystem['~'];
    
    for (const part of pathParts) {
      if (part === '~') continue;
      if (current.contents && current.contents[part]) {
        current = current.contents[part];
      } else {
        return null;
      }
    }
    return current;
  };

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const [command, ...args] = trimmedCmd.split(' ');
    
    // Add to command history
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Add command to history display
    setHistory(prev => [...prev, { type: 'command', content: `> ${trimmedCmd}` }]);

    if (commands[command]) {
      const result = commands[command](args);
      if (result.length > 0) {
        setHistory(prev => [...prev, { type: 'output', content: result }]);
      }
    } else if (command === 'echo') {
      setHistory(prev => [...prev, { type: 'output', content: [args.join(' ')] }]);
    } else if (command === 'cat') {
      const filename = args[0];
      const currentDir = getCurrentDirectory();
      if (currentDir && currentDir.contents && currentDir.contents[filename]) {
        const file = currentDir.contents[filename];
        if (file.type === 'file') {
          setHistory(prev => [...prev, { type: 'output', content: [file.content] }]);
        } else {
          setHistory(prev => [...prev, { type: 'output', content: [`cat: ${filename}: Is a directory`] }]);
        }
      } else {
        setHistory(prev => [...prev, { type: 'output', content: [`cat: ${filename}: No such file or directory`] }]);
      }
    } else if (command === 'cd') {
      const dir = args[0] || '~';
      if (dir === '~') {
        setCurrentPath('~');
      } else if (dir === '..') {
        const pathParts = currentPath.split('/').filter(part => part !== '');
        pathParts.pop();
        setCurrentPath(pathParts.length > 0 ? pathParts.join('/') : '~');
      } else {
        const currentDir = getCurrentDirectory();
        if (currentDir && currentDir.contents && currentDir.contents[dir] && currentDir.contents[dir].type === 'directory') {
          setCurrentPath(currentPath === '~' ? dir : `${currentPath}/${dir}`);
        } else {
          setHistory(prev => [...prev, { type: 'output', content: [`cd: ${dir}: No such file or directory`] }]);
        }
      }
    } else {
      setHistory(prev => [...prev, { type: 'output', content: [`Command not found: ${command}. Type 'help' for available commands.`] }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-full max-w-[490px] max-h-[280px] bg-gray-900 rounded-[16px] shadow-2xl overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-[#ebf0f4] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-300 text-base font-bold font-mono">
          
        </div>
        <div className="w-16"></div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="bg-gray-900 text-green-400 font-mono text-sm p-4 h-96 cursor-text overflow-y-auto"
        onClick={handleTerminalClick}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-1">
            {item.type === 'command' ? (
              <div className="text-green-500 text-base font-bold">{item.content}</div>
            ) : (
              <div className="text-gray-300 text-base font-bold">
                {Array.isArray(item.content) ? (
                  item.content.map((line, lineIndex) => (
                    <div key={lineIndex}>{line}</div>
                  ))
                ) : (
                  <div>{item.content}</div>
                )}
              </div>
            )}
          </div>
        ))}
        
        {/* Input Line */}
        <div className="flex items-center">
          <span className="text-green-400 mr-2">
            niranjan@portfolio:{currentPath}$ 
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 outline-none font-mono"
            autoComplete="off"
            spellCheck="false"
          />
          {/* <span className="text-green-400 animate-pulse">█</span> */}
        </div>
      </div>
    </div>
  );
};

export default Terminal;