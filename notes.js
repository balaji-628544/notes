// let notepad=document.querySelectorAll(".para");
const cont=document.querySelector(".cont");
const createBtn=document.querySelector(".btn");

// function to save notes to localStorage
const saveNotes=()=>{
const notes=[];
    document.querySelectorAll(".para").forEach(note =>{
        notes.push(note.innerHTML);
    });
    localStorage.setItem("notes",JSON.stringify(notes));
};

const loadNotes=()=>{
    const notes=JSON.parse(localStorage.getItem("notes"));
    if(notes){
        notes.forEach(noteContent=>{
            const input=document.createElement("p");
            input.className="para";
            input.setAttribute("contenteditable","true");
            input.innerHTML=noteContent;
            const img=input.querySelector(".delete1");
                img.addEventListener("click",()=>{
                    input.remove();
                    saveNotes();
                });
                input.addEventListener("input",saveNotes);
                cont.appendChild(input);
            
        });
    }
};


createBtn.addEventListener("click", ()=>{
    let input=document.createElement("p");
    let img=document.createElement("img");
    input.className="para";
    img.className="delete1";
    input.setAttribute("contenteditable","true");
    img.src="delete.png";
    img.addEventListener("click",()=>
    {
        input.remove();
        saveNotes();

    });
    input.addEventListener("input",saveNotes);
    input.appendChild(img);
    cont.appendChild(input);
    saveNotes();
});

window.addEventListener("load",loadNotes);


      
        // const cont = document.querySelector(".cont");
        // const createBtn = document.querySelector(".btn");

        // // function to save notes to localStorage
        // const saveNotes = () => {
        //     const notes = [];
        //     document.querySelectorAll(".para").forEach(note => {
        //         notes.push(note.innerHTML);
        //     });
        //     localStorage.setItem("notes", JSON.stringify(notes));
        // };

        // const loadNotes = () => {
        //     const notes = JSON.parse(localStorage.getItem("notes"));
        //     if (notes) {
        //         notes.forEach(noteContent => {
        //             const input = document.createElement("p");
        //             input.className = "para";
        //             input.setAttribute("contenteditable", "true");
        //             input.innerHTML = noteContent;
        //             const img = document.createElement("img");
        //             img.className = "delete1";
        //             img.src = "delete.png";
        //             img.addEventListener("click", () => {
        //                 input.remove();
        //                 saveNotes();
        //             });
        //             input.appendChild(img);
        //             input.addEventListener("input", saveNotes);
        //             cont.appendChild(input);
        //         });
        //     }
        // };

        // createBtn.addEventListener("click", () => {

        //     const input = document.createElement("p");
        //     const img = document.createElement("img");
        //     input.className = "para";
        //     img.className = "delete1";
        //     input.setAttribute("contenteditable", "true");
        //     img.src = "delete.png";
        //     img.addEventListener("click", () => {
        //         input.remove();
        //         saveNotes();
        //     });
        //     input.addEventListener("input", saveNotes);
        //     input.appendChild(img);
        //     cont.appendChild(input);
        //     saveNotes();
        // });

        // window.addEventListener("load", loadNotes);
 
