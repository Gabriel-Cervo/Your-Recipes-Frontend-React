export default function convertTimestampToDate(date) {
    const createdAt = new Date(date);
    const timestamp = new Date(createdAt.getTime());
    const convertedDate = `${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()}`;
    
    return convertedDate;  
};