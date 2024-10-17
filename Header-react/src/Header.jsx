/* eslint-disable no-undef */
import './Header.css'
export default function Header(){
    return (
        <>
        <header className="header">
            <div className="left">
            <img src="https://foodfire-chapter03.netlify.app/logo.a00286fd.png" alt="Logo"/>
            </div>
            <div className="center">
            <input className="input" type="text" placeholder="Search anything you want..."/>
            <button type="submit">Submit</button>
            </div>
            <div className="right">
            <img src="https://foodfire-chapter03.netlify.app/user%20icon.873aadc2.png" alt="User Icon"/>
            </div>   
        </header>
        </>
    );
}