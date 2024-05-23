import { Card } from "react-bootstrap"

const FullMail=(props)=>{
    return(
        <Card>
            <h2>sent to : {props.props.email}</h2>
            <h3>subject--{props.props.subject}</h3>
            <Card>
                <h3>{props.props.msg}</h3>
            </Card>
        </Card>
    )

}
export default FullMail