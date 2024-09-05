'use client';

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import HistoryPage from "@/app/history/historypage/Components/HistoryPage";

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const CalculatorPage: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(""); // состояние для фильтрации

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      measurement1: "",
      measurement2: "",
      measurement3: "",
      measurement4: "",
      section1Input: "",
      section2Input: "",
      section1InputExtended: "",
      section2InputExtended: "",
      selectedOption: "",
    },
  });

  const options = [
    { value: "option1", label: "Опция 1" },
    { value: "option2", label: "Опция 2" },
    { value: "option3", label: "Опция 3" },
  ];

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(filter.toLowerCase())
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    // Добавить логическую обработку здесь
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        {/* Селектор выбора с фильтром */}
        <div className="px-6">
          <label htmlFor="selectOption" className="text-md border-gray-900/10 font-semibold">Определяемый показатель</label>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Поиск..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded px-2 py-1 w-full mb-2"
              list="optionsList" // Привязываем к datalist
            />
            <datalist id="optionsList">
              {filteredOptions.map(option => (
                <option key={option.value} value={option.label} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Раздел: Спецификация измерений */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold px-6">Спецификация измерений:</h2>
          <div className="mt-6 grid grid-cols-2 gap-6">
            {["Результат измерений X", "Единица измерений", "Абсолютная погрешность [Δ]: ±", "Разрядность"].map((label, index) => (
              <div key={index} className="flex items-center px-6">
                <label htmlFor={`measurement${index + 1}`} className="text-sm text-gray-700 w-1/2">{label}:</label>
                <input
                  id={`measurement${index + 1}`}
                  type="text"
                  {...register(`measurement${index + 1}`, { required: "Это поле обязательно." })}
                  className="border rounded px-2 py-1 w-1/2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Раздел: Расчёты */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold px-6">Расчёты:</h2>
          <div className="mt-6 grid grid-cols-2 gap-6">
            {["Расчёт стандартных неопределённостей (Ub∆=)", "Расчёт суммарной неопределённости (Uc)", "Вычисление расширенной неопределённости (U)", "Представление результатов оценивания неопределённости (X)"].map((label, index) => (
              <div key={index} className="flex items-center px-6">
                <label htmlFor={`calculation${index + 1}`} className="text-sm text-gray-900 w-1/2">{label}:</label>
                <input
                  id={`calculation${index + 1}`}
                  type="text"
                  {...register(`calculation${index + 1}`, { required: "Это поле обязательно." })}
                  className="border rounded px-2 py-1 w-1/2"
                />
              </div>
            ))}
          </div>
					{/* Кнопки */}
					<div className="mt-6 flex items-center justify-end gap-x-6 px-6">
						<Button disabled={isLoading} secondary onClick={onClose}>
							Отмена
						</Button>
						<Button disabled={isLoading} type="submit">
							Сохранить
						</Button>
					</div>
        </div>
      </form>
      <HistoryPage />
    </div>
  );
};

export default CalculatorPage;
