import Button from './button'
export default function Cases({click}) {
    return (
        <div>
            <Button id="left" variant='ghost' text='Title' click={click}/>
            <Button variant='ghost' text='lower' click={click} />
            <Button variant='ghost' text='UPPER' click={click} />
            <Button variant='ghost' text='CamelCase' click={click} />
            <Button variant='ghost' text='snake_case' click={click} />
            <Button id="right"variant='ghost' text='capital_snake' click={click} />
        <style jsx>{`
        div {
            width: 100%;
            margin-bottom: .3rem;
        }
        `}</style>
        </div>
    )
}