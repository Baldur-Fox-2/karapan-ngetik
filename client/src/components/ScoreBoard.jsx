import React from "react";

export default function ScoreBoard({players}){
console.log(players, 'scoreboard')
    const getScoreBoard = (players) => {
        const scoreBoard = players.filter(player => 
            player.WPM !== -1
        )
        console.log(scoreBoard)
        return scoreBoard.sort((a,b)=> 
            a.WPM > b.WPM ? -1 : b.WPM > a.WPM ? 1 : 0
        )
    }

   console.log(getScoreBoard(players), 'hasil')

    const scoreBoard1 = getScoreBoard(players)
    console.log(scoreBoard1, 'ini scoreboard')
    if(scoreBoard1.length === 0){
        return null
    }

    return (
        <table className="table table-striped my-3">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User</th>
                    <th scope="col">WPM</th>
                </tr>
            </thead>
            <tbody>
                {
                    scoreBoard1.map((player, index) =>{
                        return <tr>
                                <th scope="row">{index +1} </th>
                                <td>{player.nickName}</td>
                                <td>{player.WPM}</td>
                            </tr>
                    })
                }
            </tbody>
        </table>
    )
} 