// TableManagement.jsx
import React, { useState } from "react";
import Draggable from "react-draggable";

const initialTables = [
  { id: 1, x: 20, y: 20 },
  { id: 2, x: 150, y: 20 },
  { id: 3, x: 20, y: 150 },
];

const TableManagement = () => {
  const [tables, setTables] = useState(initialTables);

  const handleDrag = (e, data, id) => {
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.id === id ? { ...table, x: data.x, y: data.y } : table
      )
    );
  };

  return (
    <div className="w-full h-screen bg-gray-100 p-[2vw]">
      <h1 className="text-2xl font-bold mb-4">Table Management</h1>

      <div
        className="relative w-[75vw] h-[30vw] bg-white border shadow-md rounded-md"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: `${75 / 50}vw ${30 / 20}vw`,
        }}
      >
        {tables.map((table) => (
          <Draggable
            key={table.id}
            position={{ x: table.x, y: table.y }}
            onDrag={(e, data) => handleDrag(e, data, table.id)}
            bounds="parent"
            grid={[22.3, 22.3]}
          >
            <div className="absolute bg-blue-500 text-white rounded-md h-[1.5vw] w-[1.5vw] cursor-move">
              {/* Table {table.id} */}
            </div>
          </Draggable>
        ))}
      </div>

      <div className="mt-6 text-left w-full max-w-3xl">
        <h2 className="text-lg font-semibold mb-2">Current Positions</h2>
        <pre className="bg-gray-200 p-2 rounded">
          {JSON.stringify(tables, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default TableManagement;
