"use client";

import { useForm, SubmitHandler } from "react-hook-form";

const Search = ({ setSearch }: { setSearch: Function }) => {
  const { register, handleSubmit } = useForm<{ search: string }>();

  const onSubmit: SubmitHandler<{ search: string }> = (data) => {
    //
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-x-7">
      <input
        type="text"
        {...register("search")}
        className="border border-gray-400 py-2 px-3 rounded-md w-[400px]"
        placeholder="Search ..."
      />
      <button
        type="submit"
        className="bg-black text-white rounded py-2 px-2 w-[80px]">
        Search
      </button>
    </form>
  );
};

export default Search;
