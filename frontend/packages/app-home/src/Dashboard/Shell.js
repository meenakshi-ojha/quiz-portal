import React from 'react';
import { NavLink } from 'react-router-dom';
import './Shell.css';
export const Shell = () =>
{
    return(
        <div className="shell">
            <ul>
                <li><NavLink exact to="/dashboard">All quizzes</NavLink></li>
                <li><NavLink exact to="/createquiz">New Quiz</NavLink></li>
            </ul>
        </div>
    )
}