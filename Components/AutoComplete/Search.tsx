"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Display = ({ search }: { search: string }) => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["users", search],
    queryFn: async function getUsersBySearch() {
      const response = await axios.get(
        `http://dummyjson.com/users/search?q=${search}`
      );
      return response.data.users;
    },
  });

  if (isError) {
    return <h2>Error Fetching data..</h2>;
  }

  if (data.length === 0) {
    return <h2>{`No user Found with name ${search}`} </h2>;
  }
  return (
    <>
      {search.length > 0 &&
        data.map((singleData: any) => {
          const { id, firstName } = singleData;
          return <p key={id}>{firstName}</p>;
        })}
    </>
  );
};

const Search = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch((prev) => e.target.value)}
        className="border border-red-300 text-black"
      />
      <Display search={search} />
    </div>
  );
};

export default Search;
