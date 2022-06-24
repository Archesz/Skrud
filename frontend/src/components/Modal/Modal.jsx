import React, {useState} from 'react'
import './Modal.scss'
import {AiOutlineClose} from 'react-icons/ai'

function Modal() {

    const [url, setUrl] = useState()

    function changeUrl(){
        let url = document.querySelector("#url").value
        if(url == ""){
            setUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/White_Square.svg/1200px-White_Square.svg.png")
        } else{
            setUrl(url)
        }
    }

    function addNewSkill(){
        let name = document.querySelector("#name").value;
        let icon = document.querySelector("#url").value;
        let nivel = document.querySelector("#nivel").value;
        let area = document.querySelector("#area").value
        let resume = document.querySelector("#resume").value

        let data = {"name": name, "icon": icon, "nivel": nivel, "area": area, "resume": resume}
        alert(data) 
    }

    return (
        <div id="modal-container">

            <div id="modal-field">

                <div className="modal-header">
                    <span className="modal-title">Adicionar Nova Habilidade </span>        
                    <AiOutlineClose className="icon-close"/>
                </div>

                <form className="modal-body" action="http://localhost:3100" method="post">

                    <div className="modal-top">

                        <div className="modal-inputs">
                            <div className="input-group">
                                <label className="modal-label">Nome</label>
                                <input type="text" placeholder="Ex: Python - Data Science" className="form-input" name="name" id="name"/>
                            </div>

                            <div className="input-group">
                                <label className="modal-label">Icone</label>
                                <input type="text" placeholder="URL" className="form-input" name="url" id="url" onChange={changeUrl}/>
                            </div>
                        </div>

                        <div className="modal-icon">
                            <img src={url} className="preview-icon"/>
                        </div>

                    </div>

                    <div className="input-group">
                        <label className="modal-label">Nível</label>
                        <select className="form-control" id="nivel" name="nivel">
                            <option value="Iniciante">Iniciante</option>
                            <option value="Regular">Regular</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Experiente">Experiente</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label className="modal-label">Área</label>
                        <select className="form-control" id="area" name="area">
                            <option value="Web Development">Web Development</option>
                        </select>
                    </div>


                    <div className="input-group">
                        <label className="modal-label">Descrição</label>
                        <textarea id="resume" name="resume" placeholder="Descrição" className="form-descript" maxLength="200"/>
                    </div>

                    <button className="btn-submit">Adicionar</button>

                </form>

            </div>

        </div>
    )
}

export default Modal