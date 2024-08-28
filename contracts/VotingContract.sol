// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
// import "hardhat/console.sol";

contract VotingContract {
    struct Candidate {
        uint256 id;
        string name;
        uint256 numberOfVotes;
    }

    //List of all candidates
    Candidate[] public candidates;
    //owner's address
    address public owner;
    //map all voters' address
    mapping(address => bool) public voters;
    //list of voters
    address[] public listOfVoters;

    //create a voting end and start session
    uint256 public votingStart;
    uint256 public votingEnd;

    //create an election status
}
