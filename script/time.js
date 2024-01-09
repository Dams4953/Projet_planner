export function time(idDateTime) {
    const now = new Date();
    const diff = idDateTime - now;

    if (diff <= 0) {
        return "Temps écoulé"; 
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    if (days > 0) {
        return `${days} days`;
    } else if (hours > 0) {
        return `${hours} hours`;
    } else {
        return `${minutes} minutes`;
    }
}