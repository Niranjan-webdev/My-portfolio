import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'prompt', content: "Type 'help' to get started" }
  ]);
  const [currentPath, setCurrentPath] = useState('~');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

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

  const commands = {
    help: () => [
      'Available commands: whoami, skills, projects, about, contact, clear, help'
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
      "Hi! I'm Niranjan, a Full-stack Developer",
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
    ],
    projects: () => [
      'Projects:',
      '• Portfolio — React + Tailwind',
      '• Blog — Next.js + MDX',
      '• API — Node.js + Express',
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

    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    // Add the typed command line
    setHistory(prev => [...prev, { type: 'command', content: trimmedCmd }]);

    if (commands[command]) {
      const result = commands[command](args);
      if (result && result.length > 0) {
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
    <div className="w-full max-w-[600px] bg-gray-900 rounded-[16px] shadow-2xl overflow-hidden">
      {/* Title bar */}
      <div className="bg-[#ebf0f4] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Terminal body */}
      <div
        ref={terminalRef}
        className="bg-[#1d2734] font-mono text-base p-6 h-[340px] cursor-text overflow-y-auto"
        onClick={handleTerminalClick}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-3">
            {item.type === 'command' ? (
              // User typed command — teal > prefix + teal bold text
              <div className="flex gap-2">
                <span className="text-[#2eb89c] font-bold">{'>'}</span>
                <span className="text-[#2eb89c] font-bold">{item.content}</span>
              </div>
            ) : item.type === 'prompt' ? (
              // Initial prompt message — muted > prefix + italic gray
              <div className="flex gap-2">
                <span className="text-[#2eb89c] font-bold">{'>'}</span>
                <span className="text-gray-400 italic">{item.content}</span>
              </div>
            ) : (
              // Command output — plain gray
              <div className="text-gray-300 pl-4">
                {Array.isArray(item.content) ? (
                  item.content.map((line, lineIndex) => (
                    <div key={lineIndex}>{line || '\u00A0'}</div>
                  ))
                ) : (
                  <div>{item.content}</div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-2">
          <span className="text-[#2eb89c] font-bold">{'>'}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-[#2eb89c] font-bold outline-none font-mono caret-[#2eb89c]"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;