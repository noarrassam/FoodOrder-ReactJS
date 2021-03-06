import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <dv className={classes['main-image']}>
            <img src={mealsImage} alt="A table full if delicious food!" />
        </dv>
    </Fragment>
};

export default Header