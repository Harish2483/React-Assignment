/* eslint-disable react-refresh/only-export-components */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// const FormSchema = z.object({
//     username: z.string(),
//     email: z.string(),

// });

interface DataFunctionArgs {
  request: Request;
}

const FormSchema = z.object({
  username: z
    .string()
    .min(4, { message: "The username must be 4 characters or more" })
    .max(10, { message: "The username must be 10 characters or less" })
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "The username must contain only letters, numbers and underscore (_)"
    ),
  email: z.string().email({
    message: "Invalid email. Please enter a valid email address",
  }),
});

type FormInput = z.infer<typeof FormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  return (
    <form
      method="post"
      action="/contact"
      className="flex flex-col mt-10 bg-cyan-950 px-4 py-5 shadow rounded-lg sm:m-6 sm:p-6 w-full lg:w-3/6 text-gray-600"
      onSubmit={handleSubmit((d) => console.log(d))}
    >
      <div className="flex flex-col mt-4 ">
        <label htmlFor="username">Username</label>
        <input
          className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
          id="username"
          {...register("username")}
        />
        {errors?.username?.message && (
          <p className="text-red-700 mt-1">{errors.username.message}</p>
        )}
      </div>

      <div className="flex flex-col mt-4 ">
        <label htmlFor="email">Email</label>
        <input
          className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
          id="email"
          {...register("email")}
        />
        {errors?.email?.message && (
          <p className="text-red-700 mt-1">{errors.email.message}</p>
        )}
      </div>

      <button
        className="bg-purple-600 p-3 mt-12 rounded-lg text-white font-medium m-auto w-3/6 hover:opacity-75"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export const contactAction = async ({ request }: DataFunctionArgs) => {
  console.log(request);

  const data = await request.formData();

  const submission = {
    name: data.get("username"),
    email: data.get("email"),
  };

  console.log(submission);
};
