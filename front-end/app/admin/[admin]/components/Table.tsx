"use client";

import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useRouter } from 'next/navigation';

interface TableProps<T> {
  columns?: string[];
  data?: T[];
  roles?: string[];
}

const Table = <T,>({ columns = [], data = [], roles = [] }: TableProps<T>) => {

	const routes = useRouter();

  const [selectedRows, setSelectedRows] = useState<boolean[]>(Array(data.length).fill(false));
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleCheckboxChange = (index: number) => {
    setSelectedRows(prev => {
      const newSelection = [...prev];
      newSelection[index] = !newSelection[index];
      return newSelection;
    });
  };

  const filteredData = data.filter(row =>
    columns.some(column =>
      (row as any)[column]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const currentRows = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleRoleChange = (index: number, newRole: string) => {
    console.log(`Изменить роль для строки ${index}: ${newRole}`);
  };

  const handleCreate = () => {
    console.log("Создать новый элемент");
  };

  const handleDelete = () => {
    const selectedIndices = selectedRows
      .map((isSelected, index) => (isSelected ? index : -1))
      .filter(index => index !== -1);

    console.log("Удалить элементы:", selectedIndices);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full">
        <div className="flex justify-between mb-4 items-center">
          <div className="flex space-x-2">
            <Button onClick={handleCreate}>
              Создать
            </Button>
            <Button danger onClick={handleDelete} disabled={!selectedRows.some(Boolean)}>
              Удалить
            </Button>
          </div>
          <input
            type="text"
            placeholder="Поиск..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md px-2 py-1 w-48"
          />
        </div>

        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-center">
                <input
                  type="checkbox"
                  onChange={(event) => {
                    const newValue = event.target.checked;
                    setSelectedRows(Array(currentRows.length).fill(newValue));
                  }}
                  checked={selectedRows.every(Boolean)}
                />
              </th>
              {columns.map((column, index) => (
                <th className="py-2 px-4 border-b text-center" key={index}>
                  {column}
                </th>
              ))}
              <th className="py-2 px-4 border-b text-center">Роль</th>
              <th className="py-2 px-4 border-b text-center">Действия</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {currentRows.length > 0 ? (
              currentRows.map((row, rowIndex) => (
                <tr className="hover:bg-gray-100" key={rowIndex}>
                  <td className="py-2 px-4 border-b text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows[(currentPage - 1) * rowsPerPage + rowIndex] || false}
                      onChange={() => handleCheckboxChange((currentPage - 1) * rowsPerPage + rowIndex)}
                    />
                  </td>
                  {columns.map((column, colIndex) => (
                    <td className="py-2 px-4 border-b text-center" key={colIndex}>
                      {(row as any)[column]}
                    </td>
                  ))}
                  <td className="py-2 px-4 border-b text-center">
                    <select
                      defaultValue={(row as any).role}
                      onChange={(e) => handleRoleChange(rowIndex, e.target.value)}
                      className="border rounded-md bg-white text-black focus:outline-none px-1 py-1"
                    >
                      {roles.map((role, index) => (
                        <option key={index} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      onClick={() => console.log('Редактировать строку:', row)}
                      className="text-blue-500 hover:underline focus:outline-none"
                    >
                      Изменить
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 2} className="py-2 text-center">
                  Нет данных для отображения
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <label className="mr-2">Строк на странице:</label>
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="border rounded-md px-2 py-1"
            >
              {[5, 10, 20].map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center mx-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 text-gray-700 hover:bg-gray-200 rounded-l-md 
                          ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              &laquo; 
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 border border-gray-300 text-gray-700 hover:bg-gray-200 
                            ${currentPage === index + 1 ? 'bg-gray-300' : ''}`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 text-gray-700 hover:bg-gray-200 rounded-r-md 
                          ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
               &raquo;
            </button>
          </div>

          <div className="flex space-x-2">
            <Button secondary onClick={() => console.log("Отмена изменения!")}>
              Отмена
            </Button>
            <Button onClick={() => console.log("Данные сохранены!")}>
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
