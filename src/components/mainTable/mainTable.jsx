import React from 'react';

export const MainTable =() => {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Habits</th>
                    <th>Completion</th>
                </tr>
            </thead>
            <tbody>
                <tr> 
                    <td>Drink 15 oz of water/day </td>
                    <td>4/15</td>
                </tr>
                <tr> 
                    <td>Meditate 15 mins/day</td>
                    <td>8/15 minutes</td>
                </tr>
                <tr> 
                    <td>Read a book for 1hr/day</td>
                    <td>35/60 minutes</td>
                </tr>
            </tbody>
        </table>
    </div>
}; 