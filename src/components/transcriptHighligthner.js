import { useState } from "react";
import { transcriptData } from "../utils/transcriptData";

const TranscriptHiglightner = () => {

 const [currentWordIndex, setCurrentWordIndex] = useState(null); // To check the current word index with the index so it can move.
 const [filterTranscriptData, setTranscriptData] = useState(transcriptData);


    /* on click handler simply for each word set the time then check the CurrentWordIndex with the index  */
    const startBtnHandler = () => {
        filterTranscriptData.forEach((word, index) => {
            const delay = word.start_time;

            setTimeout(() => {
                setCurrentWordIndex(index);

            }, delay);
        });
    };

    /*
      - Accepting the Index and updating text
      - if the updated word is null then return
          else map over the data and check if the index is equal to the index argument or not
          if yes then spread all the data and specifically update the word  else show all the items
    */


    const editWordHandler = (index, text) => {
        let updatedWord = window.prompt(index, text);
       if(updatedWord===null) return

        if (updatedWord === "" ) {
            alert("You cannot delete the word");
        } else {
            const updatedItems = filterTranscriptData.map((item, i) =>
                i === index ? { ...item, word: updatedWord } : item
            );
            setTranscriptData(updatedItems);
        }
    };

    return (
        <div className="flex justify-between flex-wrap">
            <div className="float-left max-xl:w-full max-xl:text-center">
              <h1 className="text-6xl font-bold ml-28 max-xl:ml-0 max-xl:text-7xl">Welcome To , </h1>
                <h1 className=" text-[#231fe6] text-6xl font-bold ml-32 mt-3 max-xl:ml-0  max-xl:text-7xl">Text <span className="ml-3 text-black">Editor</span></h1>
                <p className="font-bold ml-44 mt-3">Edit your text here</p>

                <div className="flex justify-center">
                <iframe className="float-right" width="300" height="300" title="editing-animation" src="https://lottie.host/embed/e09d71b8-058f-44cd-8986-e115da9c0163/QT2E5PZr7K.json"></iframe>
                </div>
              
            </div>

            <div className="float-right flex justify-center flex-wrap border border-gray-200 rounded-xl h-56 mr-28 content-center max-xl:w-full max-xl:h-40 max-xl:flex max-xl:ml-3 max-xl:mr-3">
                
                <p className="flex justify-center flex-wrap">
                {filterTranscriptData.map((d, index) => (
                    <p
                        key={index}
                        className={`word ${currentWordIndex === index ? "border 2px solid border-black" : ""
                            }  m-0 p-2 font-semibold text-xl mt-5 max-xl:text-lg max-xl:p-1`}
                        onClick={() => editWordHandler(index, d.word)}
                    >
                        {d.word}
                    </p>
                ))}
                   </p>
               <br/>
               <br/>
               <button
                    className="border border-black p-3 text-white text-xl bg-black mt-10 float-right w-1/2 "
                    onClick={startBtnHandler}
                >
                    Start
                </button>

               
             
            </div>
      


        </div>
    );
};

export default TranscriptHiglightner;
