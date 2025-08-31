import { useForm } from "react-hook-form";
import FormCard from "../../../../shared/components/GeneralForm";
import { CreateTeamPageContainer } from "./styles";

type CreateTeamData = {
  name: string;
}

function CreateTeamPage() {
  const { register, handleSubmit } = useForm<CreateTeamData>();
  
  const onSubmit = (data: CreateTeamData) => {
    console.log(data);
  }

  return (
    <CreateTeamPageContainer>
      <FormCard title="Create Team Page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Nome"/>
          <button type="submit">Cadastrar Time</button>
        </form>
      </FormCard>
      <div className="list-placeholder" style={{ width: "100%", background: "repeating-linear-gradient(45deg, black, black 20px, yellow 20px, yellow 40px)", color: "red", textAlign: "center" }}>Listagem</div>
    </CreateTeamPageContainer>
  )
}

export default CreateTeamPage;