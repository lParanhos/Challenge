import React from "react";
import { Link } from "react-router-dom";
import DescriptionExercise from "../DescriptionExercise";
import prototypeClimao from "../../assets/prototypes/climao.png";
import classes from "./Excercise4.module.scss";

const prototypeUrl =
    "//xd.adobe.com/spec/9ebd698b-429e-4369-51b6-da668ae21fd2-e88c";
const apiUrl = "//openweathermap.org/api";

const instructions = [
    "Neste exercício você terá que implementar um dashboard de previsão do tempo (use esse mesmo arquivo para implementar - você pode remover aqui o código que desejar).",
    () => (
        <>
            Você deve seguir todas as especificações do protótipo (seja o mais
            fiel ao protótipo):
            <Link target="_blank" to={prototypeUrl}>
                {" "}
                https:{prototypeUrl}
            </Link>
        </>
    ),
    () => (
        <>
            Use a api{" "}
            <Link target="_blank" to={apiUrl}>
                https:{apiUrl}
            </Link>{" "}
            para buscar dados de previsão do tempo.
        </>
    ),
    "Mostre temperatura em graus Celsius",
    "Mostre a cidade atual do usuário por padrão (dica: vamos testar com outras cidades)",
    "Mostre data atual formatada",
    "Buscar dados previsão usando a api indicada (você pode mockar os dados, mas irá receber menos pontos)",
    "Mostre temperatura, umidade, vento, direção vento atuais",
    "Mostre ícone de previsão do tempo de acordo com a previsão",
    "Buscar dados previsão para 5 dias da api indicada",
    "Mostre previsão para próximos 5 dias",
    "Pesquisar e alterar cidade"
];

export default function Exercise4() {
    return (
        <>
            <DescriptionExercise instructions={instructions} />
            <img
                alt="Protótipo"
                src={prototypeClimao}
                className={classes.PrototypeImage}
            />
        </>
    );
}
