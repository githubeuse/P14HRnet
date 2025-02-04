import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import { fr } from 'date-fns/locale/fr';
registerLocale('fr', fr);
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({locale, selected, onChange, id, name }) => {
    return (
        <DatePicker
            locale={locale}
            selected={selected}
            onChange={onChange}
            id={id}
            name={name}
        />

    )
}

CustomDatePicker.propTypes = {
    locale: PropTypes.string.isRequired,
    selected: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default CustomDatePicker; 