"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import Modal from "@/app/components/modals/Modal";

interface CreateUserModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
		defaultValues: {
			login: "",
			name: "",
			surname: "",
			patronymic: "",
			mail: "",
			password: "",
    },
  });


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2
              className="
                text-base 
                font-semibold 
                leading-7 
                text-gray-900
                dark:text-gray-200
              "
            >
              Зарегистрировать пользователя
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
              Введите данные пользователя для регистрации.
            </p>

            <div className="mt-10 flex flex-col gap-y-8">
							<>
							<Input
								label="Логин"
								id="login"
								register={register}
							/>
							<Input
                label="Имя"
                id="name"
                register={register}
              />
								<Input
								label="Почта"
								id="email"
								register={register}
							/>
								<Input
                label="Пароль"
                id="password"
                register={register}
              />
							</>
            </div>
          </div>
        </div>

        <div
          className="
            mt-6 
            flex 
            items-center 
            justify-end 
            gap-x-6
          "
        >
          <Button disabled={isLoading} secondary onClick={onClose}>
            Отмена
          </Button>
          <Button disabled={isLoading} type="submit">
            Сохранить
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateUserModal;
