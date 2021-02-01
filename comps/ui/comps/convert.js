import { useState } from 'react'
import Button from './button'
import Cases from './cases'
export default function Convert() {
    const [input, setInput] = useState('')
    const [copy, setCopy]   = useState(false)
    const [original, setOriginal] = useState('')
    function handleChange(e) {
            setInput(e.target.value)
            setOriginal(e.target.value)
    }
    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
          return word.replace(word[0], word[0].toUpperCase());
        }).join(' ');
    }
    function camelCase(str) {
        str = titleCase(str)
        return str = str.replace(/\s/g, '')
    }
    function snakeCase(str) {
        str = titleCase(str)
        return str = str.replace(/\s/g, '_').toLowerCase()
    }
    function capitalSnakeCase(str) {
        return titleCase(str).replace(/\s/g, '_')
    }
    function convertCase(e) {
        var cases = e.target.innerHTML
        if (cases.includes('Title')) {
            setInput(titleCase(input))
        } else if (cases.includes('lower')) {
            setInput(input.toLowerCase())
        } else if (cases.includes('UPPER')) {
            setInput(input.toUpperCase())
        } else if (cases.includes('CamelCase')) {   
            setInput(camelCase(original))
        } else if (cases.includes('snake_case')) {
            setInput(snakeCase(original))
        } else if (cases.includes('capital_snake')) {
            setInput(capitalSnakeCase(original))
        }
        setCopy(true)
    }
    function copyText() {
        document.querySelector('#input').select()
        document.execCommand('copy')
    }
 return (
    <>
    <div className="container">
        <textarea id="input" value={input} onChange={handleChange}/>
        <div className="buttons">
        <Cases click={convertCase}/>
        {/*<Button variant='primary' text='convert' click={convertCase}/>*/}
        <button onClick={copyText}>Copy to Clipboard</button>
        </div>
        <style jsx>{`
        .container {
            display: grid;
            place-items: center;
            margin: 5rem 0 0 0;
        }
            textarea {
                font-family: inherit;
                color: inherit;
                width: 90vw;
                max-width: 700px;
                height: 300px;
                border-radius: var(--radius);
                background: var(--white);
                margin: 0 0 2rem 0;
                resize: none;
            }
            ::selection {
                display: none;
            }
            .buttons {
                display: flex;
                align-items: center;
                flex-direction: column;
            }
            button {
                max-width: 140px;
                background: var(--success);
                margin-top: 1rem;
                display: ${copy ? 'block' : 'none'};
            }
            button:hover {
                background: var(--grey);
            }
        `}</style>
        </div>
    </>
 )   
}
