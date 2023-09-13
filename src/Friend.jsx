export default function Friend({frd}){
const {name , email}= frd;
    return(

        <div className="box">
            <h3>Name: {name}</h3>
            <h3>Email: {email} </h3>
        </div>
    )
}