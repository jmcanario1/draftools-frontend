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
      <div className="list-placeholder" style={{ width: "45%", background: "black" }}/>
    </CreateTeamPageContainer>
  )
}

export default CreateTeamPage;