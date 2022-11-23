import React from 'react'
import Flashcard from './Flashcard'

const FlashcardList = ({ flashcards }) => {
    console.log(flashcards)
    let num = 0;

    function array_chunk(arr, len) {
        let chunks = [], i = 0, n = arr.length
        while (i < n) {
          chunks.push(arr.slice(i, i += len))
        }
        return chunks
    }
    
    let pageFlashCards = array_chunk(flashcards, 6);
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} onClick={() =>{num = num+1; console.log(num);}} />
            })}
        </div>
    )
}

export default FlashcardList
