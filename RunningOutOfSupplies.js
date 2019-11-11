//Story: As a player, I want to be notified when I run out of supplies so I know I have lost the game.
//Acceptance Criteria:
//1. Verify that if the player's supplies have fallen below one percent, a message is sent to the player.
//2. Verify that if the player's supplies have fallen below one percent, and 
//   the configuration is set to "regular play" the game ends.

function checkSupplies() {
   //alert("Checking Supplies");
   if (document.UI.supplies.value <= 0){
	   alert ("Out of supplies!");
	   /*if (!godMode){
		   //call gameover function
	   }*/
   }
}
