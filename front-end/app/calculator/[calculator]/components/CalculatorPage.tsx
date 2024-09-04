'use client';

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";

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
      section1InputExtended: "",
      section2InputExtended: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // Добавить логику здесь
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        {/* Раздел: Спецификация измерений */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-lg font-semibold px-6">Спецификация измерений:</h2>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="flex items-center px-6">
              <label htmlFor="measurement1" className="text-sm text-gray-700 w-1/2">Результат измерений X</label>
              <input
                id="measurement1"
                type="text"
                {...register("measurement1", { required: "Это поле обязательно." })}
                className="border rounded px-2 py-1 w-1/2"
              />
            </div>

            <div className="flex items-center px-6">
              <label htmlFor="measurement2" className="text-sm text-gray-700 w-1/2">Абсолютная погрешность [Δ]: ±</label>
              <input
                id="measurement2"
                type="text"
                {...register("measurement2", { required: "Это поле обязательно." })}
                className="border rounded px-2 py-1 w-1/2"
              />
            </div>

            <div className="flex items-center px-6">
              <label htmlFor="measurement3" className="text-sm text-gray-700 w-1/2">Единица измерений</label>
              <input
                id="measurement3"
                type="text"
                {...register("measurement3", { required: "Это поле обязательно." })}
                className="border rounded px-2 py-1 w-1/2"
              />
            </div>

            <div className="flex items-center px-6">
              <label htmlFor="measurement4" className="text-sm text-gray-700 w-1/2">Разрядность</label>
              <input
                id="measurement4"
                type="text"
                {...register("measurement4", { required: "Это поле обязательно." })}
                className="border rounded px-2 py-1 w-1/2"
              />
            </div>
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
