import { useState } from "react"
import {Avatar} from "@mui/material";

function HomePage() {
    const[ showSaveButton, setShowSaveButton ] = useState(true)
    const[ note, setNote ] = useState("")
    const[ noteId, setNoteId ] = useState(null)
    const [ history, setHistory ] = useState([
        {
            "header": "Food recipe",
            "id": 1,
            "content": "Hello guys"
        }
    ])

    const onSelect = ({value = '', id = 0}) => {
        setNote(value)
        setNoteId(id)
    }

    return (
        <div style={{display: "grid", gridTemplateRows: "auto 1fr" }}>
            <div style={{display: "grid", gridTemplateColumns: "auto 1fr"}}>
                <div className="w-[450px] flex items-center p-6 bg-[#F6F6F6] border-[#030001]">
                    <Avatar sx={{ width: 40, height: 40 }} />
                    <p className="ml-2">Evaristus Adimonyemma</p>
                </div>
                <div className="p-6 bg-[#F6F6F6] border-[#030001] flex justify-end items-center">
                    <button className="text-center text-x whitespace-nowrap bg-[#2A2A2A] mr-4 p-3 rounded-md max-md:px-5"
                    style={{color: "#fff"}}>
                        Collaborate
                    </button>
                    <button className="text-center text-x whitespace-nowrap bg-[#eee] p-3 rounded-md max-md:px-5">
                        Log out
                    </button>
                </div>
            </div>
            <div className="h-full" style={{display: "grid", gridTemplateColumns: "auto 1fr"}}>
                <div className="w-[450px] br-black bg-[#F6F6F6] border-[#030001]">{
                    history.map((value, key) => {
                        return <div
                            key={key}
                            className="w-full px-8 py-4 cursor-pointer"
                            onClick={() => onSelect(value.content, value.id)}
                        >{ value.header }</div>
                    })
                }</div>
                <div className="w-full flex flex-col p-8">
                    <textarea
                        className="resize-none border-[#5A5959] mt-1 px-4 py-4 rounded-md w-full"
                        style={{height: "70vh"}}
                        value={note}
                        onChange={e => setNote(e.target.value)}
                    />
                    {
                        showSaveButton && <button
                            className="text-center text-x whitespace-nowrap bg-[#2A2A2A] max-w-full mt-7 py-4 rounded-md max-md:px-5"
                            style={{color: "#fff"}}
                        >
                            Create Note
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage