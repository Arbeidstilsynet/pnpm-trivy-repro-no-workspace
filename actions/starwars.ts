"use server";

import axios from "axios";

export async function GetStarWarsPeople({ peopleId }: { peopleId: string }) {
  const response = await axios.get(`https://swapi.dev/api/people/${peopleId}`);
  return response.data;
}
