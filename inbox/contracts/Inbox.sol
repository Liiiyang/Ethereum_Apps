pragma solidity ^0.4.17;

contract inbox {
  string public message;

  constructor(string initialMessage) public {
    message = initialMessage;
  }

  function setMessage(string newMessage) public {
    message = newMessage;
  }

  /*
  //Unccessary if the message variable is public
  function getMessage() public view returns (string) {
    return message;
  }
  */
}
