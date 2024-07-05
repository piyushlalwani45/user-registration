import { AddGroundType } from "@/types/AddGroundType";
import { GetGroundType } from "@/types/GetGroundType";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export function GetGroundsData() {
  return useQuery({
    queryKey: ["GetGroundData"],
    queryFn: async () => {
      try {
        const response = await axios.get("/api/ground");
        return response.data as GetGroundType[];
      } catch (error) {
        console.log(error, "error");
      }
    },
  });
}

export async function AddGround() {
  const router = useRouter();
  return useMutation({
    mutationKey: ["AddGround"],
    mutationFn: async (data: AddGroundType) => {
      try {
        const response = await axios.post("/api/ground", data, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(response.status);
        router.push("/userdetails");
      } catch (error) {
        console.log(error, "error");
      }
    },
  });
}

export function DeleteGroundData() {
  const groundData = GetGroundsData();
  return useMutation({
    mutationKey: ["DeleteGroundData"],
    mutationFn: async (id: string) => {
      try {
        const response = await axios.delete(`/api/ground/${id}`);
        console.log(response.data);
        groundData.refetch();
        // router.push('/dashboard')
      } catch (error) {
        console.log(error, "error");
      }
    },
  });
}

export function EditGroundData() {
  return useMutation({
    mutationKey: ["EditGroundData"],
    mutationFn: async ({ id, data }: { id: string; data: AddGroundType }) => {
      try {
        const response = await axios.put(`/api/ground/${id}`, data, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(response.status);
      } catch (error) {
        console.log(error, "error");
      }
    },
  });
}
