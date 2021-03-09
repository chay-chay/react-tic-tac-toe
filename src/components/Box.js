import React, {useState} from 'react'
import PropTypes from 'prop-types'
import X from './X';
import O from './O';

const Box = ({player}) => {

    // let player = "nobody"
    // let showThis = <div>Empty</div> 

    // if (player === "X"){
    //     showThis = <X name="X" />;
    // } else if (player === "O"){
    //     <O />
    // }
    const [display, setDisplay] = useState('Empty');

    const handleClickBox = () => {
        if (player === 'X') {
            setDisplay('X')
        } else if (player === 'O'){
            setDisplay('O')
        }
    }
    
    return (
        <div onClick={ () => handleClickBox() } style={styles.box}>
         { display === "X" ? <X /> : display === "O" ? <O /> : <div>Empty</div>  }
        </div>
    )
    
}
const styles = {
box: {
    width: "200px",
    height: "200px",
    border: "1px solid pink",

}
}

Box.propTypes = {
    // type short ptst name: PropTypes.string.isRequired,
    player: PropTypes.string.isRequired, //ptst
    handleClickBox: PropTypes.string.isRequired, //ptsr
}

export default Box


