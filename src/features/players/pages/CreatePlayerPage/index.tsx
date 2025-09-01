import { useForm } from "react-hook-form";
import DraftoolsLogo from "../../../../assets/draftools.png";
import Button from "../../../../shared/components/Button";
import GeneralForm from "../../../../shared/components/GeneralForm";
import { FormRow, FormWrapper } from "../../../../shared/components/GeneralForm/styles";
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
      <GeneralForm icon={DraftoolsLogo} title="Cadastrar Novo Jogador">
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Input {...register("name")} width="100%" label="Nome" placeholder="Ex.: João"/>
          </FormRow>
          <FormRow gap="16px" justify="space-between">
            <Input {...register("pot")} width="45%" label="Pote" placeholder="Ex.: 1"/>
            <Input {...register("position")} width="45%" label="Posição" placeholder="Ex.: Atacante"/>
          </FormRow>
          <Button type="submit" text="Cadastrar Jogador" color="#0b2e44"/>
        </FormWrapper>
      </GeneralForm>


      <div className="list-placeholder" style={{ width: "100%", background: "repeating-linear-gradient(45deg, black, black 20px, yellow 20px, yellow 40px)", color: "red", textAlign: "center" }}>Listagem</div>


    </CreatePlayerPageContainer>
  )
}

export default CreatePlayerPage;