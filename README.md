# xio
---
Шаблон для каждого моего проекта
--- 
### Полезный набор SCSS миксинов и хелперов

## Описание

Этот SCSS код содержит полезные миксины и хелперы для верстки адаптивных веб-проектов. 

### Грид и Флекс

Определены два основных контейнера:

- `.gcontainer` для сетки на CSS Grid 
- `.fcontainer` для Flexbox

Они задают максимальную ширину, отступы, центрирование и адаптивные настройки для разных брейкпоинтов.

### Хелперы

Хелперы помогают быстро задавать различные свойства для элементов:

- Дисплей (`.block`, `.inline` и т.д.)
- Позиционирование (`.relative`, `.fixed`)  
- Otступы и поля (`.padding-10`, `.margin-20`)
- Видимость (`.hidden`, `.visually-hidden`)
- Текст (`.text-center`, `.text-truncate`) 
- Flexbox (`.justify-center`, `.align-center`)

Также есть хелперы для адаптивного изменения направления и переноса строк в flex контейнерах (`.flex-md-column`, `.flex-xl-wrap`).

### Функции и циклы

Используются циклы `@for` для генерации модификаторов с отступами, z-index, order и flex свойствами.

### SCSS переменные

Определены переменные для брейкпоинтов и распространенных значений, чтобы изменять их в одном месте.

### Полифиллы и скрипты

Добавлен полифилл `requestAnimationFrame` для плавной прокрутки браузеров. 

Также есть скрипт для динамического переключения flex-направления на разных разрешениях экрана.

## Использование

Эти SCSS миксины и хелперы могут значительно ускорить разработку адаптивного дизайна. Их можно подключить в проект и использовать готовые классы для быстрого стилирования элементов. При необходимости классы можно переопределить.

Этот код оптимизирует работу с CSS и делает стили более гибкими и масштабируемыми.

## TABLE
| Класс | Описание |
|-|-|
| `.gcontainer` | Контейнер с CSS Grid для сеточной верстки |
| `.fcontainer` | Контейнер с Flexbox для гибкой верстки | 
| `.inline` | Дисплей inline |
| `.block` | Дисплей block |
| `.flex` | Дисплей flex |
| `.relative` | Позиционирование относительное |
| `.absolute` | Позиционирование абсолютное |
| `.z-index-10` | Z-index равен 10 |
| `.padding-10` | Все отступы по 10px |
| `.margin-10` | Все поля по 10px | 
| `.text-center` | Выравнивание текста по центру |
| `.text-truncate` | Обрезание длинного текста |
| `.justify-center` | Выравнивание флекс-элементов по центру |
| `.align-center` | Выравнивание флекс-элементов по вертикали |
| `.flex-md-column` | Переход в колонку на md | 
| `.flex-xl-wrap` | Перенос строк на xl |

