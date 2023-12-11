// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdr {
    enum Category {
        CREATIVE_PROJECTS,
        TECHNOLOGY_AND_INNOVATION,
        FOOD_AND_AGRICULTURE,
        SOCIAL_CAUSES,
        EVENT_FUNDING,
        REFI,
        RENEWABLE_ENERGY,
        ANIMAL_WELFARE
    }

    // Refund policies 
    enum RefundPolicy {
        REFUNDABLE,
        NONREFUNDABLE
    }

    // Structure to represent a crowdfunding campaign
    struct Campaign {
        string title;
        string description;
        address creator;
        uint256 goal;
        uint256 endTime;
        uint256 totalFunds;
        Category category;
        bool isOpen;
        RefundPolicy refundPolicy;
        bool claimedAmount;
        string image;
    }

    // Mapping to store contributions for each campaign
    mapping(uint256 => mapping(address => uint256)) public contributions;

    // Stores indexes of campaigns created by an address.
    mapping(address => uint256[]) addressProjectsList;

    // All the campaigns
    Campaign[] public campaigns;

    // Create a new crowdfunding campaign
    function createCampaign(
        string memory _title,
        string memory _description,
        uint256 _goal, 
        uint256 _duration, 
        Category _category, 
        RefundPolicy _refundPolicy,
        string memory _image
        ) external {
        require(_goal > 0, "Goal must be greater than 0");

        Campaign memory newCampaign = Campaign({
            title: _title,
            description: _description,
            creator: msg.sender,
            goal: _goal,
            endTime: block.timestamp + _duration,
            totalFunds: 0,
            category: _category,
            isOpen: true,
            refundPolicy: _refundPolicy,
            claimedAmount: false,
            image: _image
        });

        campaigns.push(newCampaign);
        addressProjectsList[msg.sender].push(campaigns.length - 1);
    }

    // Contribute funds to a specific campaign
    function contribute(uint256 _campaignIndex) external payable validIndex(_campaignIndex) {
        Campaign storage campaign = campaigns[_campaignIndex];

        require(campaign.isOpen, "Campaign is closed");
        require(campaign.creator != msg.sender, "You are the Campaign owner");
        require(block.timestamp < campaign.endTime, "Campaign has ended");
        require(msg.value > 0, "Contribution must be greater than 0");

        contributions[_campaignIndex][msg.sender] += msg.value;
        campaign.totalFunds += msg.value;
    }

    // Close a campaign and distribute funds if the goal is reached
    function closeCampaign(uint256 _campaignIndex) external {
        require(_campaignIndex < campaigns.length, "Invalid campaign index");
        Campaign storage campaign = campaigns[_campaignIndex];

        require(campaign.isOpen, "Campaign is already closed");
        require(block.timestamp >= campaign.endTime, "Campaign has not ended yet");

        if (campaign.totalFunds >= campaign.goal) {
            // Distribute funds to the campaign creator
            payable(campaign.creator).transfer(campaign.totalFunds);
        }

        campaign.isOpen = false;
    }

    // Get details of a specific campaign
    function getCampaignDetails(uint256 _campaignIndex)
        external
        view
        returns (
            string memory title,
            string memory description,
            address creator,
            uint256 goal,
            uint256 endTime,
            uint256 totalFunds,
            Category category,
            bool isOpen
        )
    {
        require(_campaignIndex < campaigns.length, "Invalid campaign index");
        Campaign storage campaign = campaigns[_campaignIndex];

        return (
            campaign.title,
            campaign.description,
            campaign.creator,
            campaign.goal,
            campaign.endTime,
            campaign.totalFunds,
            campaign.category,
            campaign.isOpen
        );
    }

    function getAllCategories() public pure returns (string[] memory) {
        string[] memory categories = new string[](uint256(Category.ANIMAL_WELFARE) + 1);
        
        categories[uint256(Category.CREATIVE_PROJECTS)] = "CREATIVE_PROJECTS";
        categories[uint256(Category.TECHNOLOGY_AND_INNOVATION)] = "TECHNOLOGY_AND_INNOVATION";
        categories[uint256(Category.FOOD_AND_AGRICULTURE)] = "FOOD_AND_AGRICULTURE";
        categories[uint256(Category.SOCIAL_CAUSES)] = "SOCIAL_CAUSES";
        categories[uint256(Category.EVENT_FUNDING)] = "EVENT_FUNDING";
        categories[uint256(Category.REFI)] = "REFI";
        categories[uint256(Category.RENEWABLE_ENERGY)] = "RENEWABLE_ENERGY";
        categories[uint256(Category.ANIMAL_WELFARE)] = "ANIMAL_WELFARE";

        return categories;
    }

    // Returns campaigns size
    function getCampaignsLength() external view returns(uint256) {
        return campaigns.length;
    }

    // Returns array of indexes of campaigns created by creator
    function getCreatorCampaigns(address creator) external view returns(uint256[] memory createdCampaigns) {
        return addressProjectsList[creator];
    }

    // Helps project creator to transfer the raised funds to his address
    function claimFund(uint256 _index) validIndex(_index) external {
        require(campaigns[_index].creator == msg.sender, "You are not Project Owner");
        require(campaigns[_index].endTime < block.timestamp, "Campaign Funding Time Not Expired");
        require(campaigns[_index].refundPolicy == RefundPolicy.NONREFUNDABLE 
        || campaigns[_index].totalFunds >= campaigns[_index].goal, "Funding goal not reached");
        require(!campaigns[_index].claimedAmount, "Already claimed raised funds");
        campaigns[_index].claimedAmount = true;
        payable(msg.sender).transfer(campaigns[_index].totalFunds);
    }

    // Helper function to get the contributor index in the projects' contributor's array
    // function getContributorIndex(uint256 _index) validIndex(_index) internal view returns(int256) {
    //     int256 contributorIndex = -1;
    //     for(uint256 i = 0; i < projects[_index].contributors.length; i++) {
    //         if(msg.sender == projects[_index].contributors[i]) {
    //             contributorIndex = int256(i);
    //             break;
    //         }
    //     }
    //     return contributorIndex;
    // }

    // Enables the contributors to claim refund when refundable project doesn't reach its goal
    // function claimRefund(uint256 _index) validIndex(_index) external {
    //     require(projects[_index].duration + projects[_index].creationTime < block.timestamp, "Project Funding Time Not Expired");
    //     require(projects[_index].refundPolicy == RefundPolicy.REFUNDABLE 
    //     && projects[_index].amountRaised < projects[_index].fundingGoal, "Funding goal not reached");
        
    //     int256 index = getContributorIndex(_index);
    //     require(index != -1, "You did not contribute to this project");
        
    //     uint256 contributorIndex = uint256(index);
    //     require(!projects[_index].refundClaimed[contributorIndex], "Already claimed refund amount");
        
    //     projects[_index].refundClaimed[contributorIndex] = true;
    //     payable(msg.sender).transfer(projects[_index].amount[contributorIndex]);
    // }

    // Checks if an index is a valid index in campaigns array
    modifier validIndex(uint256 _index) {
        require(_index < campaigns.length, "Invalid Project Id");
        _;
    }
}
    