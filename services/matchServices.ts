import { GetUser as GetUserType } from "@/types//GetUser";
import { AddUser as AddUserType, } from "@/types/AddUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export async function AddUser() {
    const router = useRouter()
    return useMutation({
        mutationKey: ["AddUser"],
        mutationFn: async (data : AddUserType) => {
            try {
                const response = await axios.post('/api/user', data, { headers: { 'Content-Type': 'application/json' } });
                console.log(response.status);
                router.push('/userdetails')
            } catch (error) {
                console.log(error, 'error');
            }
        }
    }
    )
}

export function GetUsersData() {
    return useQuery({
        queryKey: ['GetUsersData'],
        queryFn: async () => {
            try {
                const response = await axios.get('/api/user')
                return response.data as GetUserType[]
            } catch (error) {
                console.log(error, 'error');
            }
        }
    })
}

export function DeleteUsersData() {
    const matchData = GetUsersData()
    return useMutation({
        mutationKey: ["DeleteUserData"],
        mutationFn: async (id: string) => {
            try {
                const response = await axios.delete(`/api/user/${id}`);
                console.log(response.data);
                matchData.refetch()
                // router.push('/dashboard')
            } catch (error) {
                console.log(error, 'error');
            }
        }
    }
    )
}

export function EditUsersData() {
    return useMutation({
        mutationKey : ['EditMatchData'],
        mutationFn : async ({id, data} : {id : string, data: AddUserType}) => {
            try {
                const response = await axios.put(`/api/user/${id}`, data, { headers: { 'Content-Type': 'application/json' } });
                console.log(response.status);
            } catch (error) {
                console.log(error, 'error');
            }
        }
    })
}