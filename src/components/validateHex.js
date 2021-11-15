export default function validateHex(color) {
    if (color.length < 7) return '';
    const hex = color.replace('#', '');
    if (hex.length !== 6 || hex.match(/[g-z]/)) {
        return 'Ошибка';
    } else {
        return hex;
    }
}
