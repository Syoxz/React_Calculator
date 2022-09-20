import React, { useEffect } from 'react'


export default function Buttons() {

    useEffect(() => {
        const buttons = document.querySelectorAll(".btn").forEach(btn => btn.addEventListener('click', () => {
            document.querySelector(".output").innerText += btn.innerText;
        }))
    });

    function calculate () {
        const output = document.querySelector(".output").innerText;
        const result = eval (output);
        document.querySelector(".output").innerText = result;
        
    }


    return (
        <>
            <div class="grid-container">
                <button type="button" className="btn grid-item">+</button>
                <button type="button" className="btn grid-item">-</button>
                <button type="button" className="btn grid-item">*</button>
                <button type="button" className="btn grid-item">/</button>

                <button type="button" className="btn grid-item">7</button>
                <button type="button" className="btn grid-item">8</button>
                <button type="button" className="btn grid-item">9</button>


                <button type="button" onClick = {calculate} className="grid-item equals ">=</button>
                <button type="button" className="grid-item">DEL</button>


                <button type="button" className="btn grid-item">4</button>
                <button type="button" className="btn grid-item">5</button>
                <button type="button" className="btn grid-item">6</button>

                <button type="button" className="btn grid-item">1</button>
                <button type="button" className="btn grid-item">2</button>
                <button type="button" className="btn grid-item">3</button>

                <button type="button" className="btn grid-item">0</button>
                <button type="button" className="btn grid-item">.</button>
                <button type="button" className="grid-item">C</button>


            </div>

        </>
    )


}


