"use client";

import React, { useState } from 'react';
import Button from '../../../components/Button';
import { useRouter } from 'next/navigation';

interface IndicatorsTable<T> {
  columns?: string[];
  data?: T[];
}

const IndicatorsTable = <T,>({ columns = [], data = [] }: IndicatorsTable<T>) => {
  const routes = useRouter();
  
  const [selectedRows, setSelectedRows] = useState<boolean[]>(Array(data.length).fill(false));
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleCheckboxChange = (index: number) => {
    setSelectedRows((prev) => {
      const newSelection = [...prev];
      newSelection[index] = !newSelection[index];
      return newSelection;
    });
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedRows(Array(currentRows.length).fill(checked));
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

  const handleDelete = () => {
    const selectedIndices = selectedRows
      .map((isSelected, index) => (isSelected ? index : -1))
      .filter(index => index !== -1);

    console.log("Удалить элементы:", selectedIndices);
    
    // Удаление строк
    const newData = data.filter((_, index) => !selectedRows[index]);
    setSelectedRows(Array(newData.length).fill(false)); // Сбросить выбранные строки
    // Здесь лучше обновлять данные в родительском компоненте или в состоянии
  };

  const handleCreate = () => {
    console.log("Создание нового элемента");
    // Логика создания нового элемента
  };

  const getPaginationRange = () => {
    const range = 5; // Количество отображаемых страниц
    let start = Math.max(1, currentPage - Math.floor(range / 2));
    let end = Math.min(totalPages, start + range - 1);

    if (end - start < range - 1) {
      start = Math.max(1, end - range + 1);
    }

    return Array.from({ length: Math.min(range, totalPages) }, (_, i) => start + i).filter(page => page > 0);
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between mb-4 items-center">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Поиск..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md px-2 py-2.5 w-64 text-sm"
          />
          <Button onClick={handleCreate}>Создать</Button>
          {selectedRows.some(Boolean) && (
            <Button danger onClick={handleDelete}>Удалить</Button>
          )}
        </div>
        <div>
          <label className="mr-1 text-sm">Строк на странице:</label>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="border rounded-md px-1 py-1 text-sm"
          >
            {[5, 10, 20].map(value => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto shadow-md">
        <table className="min-w-full border-collapse border border-gray-200 text-center text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 py-1 px-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  checked={currentRows.length > 0 && selectedRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).every(Boolean)}
                />
              </th>
              {columns.map((column, index) => (
                <th className="border border-gray-300 py-1 px-2" key={index}>
                  {column}
                </th>
              ))}
              <th className="border border-gray-300 py-1 px-2">Действия</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((row, rowIndex) => (
                <tr className="hover:bg-gray-50" key={rowIndex}>
                  <td className="border border-gray-300 py-1 px-2">
                    <input
                      type="checkbox"
                      checked={selectedRows[(currentPage - 1) * rowsPerPage + rowIndex] || false}
                      onChange={() => handleCheckboxChange((currentPage - 1) * rowsPerPage + rowIndex)}
                    />
                  </td>
                  {columns.map((column, colIndex) => (
                    <td className="border border-gray-300 py-1 px-2" key={colIndex}>
                      {(row as any)[column]}
                    </td>
                  ))}
                  <td className="border border-gray-300 py-1 px-2">
                    <button
                      onClick={() => console.log('Редактировать строку:', row)}
                      className="text-blue-500 hover:underline focus:outline-none text-sm"
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
      </div>

      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-2 py-1 text-sm ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'} rounded-l-md`}
        >
          &laquo; 
        </button>

        {getPaginationRange().map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-2 py-1 border border-gray-300 text-sm ${currentPage === page ? 'bg-gray-300' : ''}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 text-sm ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-200'} rounded-r-md`}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default IndicatorsTable;
