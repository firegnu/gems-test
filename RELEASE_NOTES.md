v0.1.0
------
 - Each move that results in a combination worths points and time;
    - 1 point per piece;
    - 4 seconds per combination;
  - If the

v0.1.1
------
  - The bonus time has been decreased for active combinations from 10 to 3;
  - The bonus time has been decreased for passive combinations from 5 to 1;
  - Fixed a bug that if the player restarts the game, it kept the previous score;
  - The final score animation has been changed, to adapt to greater max scores;
  - The final score animation has been speed up, increasing the sum value;
  - Added a game over screen;
  - Added the about screen;
  - Added the options screen;
  - Changed the majority of the assets;
  - Start time in 60s, instead 120;

v0.1.2
------
  - The game is now checking if the board have no movement left: if
  there's no movement able to make a combination, then the board is
  reshuffled;

v0.1.3
------
  - Added confirmation dialog when user press back or end call keys;

v0.1.4
------
  - Added visual aid to show user how much time he is earning with each combination;
  - Added "Select" in the game play screen;
  - Score and About screens fixed;

v0.1.5
------
  - Fixed a problem that when user paused the game and then press back, the game freezes;

v0.1.6
------
  - Changing assets and game icon;

v0.1.7
------
  - Added background music and vibration feature when making combinations;

v0.1.8
------
  - Fixing several bugs, adding quit confirmation dialog on home, about, options and score screens

v0.1.9
------
  - Changing the tile asset.

v0.1.10
-------
  - Adding a listener to pause the game if the user receives a call or press "End"

v0.1.11
-------
  - New assets version

v0.1.12
-------
  - Aligning pieces to the background;
  - Aligning selector to the background;
  - Options now avaliable inside the game (bug resolved);
  - "New Record" label aligned to the left;

v0.1.13
-------
  - Changing the logo and background of menu state;

v0.1.14
-------
   - Changing the name in en-US locale

v0.1.15
-------
   - Bugfix, Bug 34132 and Bug 34255

v0.1.16
-------
  - Adding internationalization.

v0.1.17
-------
  - Bugfix, Bug 34413, Bug 34414, Bug 34260, Bug 34644, Bug 34883 and Bug 34882
  - Bugfix, Bug 34526, Bug 34528, Bug 34604, Bug 34524, Bug 34525, Bug 34735

v1.0.0
-------
  - Bug 35624 - [Gems] The message of reshuffling has wrong alignment.
  - Bug 36024 - [Gems] Sound does not play in first time user plays the game.
  - Bug 36088 - [Gems][WaterWorld] The "Deselect" button isn't changing after move the focus.
  - Bug 36087 - [Gems][WaterWorld] The "Back" button always shows the quit screen.
  - Bug 36156 - [Gems] The game isn't pausing the background properly.

v1.0.1
-------
  - Update the L10N support according to KaiOS standards (for example, use the same format for locales files).
  - Languages with locale files: pt-BR, en-US (default).
  Bug fixing:
  - Bug 36714 - [Store][Gems]Score display too slowly (15s).
  - Bug 36718 - [Store][Gems]Different background of "Options" in Gems.
  - Bug 37895 - [Gems][LND][Portrait] Layout break when new record in Portuguese.
  - Bug 37897 - [Gems][LND] The saved score is not correctly.

v1.0.2
-------
  - Update the support for others language (ar, de, en-US, es, es-MX, fr-CA, pt-BR, pt-PT, ru).

v1.0.3
-------
  - Support ADS.
  - Update softkey for support others language.
  Bug fixing:
  - Bug 41757 - [Language][Spanish][Gems][v1.0.2]Truncation of "GAME OVER" after switching languages.
  - Bug 41751 - [Language][German][Spanish][Gems][v1.0.2]Truncation of "OPTIONS" after switching languages.
  - Bug 41749 - [Language][Arabic][German][Spanish][Russian][Gems][v1.0.2]Switch Languages "Select" Fonts Overlay.
  - Bug 41747 - [Language][German][Spanish][Portuguese][Russian][Gems][v1.0.2]Truncation of "Score" after switching languages.
  - Bug 41746 - [Language][Spanish][Russian][Gems][v1.0.2]Switch Languages "About" Interface fonts Overlay.
  - Bug 41745 - [Language][German][Spanish][Russian][Gems][v1.0.2]Truncation of "SCORE" after switching languages.
  - Bug 41595 - [Store][Gems] App crashs directly once user tap Play or Option/Score button.

v1.0.4
-------
  Bug fixing:
  - Bug 43029 - [Gems][v1.0.4] Text in "New Score" screen is displayed cropped in all Languages.

v1.1.0
-------
  - Control Up, Down, Left, Rigth (2, 4, 6, 8).
  - Control softkey Backspace  and EndCall.
  - Return confirmation Dialog quit game.
  - Control Center (5).
  - Volume control (1 e 3).
  - Pause and Resume (0).
  - Support ADS VMAX

v1.1.1
-------
  - Update file translation

v1.1.2
-------
  - Adjustment load sound.
  - Update process build for copy file release notes.
  - Update language.

v1.1.3
  - On menu start title, changed font size.
  - Bug 48001 - Update action softkey advertisement.
  - Bug 48090 - [Gems][V1.1.2_POR_VMAX]The "Select" display "Deselect" (edit).
  - Update load sound.

v1.1.4
-------
  - Update ADS-Adapter version 1.5.2.
  - Update the language exchange when game is in the background.
  - Add loading screen while requesting ads.

v1.1.5
-------
  - Update ads-adapter with new ads solution(kai) KaiAds from David SKY.
  - Remove VMAX as ads solution

v1.1.6
-------
  - Fix bug that gameplay's softkey was triggered when displaying ads after returning from Store
  - Update KaiAds to v1.1.3 which now sends language settings to SSP