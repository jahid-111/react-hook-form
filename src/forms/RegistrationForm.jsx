import FieldSet from "../components/FieldSet";
import Field from "../components/Field";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import NumberInput from "../components/NumberInput";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  function submitForm(regData) {
    console.log(regData);
  }

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

          <Field label="Full Name" error={errors.fullName}>
            <input
              {...register("fullName", {
                required: "Required Full Name",
              })}
              className={`p-2 border box-border outline-none w-[300px] rounded-md ${
                !errors.fullName ? "border-gray-400" : " border-red-500"
              }`}
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter Full Name"
            />
          </Field>

          <Field label="Age" error={errors.age}>
            <Controller
              name="age"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`p-2 border box-border outline-none w-[300px] rounded-md ${
                    !errors.fullName ? "border-gray-400" : " border-red-500"
                  }`}
                  {...field}
                ></NumberInput>
              )}
              rules={{
                min: {
                  value: 18,
                  message: "age Must be 18+",
                },
              }}
            ></Controller>
          </Field>

          <FieldSet label="Add Social Link">
            {fields.map((field, i) => {
              return (
                <div
                  className=" flex justify-center items-center mx-auto m-3"
                  key={field.id}
                >
                  <Field label={"Social Name"}>
                    <input
                      {...register(`socials[${i}].name`)}
                      className={`p-2 mr-2 border box-border outline-none w-[80px] rounded-md ${
                        !errors.age ? "border-gray-400" : " border-red-500"
                      }`}
                      type="text"
                      name={`socials[${i}.name]`}
                      id={`socials[${i}.name]`}
                      placeholder="Name"
                    />
                  </Field>

                  <Field label={"Social URL"}>
                    <input
                      {...register(`socials[${i}].name`)}
                      className={`p-2 border box-border outline-none w-[180px] rounded-md ${
                        !errors.age ? "border-gray-400" : " border-red-500"
                      }`}
                      type="text"
                      name={`socials[${i}.name]`}
                      id={`socials[${i}.name]`}
                      placeholder="Url"
                    />
                  </Field>

                  <button
                    onClick={() => remove(i)}
                    className=" bg-red-600 w-[30px] text-white px-6 py-2 font-bold inline mt-10 rounded-md"
                  >
                    -
                  </button>
                </div>
              );
            })}

            <div></div>
            <button
              className=" bg-yellow-300 font-semibold text-lime-900 px-6 py-2 "
              onClick={() => append({ name: "", url: "" })}
            >
              Add
            </button>
          </FieldSet>
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

export default RegistrationForm;
