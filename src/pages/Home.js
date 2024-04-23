import React, { useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';
import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
import DateFilter from '@inovua/reactdatagrid-community/DateFilter';
import moment from 'moment';
import 'moment/locale/en-gb';

const people = [
  { id: 1, name: 'John Doe', age: 30, country: 'usa', birthDate: '1992-05-10', city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, country: 'uk', birthDate: '1997-08-15', city: 'London' },
  { id: 3, name: 'Carlos Garcia', age: 40, country: 'usa', birthDate: '1982-03-20', city: 'Los Angeles' },
  { id: 4, name: 'Maria Rodriguez', age: 35, country: 'ca', birthDate: '1987-11-05', city: 'Toronto' },
  { id: 5, name: 'Mohammed Ali', age: 28, country: 'usa', birthDate: '1993-01-25', city: 'Chicago' }
];

const gridStyle = { minHeight: 600 };

const filterValue = [
  { name: 'name', operator: 'startsWith', type: 'string', value: '' },
  { name: 'age', operator: 'gte', type: 'number', value: 21 },
  { name: 'city', operator: 'startsWith', type: 'string', value: '' },
  { name: 'birthDate', operator: 'before', type: 'date', value: '' },
];

const columns = [
  { name: 'id', header: 'Id', defaultVisible: false, defaultWidth: 80, type: 'number' },
  { name: 'name', header: 'Name', defaultFlex: 1, enableColumnFilterContextMenu: true },
  { name: 'age', header: 'Age', defaultFlex: 1, type: 'number', filterEditor: NumberFilter },
  {
    name: 'birthDate',
    header: 'Birth date',
    defaultFlex: 1,
    minWidth: 200,
    enableColumnFilterContextMenu: false,
    filterEditor: DateFilter,
    filterEditorProps: (props, { index }) => {
      // for range and notinrange operators, the index is 1 for the after field
      return {
        dateFormat: 'MM-DD-YYYY',
        cancelButton: false,
        highlightWeekends: false,
        placeholder: index === 1 ? 'Created date is before...' : 'Created date is after...',
      };
    },
    render: ({ value }) => moment(value).format('MM-DD-YYYY'),
  },
  { name: 'city', header: 'City', defaultFlex: 1 },
];

const App = () => {
  const [enableColumnFilterContextMenu, setEnableColumnFilterContextMenu] = useState(true);

  return (
    <div>
      <h3>Consulta de Clientes Agro</h3>

      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        defaultFilterValue={filterValue}
        columns={columns}
        dataSource={people}
        enableColumnFilterContextMenu={enableColumnFilterContextMenu}
      />
    </div>
  );
};

export default App;
