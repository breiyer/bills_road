import "../css/components/SelectComponent.css"
import React, { useState } from 'react'

const SelectComponent = ({ title, data, handleChange, label, name, dataKey }) => {
    const [options, setCards] = useState(data || [])

    return (
        <div className="SelectA">
            <label>{label}</label>
            <select name={name} onChange={handleChange}>
                <option value="">Elige un {title}</option>
                {data &&
                    data.map((el) => (
                        <option key={el[dataKey]} value={el[dataKey]}>
                            {el[dataKey]}
                        </option>
                    ))}
            </select>
        </div>
    )
}
export default SelectComponent;
