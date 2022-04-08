export const getIconNameFromId = (id) => {
    let nameIcon = 'default';
    if (id === 800) {
        nameIcon = 'clear';
    }
    else if (id === 771) {
        nameIcon = 'squall';
    }
    else if (id > 800) {
        nameIcon = 'clouds';
    }
    else if (id >= 200 && id <= 232) {
        nameIcon = 'thunderstorm';
    }
    else if (id >= 300 && id <= 321) {
        nameIcon = 'drizzle';
    }
    else if (id >= 500 && id <= 531) {
        nameIcon = 'rain';
    }
    else if (id >= 600 && id <= 622) {
        nameIcon = 'snow';
    }
    else if (id === 781) {
        nameIcon = 'tornado';
    }
    else if ((id >= 701 && id <= 721) || id === 741) {
        nameIcon = 'mist-smoke-haze-fog';
    }
    else if (id >= 751 && id <= 762) {
        nameIcon = 'dust-sand-ash';
    }
    return nameIcon;
}