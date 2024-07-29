import styles from "./style.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

function SimpleFormIdade() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label className={styles.formLabel}>Nome</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Digite seu Nome completo" 
            {...register("nome", 
                { required: true }
            )}
            />
      </Form.Group>

      <Form.Group className="mb-3 ">
        <Form.Label className={styles.formLabel}>Email</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Digite seu email"
            {...register("email", 
                { required: true })
            }
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className={styles.formLabel}>Idade</Form.Label>
        <Form.Control 
            type="number" 
            placeholder="Digite sua idade" 
            {...register("idade", 
                { required: true,
                   min: {
                    value: 18,
                    message: 'A idade mínima para cadastro é 18 anos.'
                   }
                }
            )}
        />
         <span>{errors.idade?.message}</span>
        <br />
        <Form.Text className="text-muted">
          Você é maior ou menor de 18 anos?
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar-se
      </Button>
    </Form>
  );
}

export default SimpleFormIdade;
