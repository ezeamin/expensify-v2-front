export const getMonthName = (monthNum: number) => {
    // return name in capital letters and in english
    return new Date(2020, monthNum).toLocaleString('en-US', { month: 'long' }).toUpperCase();
}