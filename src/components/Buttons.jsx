import React, { useEffect } from 'react'


export default function Buttons() {

    useEffect(() => {
        const symbols = ['+', '-', '*', '/', '.', '(', ')'];
        document.querySelectorAll(".btn").forEach(btn => btn.addEventListener('click', () => {
            document.querySelector(".output").innerText += btn.innerText;
        }))
        document.addEventListener('keydown', (event) => {
            if (event.key <= 9 || symbols.includes(event.key)) {
                document.querySelector(".output").innerText += event.key;
            }
            else if (event.key === 'Enter' || event.key === "=") {
                calculate();
            }
            else if (event.key === 'Escape') {
                reset();
            }
            else if (event.key === 'Backspace') {
                deleteLast();
            }
        })
    });



    return (
        <>
            <div className="grid-container">
                <button type="button" onClick={reset} className="btn grid-item">C</button>
                <button type="button" className="btn grid-item">(</button>
                <button type="button" className="btn grid-item">)</button>
                <button type="button" className="btn grid-item">/</button>

                <button type="button" className="btn grid-item">7</button>
                <button type="button" className="btn grid-item">8</button>
                <button type="button" className="btn grid-item">9</button>


                <button type="button" className="btn grid-item equals ">*</button>
                <button type="button" className="btn grid-item">4</button>


                <button type="button" className="btn grid-item">5</button>
                <button type="button" className="btn grid-item">6</button>
                <button type="button" className="btn grid-item">+</button>

                <button type="button" className="btn grid-item">1</button>
                <button type="button" className="btn grid-item">2</button>
                <button type="button" className="btn grid-item">3</button>

                <button type="button" className="btn grid-item">-</button>
                <button type="button" className="btn grid-item">0</button>

                <button type="button" className="btn grid-item">.</button>
                <button type="button" onClick={deleteLast} className="grid-item">DEL</button>
                <button type="button" onClick={calculate} className="grid-item equals ">=</button>


            </div>

        </>
    )


}

function calculate() {
    const output = document.querySelector(".output").innerText;
    const result = eval(output);
    document.querySelector(".output").innerText = result;

}

function reset() {
    document.querySelector(".output").innerText = "";
}

function deleteLast() {
    document.querySelector(".output").innerText = document.querySelector(".output").innerText.slice(0, -1)
}
