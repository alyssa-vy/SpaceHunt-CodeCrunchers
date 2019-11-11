//Story: As a player, I want to be notified when I run out of energy so I know I have lost the game.
//Acceptance Criteria:
//1. Verify that if the player's energy has fallen below one, a message is sent to the player.
//2. Verify that if the player's energy has fallen below one and the configuration is 
//   set to "regular play" the game ends.

function checkEnergy() {
   //alert ("Checking Energy");
   if (document.UI.energy.value <= 0){
	   alert ("Out of energy!");
	   /*if (!godMode){
		   //call gameover function
	   }*/
   }
}
