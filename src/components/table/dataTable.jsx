import DataTable from 'react-data-table-component';
import { Form } from 'react-bootstrap';
const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function MyComponent() {
    return (
        // <DataTable
        //     columns={columns}
        //     data={data}
        // />
        <form>
        <table > 
            <tbody>
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
              <tr>
                <td>
                    <input type="text" />
                </td>
                <td>
                    <input type="text" />
                </td>
                <td>
                    <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                    <input type="text" />
                </td>
                <td>
                    <input type="text" />
                </td>
                <td>
                    <input type="text" />
                </td>
              </tr>
            </tbody>
        </table>
      </form>
    );
};

export default MyComponent;