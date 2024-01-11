
class ReactContainer extends React.Component{
   
    render(){
        return (
        <div> Hello! Welcome to Kalvium   
           <div>This is babel</div>
       </div> )
    };  
}

const element3 = document.getElementById('react-container');

ReactDOM.render(<ReactContainer/>,element3); 