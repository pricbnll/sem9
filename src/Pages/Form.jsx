import styles from './style.module.css'
import { useForm } from "react-hook-form" 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect } from 'react'

const schema = yup.object({
    nome: yup.string().required("O nome é obrigatório."),
    email: yup.string().email("Email inválido.").required("O email é obrigatório."),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres.").required("A senha é obrigatória."),  
}).required()

function SimpleForm() {
    const { register, handleSubmit, watch, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        })

    useEffect(() => {
        console.log("Componente renderizado");
    }, []);

function onSubmit(userData){
    // console.log("onSubmit called")
    console.log(userData)
}
// console.log(errors)
console.log(watch("password"))

  return (
    <>
      <div className={styles.container}>
        <h2>*Preencha os campos*</h2>

        <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className={styles.formLabel}>
              Nome
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="exampleInputNome"
              aria-describedby="emailHelp"
              { ...register('nome' , { required: true })}
              />
              <span>{errors.nome?.message}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className={styles.formLabel}>
              Email
            </label>
            <input
            //coloquei type=text para nao conflitar com errors do html e yup
              type="text"
              className={styles.formControl}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              { ...register('email')}
            />
             <span>{errors.email?.message}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className={styles.formLabel}>
              Senha
            </label>
            <input
              type="password"
              className={styles.formControl}
              id="exampleInputPassword1"
              { ...register('password')}
            />
             <span>{errors.password?.message}</span>
          </div>

          <button type="submit" className="btn btn-primary">
            Cadastrar-se
          </button>
        </form>
      </div>
    </>
  );
}

export default SimpleForm;
