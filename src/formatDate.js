const formatDate = (date) => {
    const re = /\d{4}/;
    return date.match(re);
}

export default formatDate;