import { Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import StoreActions from "../../Store/Redux"
const FullMail=(props)=>{
    useDispatch(StoreActions.setshowtick)
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