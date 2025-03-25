"use client";

import { GetStarWarsPeople } from "@/actions/starwars";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function StarWarsPage() {
  const [peopleId, setPeopleId] = useState("1");

  const { data, error, isPending } = useQuery({
    queryKey: ["starwars", "people", peopleId],
    queryFn: () => GetStarWarsPeople({ peopleId }),
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Star Wars people</h1>
      <input
        type="number"
        value={peopleId}
        onChange={(e) => setPeopleId(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4"
      />
      {isPending && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
