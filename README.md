BOOTSTRAP

No HTML coloque dentro da tag HEAD: 
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

Procurei um form overview e modifiquei o restante com CSS

[M2S09] Ex. 1 - Formulários com React Hook Form
Crie um formulário React para cadastro de usuários utilizando React Hook Form. O formulário deve incluir campos para nome, e-mail e senha.

1. Criei um form e seu CSS
2. ```npm install react-hook-form```
3. ```import { useForm } from "react-hook-form" ```
4. Dentro da function > ```const { register, handleSubmit, watch, formState: { errors }} = useForm()```
5. Dentro do input coloco > ```{ ... registrar ( "exemplo - name, email, senha" ) } ```-------- que ira mapear
6. Colocar handleSubmit > ``` <form className={styles.formContainer} onSubmit={handleSubmit()}> ```------- quem vamos chamar quando o formulário for enviado, usuario clicar no btn Cadastrar-se. Que função será chamada qdo clicar no btn Cadastrar-se.
7. Criar uma função de qq nome que vai receber os dados que estamos enviando e que estará dentro do handleSubmit  > ```function onSubmit(userData){console.log(userData)} ```
8. Ainda não esta aparecendo ao clicar no btn (errors estão vindo vazio) > ```{ required: true }``` dentro do register > ```{ ...register('nome' , { required: true })}``` deixando required e não deixando cadastrar.
````

````

9. Handle Erros no site do [React Hook Form](https://react-hook-form.com/) 
    9.1. Instalar Yup ````npm install @hookform/resolvers yup````
    9.2. Importar 
    ```
        import { yupResolver } from "@hookform/resolvers/yup"
        import * as yup from "yup"
    ```
    9.3. Criar Schema abaixo do import
    ```
        const schema = yup
            .object({
                firstName: yup.string().required(),
                age: yup.number().positive().integer().required(),
            })
        .required()
    ```
    9.4. Dentro do useForm colocamos o Schema 
    ```
        const { register, handleSubmit, watch,  formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        })
    ```
    9.5. Melhorar Yup
     ```
        const schema = yup.object({
            nome: yup.string().required("O nome é obrigatório."),
            email: yup.string().email("Email inválido.").required("O email é obrigatório."),
            password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres.").required("A senha é obrigatória."),  
        }).required()
    ```
    Um exemplo de validação para confirmar senha:
    ```
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'As senhas devem coincidir')
            .required('A confirmação de senha é obrigatória.'),
    ```
10. Abaixo do input coloque a mensagem de errors para cada input - nome, email, password
```<span>{errors.nome?.message}</span>```
11. Watch = serve para monitorar um campo e conform foi digitando um campo vai monitorando dentro da função abaixo do useForm() cada tecla digitada
```
    console.log(watch("password"))
```
12. Adicionei um useEffect para logar uma mensagem sempre que o componente for renderizado. Isso ajudará a identificar se o componente está sendo renderizado mais vezes do que o esperado.
````
    useEffect(() => {
        console.log("Componente renderizado");
    }, []);
````

[Video de explicação Super Maravilhoso](https://www.youtube.com/watch?v=selI69g6oc4&t=1468s)
 



    

    



