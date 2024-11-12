import React, { useContext } from 'react'
import './Navbar.css'
import arrow_icon from '../../assets/arrow-icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { setCurrency } = useContext(CoinContext)

    const currencyHandler = (event) => {
        switch(event.target.value) {
            case "usd": {
                setCurrency({
                    name: "usd",
                    symbol: "$"
                })
                break;
            }
            case "eur": {
                setCurrency({
                    name: "eur",
                    symbol: "€"
                })
                break;
            }
            case "gbp": {
                setCurrency({
                    name: "gbp",
                    symbol: "£"
                })
                break;
            }
            default: {
                setCurrency({
                    name: "usd",
                    symbol: "$"
                })
            }
        }
    }

  return (
    <div className='navbar'>
        <ul>
            <Link to='/'><li>Home</li></Link>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
            </select>
            <button>Sign Up<img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar
