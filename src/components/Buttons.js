import React, { useEffect } from 'react'


export default function Buttons() {

    useEffect(() => {
        const buttons = document.querySelectorAll("button").forEach(btn => btn.addEventListener('click', () => {
            document.querySelector(".output").innerText += btn.innerText;
        }))
    });



    return (
        <>
            <div class="grid-container">
                <button type="button" className="grid-item">+</button>
                <button type="button" className="grid-item">-</button>
                <button type="button" className="grid-item">*</button>
                <button type="button" className="grid-item">/</button>

                <button type="button" className="grid-item">7</button>
                <button type="button" className="grid-item">8</button>
                <button type="button" className="grid-item">9</button>


                <button type="button" className="grid-item equals ">=</button>
                <button type="button" className="grid-item">DEL</button>


                <button type="button" className="grid-item">4</button>
                <button type="button" className="grid-item">5</button>
                <button type="button" className="grid-item">6</button>

                <button type="button" className="grid-item">1</button>
                <button type="button" className="grid-item">2</button>
                <button type="button" className="grid-item">3</button>

                <button type="button" className="grid-item">0</button>
                <button type="button" className="grid-item">.</button>
                <button type="button" className="grid-item">C</button>


            </div>

        </>
    )


}


