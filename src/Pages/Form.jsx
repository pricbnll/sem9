import styles from './style.module.css'

function SimpleForm() {
  return (
    <>
      <div className={styles.container}>
        <h2>*Preencha os campos*</h2>

        <form className={styles.formContainer}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className={styles.formLabel}>
              Nome
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="exampleInputNome"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              className={styles.formControl}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className={styles.formLabel}>
              Password
            </label>
            <input
              type="password"
              className={styles.formControl}
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SimpleForm;
