// Создать класс Page с полями url, name и методами open() - выводящим "Переход на страницу <Название>: <url>".
// Экспортировать класс и создать два экземпляра в другом файле

//const page = new Page("Yandex", 'https://yandex.ru')
//page.open()
class Page {
    constructor(
        protected name,
    private url
) {}

open() {
console.log('Переход на страницу ${this.name}: ${this.url}')
}
}
const page1 = new Page("Yandex", 'https://yandex.ru')
page1.open()

const page2 = new Page("Google", 'https://google.com')
page2.open()