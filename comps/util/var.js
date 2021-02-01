import theme from '../../config/theme.config'
function vars() {
    const doc = document.documentElement;
    doc.style.setProperty('--primary', `${theme.colors.primary}`)
    doc.style.setProperty('--secondary', `${theme.colors.secondary}`)
    doc.style.setProperty('--tertiary', `${theme.colors.tertiary}`)
    doc.style.setProperty('--quaternary', `${theme.colors.quaternary}`)
    doc.style.setProperty('--black', `${theme.colors.black}`)
    doc.style.setProperty('--white', `${theme.colors.white}`)
    doc.style.setProperty('--grey', `${theme.colors.grey}`)
    doc.style.setProperty('--shade', `${theme.colors.shade}`)
    doc.style.setProperty('--warn', `${theme.colors.warn}`)
    doc.style.setProperty('--error', `${theme.colors.error}`)
    doc.style.setProperty('--success', `${theme.colors.success}`)
    doc.style.setProperty('--head', `${theme.typography.head}`)
    doc.style.setProperty('--body', `${theme.typography.body}`)
    doc.style.setProperty('--size', `${theme.typography.size}`)
    doc.style.setProperty('--line-height', `${theme.typography.lineHheight}`)
    doc.style.setProperty('--btnpadding', `${theme.buttons.padding}`)
    doc.style.setProperty('--btnborder', `${theme.buttons.border}`)
    doc.style.setProperty('--shadow', `${theme.other.shadow}`)
    doc.style.setProperty('--radius', `${theme.other.radius}`)
}
export {vars}

