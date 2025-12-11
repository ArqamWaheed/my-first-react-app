import PropTypes from 'prop-types';

function Mf({name}) {
    return <h1>Yo wassup {name}</h1>;
}

Mf.propTypes = {
    name: PropTypes.string,
}

export default Mf;



