"use strict";
import users from "./users.js";

// ТЗ
// Напиши функции которые с помощью перебирающих методов массива(никаких for, splice и т.д.)
// выполняют следующие операции над массивом объектов пользователей из файла users.js.


// ==================  Задание 1 START  =====================


// Получить массив имен всех пользователей(поле name).

const getUserNames = users => {
    return users.map(user => user.name);
};

console.log("===== Задание 1 =====");
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// ===================  Задание 1 END  ======================


// ===================  Задание 2 START  =====================


// Получить массив объектов пользователей по цвету глаз(поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color)
};

console.log("===== Задание 2 =====");
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ===================  Задание 2 END  =======================


// ===================  Задание 3 START  =====================

// Получить массив имен пользователей по полу(поле gender).

const getUsersWithGender = (users, gender) => {
    return users
        .filter(user => user.gender === gender)
        .map(user => user.name)
};

console.log("===== Задание 3 =====");
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ===================  Задание 3 END  =======================


// ===================  Задание 4 START  =====================

// Получить массив только неактивных пользователей(поле isActive).

const getInactiveUsers = users => {
    return users.filter(user => !user.isActive)
};

console.log("===== Задание 4 =====");
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ===================  Задание 4 END  =======================


// ===================  Задание 5 START  =====================

// Получить пользоваля(не массив) по email(поле email, он уникальный).

const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
};

console.log("===== Задание 5 =====");
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// ===================  Задание 5 END  =======================


// ===================  Задание 6 START  =====================

// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age >= min && user.age <= max);
};

console.log("===== Задание 6 =====");
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ===================  Задание 6 END  =======================


// ===================  Задание 7 START  =====================

// Получить общую сумму баланса(поле balance) всех пользователей.

const calculateTotalBalance = users => {
    return users.reduce((totalBalance, users) => totalBalance + users.balance, 0);
};

console.log("===== Задание 7 =====");
console.log(calculateTotalBalance(users)); // 20916

// ===================  Задание 7 END  =======================


// ===================  Задание 8 START  =====================

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
    return users
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name)
};

console.log("===== Задание 8 =====");
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// ===================  Задание 8 END  =======================


// ===================  Задание 9 START  =====================

// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)

const getNamesSortedByFriendsCount = users => {
    return [...users]
        .sort((prevUser, nextUser) => {
            return prevUser.friends.length - nextUser.friends.length
        })
        .map(user => user.name);
};

console.log("===== Задание 9 =====");
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ===================  Задание 9 END  =======================


// ===================  Задание 10 START  ====================

// Получить массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {

    let uniqueSkills = [];

    const allSkills = users.reduce((allUsersSkills, user) => {
        allUsersSkills.push(...user.skills);
        return allUsersSkills;
    }, []);


    allSkills.forEach(skill => {
        if (!uniqueSkills.includes(skill)) {
            uniqueSkills.push(skill);
        }
    });

    return uniqueSkills.sort();
};

console.log("===== Задание 10 =====");
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// ===================  Задание 10 END  =======================