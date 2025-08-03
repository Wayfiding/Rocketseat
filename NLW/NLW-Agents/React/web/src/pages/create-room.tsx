import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type  GetRoomsAPIResponse = Array<{
    id: string
    name: string
}>

export function CreateRoom() {

    const { data, isLoading} = useQuery({
        queryKey: ["get-room"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3333/rooms");
            const result :GetRoomsAPIResponse = await response.json();
            return result;
        }
    })
	return (
		<div>
			<div>Create Room</div>
            {
                isLoading ? (
                    <span>Loading...</span>
                ) : (
                    <ul>
                        {data?.map((room) => (
                            <li key={room.id}><Link to={`/room/${room.id}`}>{room.name}</Link></li>
                        ))}
                    </ul>
                )
            }
			<Link to="/room" className={"underline"}>
				Acessar Sala
			</Link>
		</div>
	);
}