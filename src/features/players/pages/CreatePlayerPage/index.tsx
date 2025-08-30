import { useForm } from "react-hook-form";
import FormCard from "../../../../shared/components/GeneralForm";

type CreatePlayerData = {
  name: string;
  pot: number;
  position: string;
}

function CreatePlayerPage() {
  const { register, handleSubmit } = useForm<CreatePlayerData>();
  
  const onSubmit = (data: CreatePlayerData) => {
    console.log(data)
  }

  return (
    <>
      <FormCard title="Create Player Page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Nome"/>
          <input {...register("pot")} placeholder="Pote"/>
          <input {...register("position")} placeholder="Posição"/>
          <button type="submit">Cadastrar Jogador</button>
        </form>
      </FormCard>
    </>
  )
}

export default CreatePlayerPage;