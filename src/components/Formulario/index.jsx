import { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const imc = () => {
        const calc = peso / (altura * altura);

        if (calc < 18.5) {
            return (
                <p>Seu IMC é {calc}, baixo peso. </p>
            )
        } else if (calc >= 18.5 && calc < 25) {
            return (
                <p>Seu IMC é {calc}, normal. </p>
            )
        } else if (calc >= 25 && calc < 30) {
            return (
                <p>Seu IMC é {calc}, sobrepeso. </p>
            )
        } else if (calc >= 30 && calc < 35) {
            return (
                <p>Seu IMC é {calc}, Obesidade grau I. </p>
            )
        } else if (calc >= 35 && calc <= 40) {
            return (
                <p>Seu IMC é {calc}, Obesidade grau II. </p>
            )
        } else {
            return (
                <p>Seu IMC é {calc}, Obesidade grau III. </p>
            )
        }
    }

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Cálculo IMC</h1>
                <form>
                    <input className={styles.input} type="number" placeholder="Sua altura em metros" onChange={evento => setAltura(evento.target.value)} />
                    <input className={styles.input} type="number" placeholder="Seu peso em quilos" onChange={evento => setPeso(evento.target.value)} />
                </form>
                <p className={styles.p}>{imc()}</p>
            </div>
        </>
    )
}

export default Formulario