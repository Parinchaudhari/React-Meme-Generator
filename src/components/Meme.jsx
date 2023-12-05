import React, { useEffect, useState } from 'react'
import '/index.css'

export default function Meme() {
    const [datas, setdatas] = useState([])
    const [text, settext] = useState({ topText: "", bottomText: "", src: "https://i.imgflip.com/m78d.jpg",terms:true})
    console.log(text)

    const handleOnchange = (e) => {
        const { name, value,checked,type} = e.target
        settext(pre => {
            return {
                ...pre,
                [name]: type=='checkbox'?checked:value
            }
        }
        )
    }

    const getImg = () => {
        settext((pre) => {
            return {
                ...pre,
                src: datas[Math.floor(Math.random() * 100)].url || 'https://i.imgflip.com/m78d.jpg'
            }

        })
    }
    useEffect(() => {
        const getimg = async () => {
            let d = await fetch('https://api.imgflip.com/get_memes')
            let jdata = await d.json()
            console.log(jdata)
            console.log(jdata.data.memes)
            setdatas(jdata.data.memes)
        }
        getimg()
    }, [])

    return (
        <div className="container">
            <div className="forms my-3">

                {/* <ul>
                {datas.map((e,i)=>{
                    return <li>{e.url}</li>
                })}
            </ul> */}
                <div className="mb-3">
                    <label htmlFor="topText" className="form-label fs-6">Top Text</label>
                    <input type="text" className="form-control" id="topText" name='topText' aria-describedby="emailHelp" value={text.topText} onChange={handleOnchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="bottomText" className="form-label fs-6">Bottom Text</label>
                    <input type="text" className="form-control" id="bottomText" name='bottomText' onChange={handleOnchange} value={text.bottomText} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checboxterms" name='terms' checked={text.terms} onChange={handleOnchange} />
                    <label className="form-check-label" htmlFor="checboxterms">Terms Agreed</label>
                </div>
                <button type="submit" onClick={getImg} className="btn btn-primary">Get Image</button>
            </div>

            <div className="centers my-5">

                <div className='memess'>
                    <img src={text.src} alt="" width="100%" height="auto" />
                    <h2 className='top-meme-text '>{text.topText}</h2>
                    <h2 className='bottom-meme-text'>{text.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}
