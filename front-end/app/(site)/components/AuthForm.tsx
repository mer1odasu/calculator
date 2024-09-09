'use client'

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Button from "../../components/Button";
import Input from "../../components/inputs/Input";
import LoadingModal from "../../components/modals/LoadingModal";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  // const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
			surname: "",
			patronymic: "",
      email: "",
      password: "",
			login: ""
    },
  });

  // useEffect(() => {
	// 	  if (session?.status === "authenticated") {
	// 		    router.push("/calculator");
	// 		  }
  // }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/signup", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }

    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
            return;
          }

          if (callback?.ok) {
            toast.success("logged in");
            router.push("/calculator");
          }
        })
        .finally(() => setIsLoading(false));
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
									id="surname"
									label="Фамилия"
									type="text"
									/>
								<Input
									register={register} 
									id="patronymic"
									label="Отчество"
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
