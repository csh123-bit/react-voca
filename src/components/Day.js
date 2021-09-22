import React from 'react';
import dummy from "../db/data.json"
import { useParams } from 'react-router';


const Day = () => {
//리액트 라우터 돔/쿼리스트링 사용
    const {day}=useParams();
    const wordList = dummy.words.filter(word=>(
        word.day === Number(day)
    ))

    return (
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word=>(
                    <tr key={word.id}>
                        <td>
                            {word.eng}
                        </td>
                        <td>
                            {word.kor}
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
            
        </>
    );
}

export default Day;
