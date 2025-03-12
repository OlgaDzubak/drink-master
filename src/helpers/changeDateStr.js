
const changeDateStr = (dateStr) => {

    const newDateStr = dateStr.slice(3, 5) + "/" + dateStr.slice(0, 2) + "/" + dateStr.slice(6, 10);
    
    return newDateStr;
}

export default changeDateStr;