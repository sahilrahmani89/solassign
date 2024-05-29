import React from 'react';
import './customTable.css'

// const datas = [
//   { id: 1, name: 'John', country: 'USA', region: 'North America' },
//   { id: 2, name: 'Alice', country: 'UK', region: 'Europe' },
//   { id: 3, name: 'Bob', country: 'Canada', region: 'North America' },
// ];

const CustomTable = (data) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Country</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.country}</td>
            <td>{item.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
