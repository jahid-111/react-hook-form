import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { useForm } from "react-hook-form";

const LoginForms = () => {
  const { register, handleSubmit } = useForm();
  // console.log(register())

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className=" flex flex-col justify-center items-center sm:w-5/12 mx-auto bg-gray-200 rounded-lg">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Data">
          <Field label="Email">
            <input
              {...register("email")}
              className=" p-2 border box-border w-[300px] rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder=" email@mail.com"
            />
          </Field>
          <Field label="Password">
            <input
              {...register("password")}
              className=" p-2 border box-border w-[300px] rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Strong password"
            />
          </Field>
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
