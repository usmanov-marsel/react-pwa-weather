import jsonp from "jsonp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { fetchWeather } from "../api/fetchWeather";
import { selectStyles } from "./styles/selectStyles";


const SearchCity = ({ onDataChange }) => {
    const [options, setOptions] = useState([]);
    const navigate = useNavigate();
    const onFilter = (option, inputValue) => {
        if (inputValue.length >= 3 && inputValue.toLowerCase() === option.label.toLowerCase().slice(0, inputValue.length)) {
            return option;
        }
        return null;
    }
    const onSelectChange = async (option) => {
        if (option && option.value !== '') {
            const data = await fetchWeather(option.value);
            navigate(`/city/${data.id}`);
            onDataChange(data);
        }
    }
    const onInputChange = (value) => {
        if (value.length >= 3) {
            jsonp(`https://kladr-api.ru/api.php?token=syEDDkGiBabyFezKY26trntKD7hsbnBr&query=${value}&contentType=city`, null, (err, data) => {
                const nameCitites = data.result.map(res => res.name);
                setOptions(nameCitites.map(name => ({value: name, label: name})));
            })
        }
    }

    return(
        <Select
        isClearable
        options={options}
        styles={selectStyles}
        placeholder="Укажите город"
        filterOption={onFilter}
        onChange={onSelectChange}
        onInputChange={onInputChange}
        />
    )
}

export default SearchCity;