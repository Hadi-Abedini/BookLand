function addCommasToNumber(number) {
    const numberString = number.toString();
    const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedNumber;
}
export default addCommasToNumber;