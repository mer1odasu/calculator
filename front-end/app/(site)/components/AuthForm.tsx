'use client'

import Button from "@/app/components/Button";
import Input from "../../components/inputs/Input";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = 'LOGIN' |'REGISTER';


const AuthForm = () => {
	const [variant, setVariant] = useState<Variant>('LOGIN');
	const [isLoading, setIsLoading] = useState(false);

	const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
			login: "",
      password: "",
    },
  });

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
		// register logic here
		}

    if (variant === "LOGIN") {
      // login logic here
      }
  };

	return (
		<>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 dark:bg-dusk dark:sm:border-2 dark:border-lightgray">
					<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
						{variant === "REGISTER" && (
							<>
								<Input
									register={register} 
									id="name"
									label="Имя"
									type="text"
									/>
								<Input
									register={register} 
									id="email"
									label="Электронная почта"
									type="email"
									/>
							</>
						)}
						<Input
							register={register} 
							id="login"
							label="Логин"
							type="login"
						/>
						<Input
							register={register} 
							id="password"
							label="Пароль"
							type="password"
						/>
						<div>
							<Button fullWidth type="submit">
							{variant === "LOGIN" ? "Войти" : "Зарегистрироваться"}
							</Button>
						</div>
					</form>
					<div className="mt-6">
						<div className="relative">
							<div className="mt-6 flex justify-center gap-2 px-2 text-sm text-gray-500">
								<div>{variant === "LOGIN" ? "Впервые у нас?" : "У вас уже есть аккаунт?"}</div>
								<div onClick={toggleVariant} className="cursor-pointer underline">
              		{variant === "LOGIN" ? "Зарегистрироваться" : "Войти"}
          			</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AuthForm
