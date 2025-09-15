import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useCreateRoom } from "@/http/use-create-rooms";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const createRoomSchema = z.object({
	name: z
		.string()
		.min(3, "O nome da sala deve ter no mínimo 3 caracteres")
		.max(50, "O nome da sala deve ter no máximo 50 caracteres"),
	description: z.string()
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;
export function CreateRoomForm() {
	const  {mutateAsync: createRoom}   = useCreateRoom()

	const createRoomForm = useForm<CreateRoomFormData>({
		resolver: zodResolver(createRoomSchema),
		defaultValues: {
			name: "",
			description: "",
		},
	});

	async function handleCreateRoom({name,description}: CreateRoomFormData) {
		await createRoom({name, description })
        createRoomForm.reset()
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle> Criar Sala </CardTitle>
				<CardDescription>
					Criar uma nova sala para começar a fazer pergunta e receber respostas
					da I.A.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...createRoomForm}>
					<form
						onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
						className="flex flex-col gap-4"
					>
						<FormField
							control={createRoomForm.control}
							name="name"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Nome da Sala</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="Digite o nome da Sala..."
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>
						<FormField
							control={createRoomForm.control}
							name="description"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Descrição</FormLabel>
										<FormControl>
											<Textarea {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>

						<Button type="submit" className="w-full">
							Criar Sala
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
