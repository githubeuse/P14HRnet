import Select from 'react-select';
import PropTypes from 'prop-types';

const DropdownMenu = ({ inputId, options, onChange, value, name }) => {
    return (
        <Select
            inputId={inputId}
            options={options}
            onChange={(selectedOption) => onChange(selectedOption, name)}
            value={value}
        />
    );
};

DropdownMenu.propTypes = {
    inputId: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.object,
    name: PropTypes.string.isRequired,
};

export default DropdownMenu;