import React from 'react';
import Min from '../.../../../../../assets/images/media.svg';
import Max from '../.../../../../../assets/images/maxima.svg'
import Localizacao from '../.../../../../../assets/images/localizacao.svg';
import Nuvem from '../.../../../../../assets/images/nublado.svg';


import './style.css';

export default function Principal() {
    return (
        <div className="box">
            <div className="row">
                <div className="localDia">
                    <div style={{ margin: 10 }}>
                        <img src={Localizacao} alt="ok" />
                        <strong style={{ fontSize: 26, marginLeft: 10 }}>Campinas</strong>
                    </div>
                    <p>Testetetateetaaateet</p>
                </div>
                <div className="minMax">
                    <div>
                        <img src={Min} alt="ok" style={{ marginRight: 3 }} />
                        <span><strong>Min</strong> 15°</span>
                    </div>
                    <div style={{ marginLeft: 10 }}>
                        <img src={Max} alt="ok" style={{ marginRight: 3 }} />
                        <span><strong>Max</strong> 26°</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="sensacao">
                    <span className="graus">23°</span>
                    <span>Sensação termica 22°</span>
                </div>
                <div className="divider"></div>
                <div className="tempo">
                    <img src={Nuvem} alt="nuvem" style={{ width: 250, height: 158 }} />
                    <strong>Nublado</strong>
                </div>
            </div>
        </div>
    );
}
