import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '/DiffViewer.css';


const DiffViewer = () => {
    const [json1, setJson1] = useState('');
    const [json2, setJson2] = useState('');
    const [diffOutput, setDiffOutput] = useState('');
    const [error, setError] = useState('');
    const [darkMode, setDarkMode] = useState(true);

    // Apply dark or light class to body
    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
        document.body.style.color = darkMode ? '#f5f5f5' : '#000000';
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }, [darkMode]);

    const handleCompare = () => {
        try {
            const obj1 = JSON.parse(json1);
            const obj2 = JSON.parse(json2);

            setError('');
            const diff = getDiff(obj1, obj2);
            setDiffOutput(JSON.stringify(diff, null, 2));
        } catch (err) {
            setError('❌ Invalid JSON input!');
            setDiffOutput('');
        }
    };

    const getDiff = (a: any, b: any): any => {
        if (typeof a !== 'object' || typeof b !== 'object') return b;

        const result: any = {};

        for (const key in b) {
            if (!a.hasOwnProperty(key)) {
                result[key] = { added: b[key] };
            } else if (JSON.stringify(a[key]) !== JSON.stringify(b[key])) {
                result[key] = { from: a[key], to: b[key] };
            }
        }

        for (const key in a) {
            if (!b.hasOwnProperty(key)) {
                result[key] = { removed: a[key] };
            }
        }

        return result;
    };

    return (
        <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh' }}>


            <button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                    margin: '1rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: darkMode ? '#f0f0f0' : '#222',
                    color: darkMode ? '#000' : '#fff',
                    border: 'none',
                    fontWeight: 'bold',
                }}
            >
                Toggle {darkMode ? 'Light' : 'Dark'} Mode
            </button>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginTop: '1rem',
                }}
            >
                <textarea
                    value={json1}
                    onChange={(e) => setJson1(e.target.value)}
                    placeholder="Enter first JSON"
                    rows={10}
                    cols={30}
                    style={{
                        resize: 'both',
                        overflow: 'auto',
                        minWidth: '250px',
                        minHeight: '200px',
                        maxWidth: '100%',
                        padding: '0.5rem',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        borderRadius: '12px', // ✅ Rounded corners added
                        border: `2px solid ${darkMode ? '#ccc' : '#333'}` // Optional: add border
                    }}
                />

                <textarea
                    value={json2}
                    onChange={(e) => setJson2(e.target.value)}
                    placeholder="Enter second JSON"
                    rows={10}
                    cols={30}
                    style={{
                        resize: 'both',
                        overflow: 'auto',
                        minWidth: '250px',
                        minHeight: '200px',
                        maxWidth: '100%',
                        padding: '0.5rem',
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        borderRadius: '12px', // ✅ Rounded corners added
                        border: `2px solid ${darkMode ? '#ccc' : '#333'}` // Optional: add border
                    }}
                />

            </div>

            <button
                onClick={handleCompare}
                style={{
                    margin: '1.5rem 0',
                    padding: '0.5rem 1.5rem',
                    background: '#4CAF50',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}
            >
                Compare
            </button>

            {error && <div style={{ color: 'red', fontWeight: 'bold' }}>{error}</div>}

            {diffOutput && (
                <div
                style={{
                    textAlign: 'left',
                    marginTop: '1rem',
                    padding: '1rem',
                    borderRadius: '12px',
                    overflowX: 'auto',
                    maxWidth: '90%',
                    marginInline: 'auto',
                    background: darkMode ? '#1e1e1e' : '#f0f0f0',
                }}
                className={`glow-box ${darkMode ? 'glow-dark' : 'glow-light'}`}
            >
            
                    <SyntaxHighlighter
                        language="json"
                        style={darkMode ? vscDarkPlus : prism}
                        wrapLines={true}
                        showLineNumbers
                        lineProps={() => {
                            return { style: { whiteSpace: 'pre-wrap' } };
                        }}
                    >
                        {diffOutput}
                    </SyntaxHighlighter>
                </div>
            )}
        </div>
    );
};

export default DiffViewer;
