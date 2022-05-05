
## Тестовое задание на вакансию Front-end React Developer

## Использовано:

Frontend
- JavaScript 
- TypeScript 4.6.3
- React 18.0.0
- Redux 7.2.8
- Toolkit 1.8.1

Backend
- Node.js
- Express
- Bcrypt.js
- Jsonwebtoken
- Mongoose

Database: Mongodb
 
  Изначально стояла задача написать только приложение но в дальнейшем была написана и backend часть: сервер и серверная логика с использованием реальной БД Mongodb, токена и хеширование данных.  

### Основное задание:
Необходимо написать приложение "личный кабинет".
В приложении должно быть две страницы:
1. Страница входа
2. Страница со списком контактов

Оформление и данные для заполнения страниц на усмотрение кандидата.

**Обязательно** наличие информации в readme о том, как запускать приложение.
Для выполнения тестового задания Вы можете использовать UI фреймворк.
При написании кода необходимо использовать типизацию, т.е. **не использовать** в коде *:any.*
При выполнении работы обязательно использовать стейт менеджер (redux, mobx)

Время на выполнение тестового задания не ограничено.

### Страница входа
Для реализации авторизации можно использовать запросы с моковыми данными https://github.com/typicode/json-server.
### Страница со списком контактов
Страница со списком контактов пользователя должна быть **доступна только после авторизации.**

На странице со списком контактов должна быть возможность добавлять/удалять/редактировать контакты, а также желательно наличие функции поиска.

### Для запуска приложения:

1. загрузить данный проект
2. установить nodejs
3. запустить командную строку
4. в командной строке перейти в директорию проекта
5. использовать команду "npm i" 
6. использовать команду "npm run contacts:install"
7. использовать команду "npm run dev"
8. в браузере запустится проект сайта

### Даннные для авторизации на сайте

Mожно зарегистрировать новый логин или использовать готовый:

Login: "user@list.ru"   
Password: "852456"

