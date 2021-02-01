import Link from 'next/link'
export default function Button({variant, text, url, bg, hov, click, id}) {
    if (variant.includes('ghost')) {
       return (
       <>
        <button id={id} href={url} onClick={click}>{text}</button>
        <style jsx>{`
            button {
                background: var(--grey); 
                color: var(--black); 
                box-shadow: none; 
                border: 1px solid var(--grey);
                border-radius: 0 0 0 0;
            }
            button:hover {
                background: var(--primary);
            }
            #left {
                border-radius: var(--radius) 0 0 var(--radius);
            }
            #right {
                border-radius: 0 var(--radius) var(--radius) 0;
            }
        `}</style>
        </>
)} else if (variant.includes('primary')) {
    return (
        <>
        <button href={url} onClick={click}>{text}</button>
        <style jsx>{`
            button {background: var(--primary); border: 0;max-width: 77px; margin: 0 auto;}
            button:hover {
                background: var(--grey);
            }
        `}</style>
        </>
)} else if (variant.includes('success')) {
        return (
            <>
            <button href={url} onClick={click}>{text}</button>
            <style jsx>{`
                button {background: var(--success); border: 0;}
                button:hover {
                    background: var(--grey);
                }
            `}</style>
            </>
)} else if (variant.includes('warning')) {
    return (
        <>
        <button href={url} onClick={click}>{text}</button>
        <style jsx>{`
            button {background: var(--warn); border: 0;}
            button:hover {
                background: var(--grey);
            }
        `}</style>
        </>
)} else if (variant.includes('error')) {
    return (
        <>
        <button href={url} onClick={click}>{text}</button>
        <style jsx>{`
            button {background: var(--error); border: 0;}
            button:hover {
                background: var(--grey);
            }
        `}</style>
        </>
)} else {
    return (
        <>
        <button href={url} onClick={click}>{text}</button>
        <style jsx>{`
            button {background: var(--grey); border: 0;}
            button:hover {
                background: var(--primary);
            }
        `}</style>
        </>
)}}