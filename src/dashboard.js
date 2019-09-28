import React, { Component } from "react";

class Dashboard extends Component {
    test(e){
        alert(e)
    }
    render() {
        return (
            <div>
                <div>
                    <div className="dashBoardHeader" id="header">
                        <h1  style={{background:'blue',color:'white',textAlign:'center'}}>DASHBOARD</h1>
                    </div>
                    <br/>
                    <br/>
                    <h1 style={{fontSize:'48px',textAlign:'center'}}>Welcome!</h1>
                </div>
            </div>
        );
    }
}
export default Dashboard;