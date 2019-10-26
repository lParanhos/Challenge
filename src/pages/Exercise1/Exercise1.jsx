import React, { Component } from "react";
import axios from "axios";
import DescriptionExercise from "../DescriptionExercise";
import { ReactComponent as PokeballIcon } from "../../assets/icons/pokeball.svg";
import classes from "./Exercise1.module.scss";
import Card from "./Card/Card";

const instructions = [
    "Identifique e corrija todos os pontos que estão impactando(ou podem impactar no futuro) a performance da página.",
    "Corrija os pontos do código que vão contra as convenções do React.",
    "Sempre que um item é mudado de lista, ele deve aparecer na primeira posição da outra lista.",
    "Não mude a estrutura da página (tabelas, cards, etc...) e nem dos componentes (Stateless -> Stateful / Stateful -> Stateless)",
    "Não use Hooks.",
    "A solução final não deve apresentar nenhum erro ou warning no console do browser."
];
class Exercise1 extends Component {
    state = {
        availableElements: [],
        selectedElements: []
    }
    
    componentWillMount() {
        const getPokemonNumber = pokemonNumber => {
            if (pokemonNumber < 10) return `00${pokemonNumber}`;
            if (pokemonNumber < 100) return `0${pokemonNumber}`;
            return pokemonNumber;
        };
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=500`).then(res => {
            const availableElements = res.data.results.map((item, ix) => {
                return ({
                    number: getPokemonNumber(ix + 1),
                    ...item
                })
            });
            this.setState({ availableElements });
        });
    }

    render() {
        const getPokemonIconURL = pokemonNumber => `https://www.serebii.net/pokedex-sm/icon/${pokemonNumber}.png`;
        return (
            <div className={classes.Exercise1}>
                <DescriptionExercise instructions={instructions} />
                <div className={classes.Exercise1Container}>
                    <div className={classes.AvailableContainer}>
                        <table className={classes.Table}>
                            <tbody>
                                {this.state.availableElements.map((element, index) => (
                                    <tr key={Math.random()}>
                                        <td className={classes.Number}>
                                            <div>{`#${element.number}`}</div>
                                        </td>
                                        <td className={classes.Description}>
                                            <div className={classes.PokemonContainer}>
                                                <img src={getPokemonIconURL(element.number)} alt="Pokemon Icon"/>
                                                <span>{element.name}</span>
                                            </div>
                                        </td>
                                        <td className={classes.Action}>
                                            <PokeballIcon onClick={() => {
                                                this.setState({
                                                        selectedElements: this.state.availableElements.splice(index, 1).concat(this.state.selectedElements)
                                                });
                                            }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className={classes.CaptureContainer}>
                        {this.state.selectedElements.map((element, index) => (
                            <Card 
                                key={Math.random()}
                                number={`#${element.number}`}
                                name={element.name}
                                src={getPokemonIconURL(element.number)}
                                onClick={() => (
                                    this.setState({
                                        availableElements: this.state.selectedElements.splice(index, 1).concat(this.state.availableElements)
                                    })
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Exercise1;