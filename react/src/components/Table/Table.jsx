import DataTable from "react-data-table-component";
import PropTypes from "prop-types";

const Table = ({ columns, data }) => {
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    );
};

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
};

export default Table;