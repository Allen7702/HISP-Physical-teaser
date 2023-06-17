import React from 'react';
import './App.css';
import TableComponent from './TableComponent';
import data from './data';
function App() {
  return (
    <div className="App m-10">
      <header className="m-6">
        <h1 className="text-4xl text-gray-500 font-bold">HISP TANZANIA Physical Development Teaser</h1>
      </header>
      <div className="App-content">
        <TableComponent data={data} />
      </div>
    </div>
  );
}

export default App;




<p>so based on that i want you to create a dynamic table that would look like this"
i want the top row to have three columns period, Animal Region(fetched from the jsonobject i gave you below ) and Food Region(fetched from the jsonobject i gave you below ) then the second row
 should divide the column of Animal Region and food region  to sub columns based on the number 
 of data(values) they have  then from the third row downwards, to display the period values and
   the values(data) of the data of  the 
   animal region and food region for each column.
</p>




