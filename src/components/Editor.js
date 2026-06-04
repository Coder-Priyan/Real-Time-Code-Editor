import React, { useEffect, useRef, useState } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

import ACTIONS from '../Actions';

const Editor = ({ socketRef, roomId, onCodeChange }) => {
    const editorRef = useRef(null);
    const [output, setOutput] = useState('');

    useEffect(() => {
        async function init() {
            editorRef.current = Codemirror.fromTextArea(
                document.getElementById('realtimeEditor'),
                {
                    mode: { name: 'javascript', json: true },

                    theme: 'dracula',
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            );

            editorRef.current.on('change', (instance, changes) => {
                const { origin } = changes;
                const code = instance.getValue();
                onCodeChange(code);

                if (origin !== 'setValue') {
                    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                        roomId,
                        code,
                    });
                }
            });
        }
        init();
    }, []);

    useEffect(() => {
        const socket = socketRef.current;
        if (!socket) return;

        const onCodeChangeSocket = ({ code }) => {
            if (code !== null && editorRef.current) {
                editorRef.current.setValue(code);
            }
        };

        const onPythonOutput = ({ output: nextOutput, error }) => {
            if (error) {
                setOutput(String(error));
            } else {
                setOutput(String(nextOutput ?? ''));
            }
        };

        const onJavaScriptOutput = ({ output: nextOutput, error }) => {
            if (error) {
                setOutput(String(error));
            } else {
                setOutput(String(nextOutput ?? ''));
            }
        };

        socket.on(ACTIONS.CODE_CHANGE, onCodeChangeSocket);
        socket.on(ACTIONS.JAVASCRIPT_OUTPUT, onJavaScriptOutput);
        socket.on(ACTIONS.PYTHON_OUTPUT, onPythonOutput);

        return () => {
            socket.off(ACTIONS.CODE_CHANGE, onCodeChangeSocket);
            socket.off(ACTIONS.JAVASCRIPT_OUTPUT, onJavaScriptOutput);
            socket.off(ACTIONS.PYTHON_OUTPUT, onPythonOutput);
        };

    }, [socketRef.current]);


    const runJavaScript = () => {
        if (!socketRef.current || !editorRef.current) return;
        setOutput('Running...');
        socketRef.current.emit(ACTIONS.RUN_JAVASCRIPT, {
            roomId,
            code: editorRef.current.getValue(),
        });
    };


    return (
        <div className="editorComponent">
            <textarea id="realtimeEditor"></textarea>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 8 }}>
                    <button className="btn" onClick={runJavaScript} type="button">
                    Run JavaScript

                </button>

                <span style={{ fontSize: 12, opacity: 0.8 }}>Output:</span>
            </div>
            <pre
                style={{
                    background: '#1e1e1e',
                    color: '#e6e6e6',
                    padding: 12,
                    borderRadius: 8,
                    marginTop: 8,
                    minHeight: 120,
                    overflow: 'auto',
                }}
            >
                {output}
            </pre>
        </div>
    );
};

export default Editor;

