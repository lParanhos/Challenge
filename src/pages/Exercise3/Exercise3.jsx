import React, { Fragment } from "react";
import FighterSelector from "./FighterSelector/FighterSelector";
import DescriptionExercise from "../DescriptionExercise";
import classes from "./Exercise3.module.scss";

const instructions = [
    "Corrija a foto do lutador que não está sendo atualizada quando o mesmo é trocado.",
    "Cada vez que um lutador é trocado, uma nova linha deve aparecer no History indicando que ele foi selecionado.",
    "Apenas uma linha está sendo exibida se múltiplas trocas ocorrem em um curto intervalo de tempo. (Clique repetidamente até o último lutador e observe o History)",
    "Os dois painéis devem estar funcionando.",
    "Não é permitido remover o setTimeOut/useEffect.",
    "A solução final não deve apresentar nenhum erro ou warning no console do browser."
];

function Exercise3() {
    return (
        <Fragment>
            <DescriptionExercise instructions={instructions} />
            <div className={classes.Exercise3}>
                <FighterSelector />
                <FighterSelector />
            </div>
        </Fragment>
    );
}

export default Exercise3;