function formatDateString(inputString) {
    console.log(inputString);
    const dateObject = new Date(inputString).toLocaleDateString('fa-IR');
    return dateObject;
}
export default formatDateString

