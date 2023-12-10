function formatDateString(inputString) {
    const dateObject = new Date(inputString).toLocaleDateString('fa-IR');
    return dateObject;
}
export default formatDateString

