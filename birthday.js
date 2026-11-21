// 1. Функция определения дня недели
function getDayOfWeek(day, month, year) {
    const date = new Date(year, month - 1, day);
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return days[date.getDay()];
}

// 2. Функция проверки високосного года
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 3. Функция определения возраста
function getAge(day, month, year) {
    const today = new Date();
    let age = today.getFullYear() - year;
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }
    return age;
}