import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { fetchWeather } from "../api/fetchWeather";


const arrCities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Омск', 'Ростов-на-Дону', 'Самара', 'Уфа', 'Красноярск', 'Воронеж', 'Пермь', 'Волгоград', 'Краснодар', 'Саратов', 'Тюмень', 'Тольятти', 'Ижевск', 'Барнаул', 'Ульяновск', 'Иркутск', 'Хабаровск', 'Махачкала', 'Ярославль', 'Владивосток', 'Томск', 'Оренбург', 'Кемерово', 'Новокузнецк', 'Рязань', 'Набережные Челны', 'Астрахань', 'Севастополь', 'Киров', 'Пенза', 'Балашиха', 'Липецк', 'Чебоксары', 'Калининград', 'Тула', 'Ставрополь', 'Курск', 'Улан-Удэ', 'Сочи', 'Тверь', 'Магнитогорск', 'Иваново', 'Брянск', 'Сургут', 'Белгород', 'Владимир', 'Чита', 'Архангельск', 'Нижний Тагил', 'Симферополь', 'Калуга', 'Якутск', 'Грозный', 'Волжский', 'Смоленск', 'Саранск', 'Череповец', 'Подольск', 'Вологда', 'Курган', 'Орёл', 'Владикавказ', 'Тамбов', 'Петрозаводск', 'Мурманск', 'Нижневартовск', 'Кострома', 'Йошкар-Ола', 'Новороссийск', 'Стерлитамак', 'Химки', 'Таганрог', 'Мытищи', 'Сыктывкар', 'Нижнекамск', 'Комсомольск-на-Амуре', 'Нальчик', 'Шахты', 'Дзержинск', 'Энгельс', 'Благовещенск', 'Королёв', 'Братск', 'Великий Новгород', 'Орск', 'Ангарск', 'Старый Оскол', 'Псков', 'Люберцы', 'Южно-Сахалинск', 'Бийск', 'Прокопьевск', 'Абакан', 'Армавир', 'Балаково', 'Норильск', 'Рыбинск', 'Северодвинск', 'Петропавловск-Камчатский', 'Красногорск', 'Уссурийск', 'Волгодонск', 'Новочеркасск', 'Сызрань', 'Каменск-Уральский', 'Златоуст', 'Альметьевск', 'Электросталь', 'Керчь', 'Миасс', 'Салават', 'Хасавюрт', 'Пятигорск', 'Копейск', 'Находка', 'Рубцовск', 'Майкоп', 'Коломна', 'Березники', 'Одинцово', 'Домодедово', 'Ковров', 'Нефтекамск', 'Каспийск', 'Нефтеюганск', 'Кисловодск', 'Новочебоксарск', 'Батайск', 'Щёлково', 'Дербент', 'Серпухов', 'Назрань', 'Раменское', 'Черкесск', 'Новомосковск', 'Кызыл', 'Долгопрудный', 'Новый Уренгой', 'Орехово-Зуево', 'Первоуральск', 'Обнинск', 'Невинномысск', 'Ессентуки', 'Октябрьский', 'Димитровград', 'Пушкино', 'Камышин', 'Ноябрьск', 'Евпатория', 'Реутов', 'Жуковский', 'Муром', 'Северск', 'Новошахтинск', 'Артём', 'Ачинск', 'Бердск', 'Элиста', 'Арзамас', 'Ханты-Мансийск', 'Ногинск', 'Елец', 'Железногорск', 'Зеленодольск'];
const options = arrCities.reduce((prev, curr) => {
    const option = {value: curr, label: curr};
    prev.push(option);
    return prev;
}, []);

const colourStyles = {
    control: (styles) => ({
        ...styles, 
        backgroundColor: '#2A2F45',
        width: '510px',
        height: '56px',
        color: '#8A91AB',
        borderRadius: '2px',
        border: 'none',
        margin: '80px auto 0px',
        cursor: 'text',
    }),
    option: (styles) => {
        return {
        ...styles,
        backgroundColor: '#30354B',
        color: '#fff',
        width: '510px',
        height: '56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: '10',
        borderBottom: '2px solid #161B30',
        borderRadius: '5px'
    }},
    input: (styles) => ({ ...styles, color: '#8A91AB' }),
    menu: (styles) => ({
        width: '510px',
        height: '0px',
        margin: '0px auto',
    }),
    dropdownIndicator: (styles) => ({
        display: 'none'
    }),
    indicatorSeparator: (styles) => ({
        display: 'none'
    }),
    singleValue: (styles) => ({
        ...styles,
        color: '#fff'
    }),
    noOptionsMessage: (styles) => ({
        display: 'none'
    })
}

const SearchCity = ({ onDataChange }) => {
    let navigate = useNavigate();
    return(
        <Select
        isClearable
        options={options}
        styles={colourStyles}
        placeholder="Укажите город"
        filterOption={(option, inputValue) => {
            if (inputValue.length >= 3 && inputValue.toLowerCase() === option.label.toLowerCase().slice(0, inputValue.length)) {
                return option;
            }
            return null;
        }}
        onChange={async (option) => {
            const data = await fetchWeather(option.value);
            onDataChange(data);
            navigate(`/city/${data.id}`);
        }}
        />
    )
}

export default SearchCity;