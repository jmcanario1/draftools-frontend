import { useForm } from "react-hook-form";
import FormCard from "../../../../shared/components/GeneralForm";
import { CreatePlayerPageContainer } from "./styles";

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
    <CreatePlayerPageContainer>
      <FormCard title="Create Player Page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Nome"/>
          <input {...register("pot")} placeholder="Pote"/>
          <input {...register("position")} placeholder="Posição"/>
          <button type="submit">Cadastrar Jogador</button>
        </form>
      </FormCard>
      <div className="list-placeholder" style={{ width: "45%", background: "black" }}/>
    </CreatePlayerPageContainer>
  )
}

export default CreatePlayerPage;