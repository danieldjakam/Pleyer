export function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return hours ? `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}` : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

export function formatNumber(number) {
    if (isNaN(number)) {
        return "Invalid number";
    }
    const numberString = number.toString();
    const parts = numberString.split(".");
    const formattedIntegerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (parts.length === 2) {
        return `${formattedIntegerPart}.${parts[1]}`;
    } else {
        return formattedIntegerPart;
    }
}

export function getPercentOfTime(time, endTime) {
    return Math.round((time / endTime) * 100);
}
