import React, { useState } from 'react';
import './input.css'
import CollectionTable from '../grid/grid'
import axios from 'axios';
import ModalPopup from '../modal/modal'
const Input = () => {

    const [key, setKey] = useState();
    const [value, setValue] = useState();
    const [result, setResult] = useState();
    const [header, setHeader] = useState();
    const [griddata, setGridData] = useState();
    let onKeyChange = (e) => {
        setKey(e.target.value);
    }

    let onValueChange = (e) => {
        setValue(e.target.value);
    }

    let add = async () => {
        const data = { key: key, value: value }
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const result = await axios.post("http://localhost:3200/dictionary", data, config)
        setResult(result);
        setHeader("Add/Update");
    }

    let fetch = async () => {
        if (key && value) {
            const result = await axios.get("http://localhost:3200/dictionaryboth/" + key + "/" + value)
            if (result.status === 200) {
                setGridData(result.data);
            }
            else {
                setResult("Key doesn't exist");
                setHeader("Fetch Key & Value");
            }
        }
        else if (key && !value) {
            const result = await axios.get("http://localhost:3200/dictionary/" + key)
            if (result.status === 200) {
                setGridData(result.data);
            }
            else {
                setResult("Key doesn't exist");
                setHeader("Fetch Values");
            }
        }
        else if (!key && value) {
            const result = await axios.get("http://localhost:3200/dictionaryvalue/" + value)
            if (result.status === 200) {
                setGridData(result.data);
            }
            else {
                setResult("value doesn't exist");
                setHeader("Fetch Values");
            }
        }
    }

    let deletevalue = async () => {
        const data = { key: key, value: value }
        console.log(data);
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const result = await axios.post("http://localhost:3200/deletedictionary", data)
        setResult(result);
        setHeader("Delete one Record");

    }

    let deleteallvalue = async () => {
        const result = await axios.post("http://localhost:3200/deletealldictionary")
        setResult(result);
        setHeader("Delete all Records");

    }

    let fetchall = async () => {
        const result = await axios.get("http://localhost:3200/dictionaryall")
        if (Object.keys(result.data).length > 0) {
            setGridData(result.data);
        }
        else {
            setResult("No Records found");
            setHeader("Fetch All Records");
            setGridData(result.data);
        }

    }



    let reset = () => {
        setResult(null)
        setValue("")
        setKey("")
        setHeader("")
    }
    return (
        <div className="input">
            <div className="forminput">
                <p>Key:</p><span />
                <input className="keyName" type="text" value={key} onChange={onKeyChange} placeholder="Key.."></input>
                <p>Value:</p><span />
                <input className="valueName" type="text" value={value} onChange={onValueChange} placeholder="Value.."></input>
            </div>
            <div>
                <button className="btnAddUpdate" onClick={add} disabled={!key || !value}>Add/Update</button>
                <button className="btnDelete" onClick={deletevalue} disabled={!key || !value}>Delete</button>
                <button className="btnDeleteAll" onClick={deleteallvalue}>Delete All</button>
                <button className="btnFetch" onClick={fetch} disabled={!key && !value}>Fetch</button>
                <button className="btnFetchAll" onClick={fetchall} disabled={key || value}>Fetch All</button>
                <button className="btnReset" onClick={reset} >Reset</button>
                <CollectionTable griddata={griddata} displaydata={griddata ? true : false} />
                {result && <ModalPopup result={result.data || result} header={header} />}
            </div>
        </div>
    )
}

export default Input