import logo from './logo.svg';
import './App.css';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import products from './products.json';

function App() {
  return (
    <Grid
    // style={{ height: '400px' }}
    data={[ ...products ]}
    reorderable
>
<Column field="ProductID" title="ID" width="40px" />
                <Column field="ProductName" title="Name" width="250px" />
                <Column field="Category.CategoryName" title="CategoryName" />
                <Column field="UnitPrice" title="Price" />
                <Column field="UnitsInStock" title="In stock" />
                <Column
                    field="Discontinued"
                    cell={props => (
                        <td>
                            <input disabled type="checkbox" checked={props.dataItem[props.field]} />
                        </td>
                    )}
                />
</Grid>
  );
}

export default App;
