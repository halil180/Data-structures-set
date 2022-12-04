const setA = new Set()
const setB = new Set()
var inputs = document.querySelectorAll("input");
let buttons = document.querySelectorAll('button')
let image = document.getElementById("img")
let result = document.getElementById("result")
let setAvalues = document.getElementById("setAvalue")
let setBvalues = document.getElementById("setBvalue")
let intersectionImage = "https://upload.wikimedia.org/wikipedia/commons/9/99/Venn0001.svg"
let unionImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Venn0111.svg/1280px-Venn0111.svg.png"
let symmetricDiffImage = "https://upload.wikimedia.org/wikipedia/commons/4/46/Venn0110.svg"

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id == "intersectionBtn") {
            // console.log("intersection")
            result.innerHTML = ""
            image.src = intersectionImage

            intersection(setA, setB).forEach(item => {
                result.innerHTML += item + " "
            })
        }
        if (btn.id == "symmetricDiffBtn") {
            result.innerHTML = ""
            // console.log("symmetricDiffBtn")
            image.src = symmetricDiffImage
            symmetricDifference(setA, setB).forEach(item => {
                result.innerHTML += item + " "
            })
        }
        if (btn.id == "unionBtn") {
            result.innerHTML = ""

            // console.log("unionBtn")
            image.src = unionImage
            union(setA, setB).forEach(item => {
                result.innerHTML += item + " "
            })
        }
    })
})


inputs.forEach(input => {
    input.addEventListener("keypress", function (event) {
        
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {


            if (input.id == "setA") {
                // console.log("setA")
                setA.add(input.value)
                console.log(setA, "SETA")
                setAvalues.innerHTML = ''

                setA.forEach(item => {
                    setAvalues.innerHTML += item + ","
                })
            }
            if (input.id == "setB") {
                setB.add(input.value)
                // console.log(setB,"SETB")
                console.log(setB)
                setBvalues.innerHTML = ''
                setB.forEach(item => {
                    console.log(item)
                    setBvalues.innerHTML += item + ","
                })
            }
                    input.value =""

        }
    });
})
const intersection = (setA, setB) => {
    const intersection = new Set()
    setB.forEach(set => {
        if (setA.has(set)) {
            intersection.add(set)
        }
    })
    // console.log(intersection)
    return intersection
}


const symmetricDifference = (setA, setB) => {

    const difference = new Set(setA);

    setB.forEach(set => {
        if (difference.has(set)) {
            difference.delete(set)
        } else {
            difference.add(set)
        }
    })
    return difference;
}

const union = (setA, setB) => {
    return new Set([...setA, ...setB])
}