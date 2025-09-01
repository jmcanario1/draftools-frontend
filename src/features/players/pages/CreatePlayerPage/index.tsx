import { useForm } from "react-hook-form";
import DraftoolsLogo from "../../../../assets/draftools.png";
import GeneralForm from "../../../../shared/components/GeneralForm";
import Input from "../../../../shared/components/Input";
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
      <GeneralForm icon={DraftoolsLogo} title="Create Player Page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Nome"/>
          <input {...register("pot")} placeholder="Pote"/>
          <input {...register("position")} placeholder="Posição"/>
          <Input label="Teste" name="Teste" placeholder="Teste"/>
          <button type="submit">Cadastrar Jogador</button>
        </form>
      </GeneralForm>
      <div className="list-placeholder" style={{ width: "100%", background: "repeating-linear-gradient(45deg, black, black 20px, yellow 20px, yellow 40px)", color: "red", textAlign: "center" }}>Listagem</div>
    </CreatePlayerPageContainer>
  )
}

export default CreatePlayerPage;