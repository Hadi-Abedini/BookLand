function formatDateString(inputString) {
    const dateObject = new Date(inputString);

    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();

    const formattedDate = `${year}/${month}/${day}`;

    return formattedDate;
}

export default formatDateString
