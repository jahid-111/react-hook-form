import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { useForm } from "react-hook-form";

const LoginForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (data) => {
    const user = { email: "xyz@mail.com", password: "12345678" };
    const found = data.email === user.email && data.password === user.password;
    if (!found) {
      setError("root.random", {
        message: `Uer not Valid  "${user.email}"`,
      });
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center sm:w-5/12 mx-auto bg-gray-200 rounded-lg">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Data">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Required E-mail" })}
              className={`p-2 border box-border outline-none w-[300px] rounded-md ${
                !errors.email ? "border-gray-400" : " border-red-500"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="xyz@mail.com"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Required Password",
                minLength: {
                  value: 8,
                  message: "Your Password Must be 8 Charactures",
                },
              })}
              className={`p-2 border box-border outline-none w-[300px] rounded-md ${
                !errors.password ? "border-gray-400" : " border-red-500"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Strong password"
            />
          </Field>
          <div>{errors?.root?.random?.message}</div>
          <Field>
            <button className=" bg-green-600 block w-full text-white px-6 py-2 rounded-md">
              Log In
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default LoginForms;
