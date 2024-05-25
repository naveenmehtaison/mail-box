import { Button, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
{/* <Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>; */}
const Home = () => {
    const editor = useRef(null)
    const receiver = useRef(null)
    const subject = useRef(null)
    const [content,setcontent]=useState('')
    const hanldesentbutton= async (e)=>{
        
        e.preventDefault()
        const obj = {email:receiver.current.value,subject:subject.current.value,msg:content.blocks[0].text}
        const arr = obj.email.split("")
        const fil_arr = arr.filter((ele,item)=>(
            ele!= '@' && ele!='.'
        ))
        const fin_email = fil_arr.join('')
        console.log(fin_email)
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(obj),
        }
        try{
            const res = fetch(`https://authentication-1f2ad-default-rtdb.firebaseio.com/sent/${fin_email}.json`,options)
            toast.success('emailsent')
        }
        catch(err){
            alert(err)
            console.log(err)
        }

    }
    console.log(content)
  return (
    <>
    <Card style={{ width: '100%', height: '700px' , boxShadow:'LG'}}>
      <Card.Body style={{ width: '100%', height:'100%', border: 'none', borderBottom: '1px solid #000' }}>
        <input  ref={receiver}nclassName="form-control" placeholder="to" style={{ border: 'none', borderBottom: '1px solid #000', borderRadius: 0, boxShadow: 'none' }} />
        <hr />
        <input ref={subject} className="form-control" placeholder="subject" style={{ border: 'none', borderBottom: '1px solid #000', borderRadius: 0, boxShadow: 'none' }} />
        <hr />
        {/* <textarea className="form-control" placeholder="body"  /> */}
        <Editor 
         ref={editor}
         value={content}
         onChange={newContent=>{setcontent(newContent)}}/>
      </Card.Body>
      
    </Card>
    <Button onClick={hanldesentbutton}>Sent</Button>
    </>
  );
};

export default Home;
