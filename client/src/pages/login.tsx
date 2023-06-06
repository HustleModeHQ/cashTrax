import React from "react";

function LoginButton() {
    const loginbuttonHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
      alert("Button was clicked!");
    }
    return (
        <button className="login-button">
          Login
        </button>
      )
  }

function LoginBox() {
    return (
      <div style={{
        width: '300px',
        height: '400px',
        backgroundColor: '#0078ff',
        border: '2px solid black',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '10px 10px 5px 0px white',
      }}>
        <div style={{
          marginBottom: '20px',
          alignContent: 'top'
      }}>
          <h1>HustleWalleX</h1>
        </div>  
        <LoginButton/>
      </div>
    );
  }

  export default LoginBox;