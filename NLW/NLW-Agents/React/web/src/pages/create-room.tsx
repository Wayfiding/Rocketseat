import { CreateRoomForm } from "@/components/create-room-form";
import { RoomList } from "@/components/room-list";


export function CreateRoom() {
	
	return (
		<div>
			<div className="min-h-screen p-4">
				<div className="mx-auto max-w-4xl">
					<div className="grid grid-cols-2 items-start gap-8">

					 <CreateRoomForm />
					 <RoomList />
					</div>
				</div>
			</div>
			
		</div>
	);
}
