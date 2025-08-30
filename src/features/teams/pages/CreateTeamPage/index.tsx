import { useForm } from "react-hook-form";
import FormCard from "../../../../shared/components/GeneralForm";

type CreateTeamData = {
  name: string;
}

function CreateTeamPage() {
  const { register, handleSubmit } = useForm<CreateTeamData>();
  
  const onSubmit = (data: CreateTeamData) => {
    console.log(data);
  }

  return (
    <>
      <FormCard title="Create Team Page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Nome"/>
          <button type="submit">Cadastrar Time</button>
        </form>
      </FormCard>
    </>
  )
}

export default CreateTeamPage;