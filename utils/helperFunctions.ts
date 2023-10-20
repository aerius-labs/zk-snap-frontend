export function getTimeDifference(targetTime: any) {
    const targetDate:any = new Date(targetTime);
    const currentDate:any = new Date();
    let differenceInMilliseconds = (targetDate - currentDate);
    // If difference is negative, the target time is in the past
    if (differenceInMilliseconds < 0) {
      return "Ended";
    }
    // Calculate difference in terms of months, days, hours, and minutes
    const months = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30));
    differenceInMilliseconds -= months * 1000 * 60 * 60 * 24 * 30;
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    differenceInMilliseconds -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
    differenceInMilliseconds -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    // Return the difference based on the conditions
    if (months > 0) {
      return `Ends in ${months} month${months > 1 ? 's' : ''}`;
    } else if (days > 0) {
      return `Ends in ${days} day${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return `Ends in ${hours} hour${hours > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return `Ends in ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      return "Ends in Less than a minute";
    }
}

export function formatDate(inputDateStr: any) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
  };

  const date = new Date(inputDateStr);
  const formattedDate = date.toLocaleString('en-US', options);

  return formattedDate.replace(/,/g, ''); // Removes the comma after the day
}