import { useQuery } from "@tanstack/react-query";


export function useRooms(){
    return useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch("http://localhost:3333/rooms");
            const result = await response.json();
            return result;
        },
    })
}