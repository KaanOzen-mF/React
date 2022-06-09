import PropTypes from 'prop-types'


function User({ name, surname, age, isLoggedIn, friends, address }) {


    if (!isLoggedIn) {
        return <div>Please enter!</div>
    }
    return (
        <>
            <h1>{`${name} ${surname} ${age}`}</h1>

            {friends && friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
            <hr />
            {address.title}
            <br />
            {address.zip}
        </>
    )
}




User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}
export default User;