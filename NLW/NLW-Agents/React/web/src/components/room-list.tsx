import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { GetRoomsAPIResponse } from "@/http/types/get-rooms-response";
import { dayjs } from "@/lib/dayjs";
import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";

export function RoomList() {
	const { data, isLoading } = useQuery({
		queryKey: ["get-room"],
		queryFn: async () => {
			const response = await fetch("http://localhost:3333/rooms");
			const result: GetRoomsAPIResponse = await response.json();
			return result;
		},
	});
	return (
		<Card>
			<CardHeader>
				<CardTitle>Salas Recentes</CardTitle>
				<CardDescription>
					Acesso Rápido para as salas criadas recentemente.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				{isLoading && (
					<p className="text-muted-foreground text-sm">Carregando...</p>
				)}
				{data?.map((room) => {
					return (
						<Link
							key={room.id}
							className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent hover:cursor-pointer"
							to={`/room/${room.id}`}
						>
							<div className="flex-1 flex flex-col gap-1">
								<h3 className="font-medium">{room.name}</h3>
								<div className="flex items-center gap-2">
									<Badge variant={"secondary"}>
										{dayjs(room.createdAt).toNow()}
									</Badge>
									<Badge variant={"secondary"}>
										{room.questionCount}{" "}
										{room.questionCount === 1 ? "pergunta" : "perguntas"}
									</Badge>
								</div>
							</div>
							<span className="flex items-center gap-1 text-sm">
								Entrar
								<ArrowRight className="size-3" />
							</span>
						</Link>
					);
				})}
			</CardContent>
		</Card>
	);
}
