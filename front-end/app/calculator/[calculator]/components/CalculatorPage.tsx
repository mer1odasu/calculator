'use client';

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import CalcInput from "./CalcInput";

interface SettingsModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const CalculatorPage: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // Рекомендуется добавить логику здесь
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        {/* Новый раздел: Спецификация измерений */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold">Спецификация измерений:</h2>
          <div className="mt-6 grid grid-cols-2 gap-6">
						<>
            <div className="flex flex-col">
              <label htmlFor="measurement1" className="text-sm text-gray-700">Результат измерений X</label>
							<CalcInput
								id="measurement1"
								register={register}
							/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="measurement2" className="text-sm text-gray-700">Абсолютная погрешность [Δ]: ±</label>
              <CalcInput
                id="measurement2"
                register={register}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="measurement3" className="text-sm text-gray-700">Единица измерений</label>
              <CalcInput
                id="measurement3"
                register={register}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="measurement4" className="text-sm text-gray-700">Разрядность</label>
              <CalcInput
                id="measurement4"
                register={register}
              />
            </div>
						</>
          </div>
        </div>

        {/* Новые секции с заголовками и инпутами */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Расчёт стандартных неопределённостей результатов измерений по типу В:</h2>
            <label htmlFor="section1Input" className="text-sm text-gray-700">Ub∆=</label>
            <CalcInput
              id="section1Input"
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Расчёт суммарной неопределённости:</h2>
            <label htmlFor="section2Input" className="text-sm text-gray-700">Uc=</label>
            <CalcInput
              id="section2Input"
              register={register}
            />
          </div>
        </div>
				<div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Вычисление расширенной неопределённости (U):</h2>
            <label htmlFor="section1Input" className="text-sm text-gray-700">Ub∆=</label>
            <CalcInput
              id="section1Input"
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Представление результатов оценивания неопределенности:</h2>
            <label htmlFor="section2Input" className="text-sm text-gray-700">Uc=</label>
            <CalcInput
              id="section2Input"
              register={register}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button disabled={isLoading} secondary onClick={onClose}>
          Отмена
        </Button>
        <Button disabled={isLoading} type="submit">
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default CalculatorPage;
