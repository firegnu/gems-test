var locale = {
  lang: null,
  getLocale: navigator.mozL10n.get
};

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["phaser-navigator"]=e():t["phaser-navigator"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(a[o])return a[o].exports;var s=a[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,o){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="plugin/",e(e.s=0)}([function(t,e,a){a(1),Phaser.Plugin.Navigator=function(t,e){Phaser.Plugin.call(this,t,e)},Phaser.Plugin.Navigator.prototype=Object.create(Phaser.Plugin.prototype),Phaser.Plugin.Navigator.prototype.constructor=Phaser.Plugin.SamplePlugin,Phaser.Plugin.Navigator.prototype.stack=[],Phaser.Plugin.Navigator.prototype.init=function(){game.softkey=game.plugins.add(Phaser.Plugin.Softkey)},Phaser.Plugin.Navigator.prototype.register=function(t){this.stack.push(Object.assign({},game.softkey.getLastConfig())),this.group=game.softkey.config({style:t.style,label:t.label}),game.softkey.listener(t.action)},Phaser.Plugin.Navigator.prototype.setLastConfig=function(){var t=this.stack.pop();this.group=game.softkey.config({style:t.style,label:t.label}),game.softkey.listener(t.action)},Phaser.Plugin.Navigator.prototype.stackPopAll=function(){this.stack=[]},Phaser.Plugin.Navigator.prototype.destroy=function(){this.group.kill()}},function(t,e){function a(t,e,a){var o=t.text.length;this.fixLenght=Math.floor(e*o/t.width)-2,this.newText=t.text.substr(0,this.fixLenght)+"...",t.text=this.newText,1===a&&(t.x=game.camera.x+10+t.width/2),3===a&&(t.x=game.camera.x+(game.camera.width-10)-t.width/2)}Phaser.Plugin.Softkey=function(t,e){Phaser.Plugin.call(this,t,e)},Phaser.Plugin.Softkey.prototype=Object.create(Phaser.Plugin.prototype),Phaser.Plugin.Softkey.prototype.constructor=Phaser.Plugin.SamplePlugin,Phaser.Plugin.Softkey.prototype.skGroup=null,Phaser.Plugin.Softkey.prototype.lastConfig={},Phaser.Plugin.Softkey.prototype.defaultHandler={},Phaser.Plugin.Softkey.prototype.listener=function(t){self=this,this.lastConfig.action=t,window.onkeydown=function(e){self._keyPress(e,t)}},Phaser.Plugin.Softkey.prototype.config=function(t){if(t.label)return t.style||(t.style={font:"16px Arial",fill:"#ffffff"}),this.skGroup&&this.skGroup.removeAll(),this.skGroup=game.add.group(),this.skGroup.fixedToCamera=!0,this.skGroup.cameraOffset.setTo(-game.camera.x,-game.camera.y),this.lastConfig.label=t.label,this.lastConfig.style=t.style,this.centerX=game.camera.x+game.camera.width/2,this.portionLenght=Math.round(.9*game.camera.width/3),void 0!==t.label.lsk&&(this.lsk=game.add.text(game.camera.x+10,game.camera.y+(game.camera.height-12),t.label.lsk,t.style),this.lsk.x=game.camera.x+10+this.lsk.width/2,this.lsk.anchor.setTo(.5),this.skGroup.add(this.lsk),this.lsk.width>this.portionLenght&&a(this.lsk,this.portionLenght,1)),void 0!==t.label.csk&&(this.csk=game.add.text(this.centerX,game.camera.y+(game.camera.height-12),t.label.csk,t.style),this.csk.anchor.setTo(.5),this.skGroup.add(this.csk),this.csk.width>this.portionLenght&&a(this.csk,this.portionLenght)),void 0!==t.label.rsk&&(this.rsk=game.add.text(190,game.camera.y+(game.camera.height-12),t.label.rsk,t.style),this.rsk.x=game.camera.x+(game.camera.width-10)-this.rsk.width/2,this.rsk.anchor.setTo(.5),this.skGroup.add(this.rsk),this.rsk.width>this.portionLenght&&a(this.rsk,this.portionLenght,3)),this.skGroup},Phaser.Plugin.Softkey.prototype.getLastConfig=function(){return this.lastConfig},Phaser.Plugin.Softkey.prototype._keyPress=function(t,e){var a=null,o=this._debug(t);switch(o){case"SoftLeft":e.softLeft&&(a=e.softLeft);break;case"Enter":e.enter&&(a=e.enter);break;case"SoftRight":e.softRight&&(a=e.softRight);break;case"Backspace":e.backspace&&(a=function(){t.preventDefault(),t.stopImmediatePropagation(),e.backspace()});break;case"EndCall":e.endCall&&(a=function(){t.preventDefault(),t.stopImmediatePropagation(),e.endCall()});break;default:e[o]&&(a=e[o])}a||(a=this.defaultHandler[o]),a&&a()},Phaser.Plugin.Softkey.prototype._debug=function(t){if(game.custom&&game.custom.debug&&(console.warn("[Phaser.Plugin.Softkey] in debug mode!",t.key),t.shiftKey))switch(t.key){case"ArrowLeft":return"SoftLeft";case"ArrowRight":return"SoftRight"}return t.key}}])});
Phaser.Plugin.Softkey = function (parent, game) {
  Phaser.Plugin.call(this, parent, game);
};
Phaser.Plugin.Softkey.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Softkey.prototype.constructor = Phaser.Plugin.SamplePlugin;

Phaser.Plugin.Softkey.prototype.skGroup = null;
Phaser.Plugin.Softkey.prototype.lastConfig = {};
Phaser.Plugin.Softkey.prototype.defaultHandler = {};

Phaser.Plugin.Softkey.prototype.listener = function (arg) {
  self = this;

  this.lastConfig.action = arg;

  window.onkeydown = function (e) {
    self._keyPress(e, arg);
  };
};

Phaser.Plugin.Softkey.prototype.config = function (arg) {
  if (!arg.label) {
    return;
  }
  if (!arg.style) {
    arg.style = { font: '16px Open Sans', fill: '#ffffff' };
  }

  if(this.skGroup){
    this.skGroup.removeAll();
  }

  this.skGroup = game.add.group();
  this.skGroup.fixedToCamera = true;
  this.skGroup.cameraOffset.setTo(-game.camera.x, -game.camera.y);

  this.lastConfig.label = arg.label;
  this.lastConfig.style = arg.style;

  this.centerX = game.camera.x + game.camera.width / 2;
  this.portionLenght = Math.round( (game.camera.width * 0.90)/3 );
    console.log('arg.label.lsk', arg.label.lsk)
    if (undefined !== arg.label.lsk) {
      this.lsk = game.add.text(game.camera.x + 10, game.camera.y + (game.camera.height - 12), arg.label.lsk.text,  arg.label.lsk.style ? arg.label.lsk.style: arg.style);
      this.lsk.x = game.camera.x + 10 + this.lsk.width / 2;
      this.lsk.anchor.setTo(0.5);
      this.skGroup.add(this.lsk);
      if (this.portionLenght < this.lsk.width) {
        ellipsizeText(this.lsk, this.portionLenght, 1);
      }
    }
    if (undefined !== arg.label.csk) {
      this.csk = game.add.text(this.centerX, game.camera.y + (game.camera.height - 12), arg.label.csk.text, arg.label.csk.style ? arg.label.csk.style: arg.style);
      this.csk.anchor.setTo(0.5);
      this.skGroup.add(this.csk);
      if (this.portionLenght < this.csk.width) {
        ellipsizeText(this.csk, this.portionLenght);
      }
    }

    if (undefined !== arg.label.rsk) {
      this.rsk = game.add.text(190, game.camera.y + (game.camera.height - 12), arg.label.rsk.text, arg.label.rsk.style ? arg.label.rsk.style: arg.style);
      this.rsk.x = game.camera.x + (game.camera.width - 10) - this.rsk.width / 2;
      this.rsk.anchor.setTo(0.5);
      this.skGroup.add(this.rsk);
      if (this.portionLenght < this.rsk.width) {
        ellipsizeText(this.rsk, this.portionLenght, 3);
      }
    }

  return this.skGroup;
};

Phaser.Plugin.Softkey.prototype.getLastConfig = function () {
  return this.lastConfig;
};

function ellipsizeText(softkey, portionLenght, number) {
  var labelLenght = softkey.text.length;

  this.fixLenght = Math.floor((portionLenght * labelLenght) / softkey.width) -2;

  this.newText = softkey.text.substr(0, this.fixLenght) + '...';

  softkey.text = this.newText;
  
  if(1 === number) {
    softkey.x = game.camera.x + 10 + softkey.width / 2;
  }

  if(3 === number) {
    softkey.x = game.camera.x + (game.camera.width - 10) - softkey.width / 2;
  }
}

Phaser.Plugin.Softkey.prototype._keyPress = function (e, arg) {
  var keyHandler = null;
  var key = this._debug(e);
  switch (key) {
    case 'SoftLeft':
      if(arg.softLeft){
        keyHandler = arg.softLeft;
        e.preventDefault();
      }
      break;
    case 'Enter':
      if(arg.enter){
        keyHandler = arg.enter;
        e.preventDefault();
      }
      break;
    case 'MicrophoneToggle':
      e.preventDefault();
      break;
    case 'SoftRight':
      if(arg.softRight){
        keyHandler = arg.softRight;
        e.preventDefault();
      }
      break;
    case 'Backspace':
      if(arg.backspace){
        keyHandler = function () {
          e.preventDefault();
          e.stopImmediatePropagation();
          arg.backspace();
        }
      }
      break;
    case 'EndCall':
      if(arg.endCall){
        keyHandler = function () {
          e.preventDefault();
          e.stopImmediatePropagation();
          arg.endCall();
        }
      }
      break;
    default:
      if(arg[key]) {
        keyHandler = arg[key];
      }
      break;
  }

  if(!keyHandler) 
    keyHandler = this.defaultHandler[key];

  keyHandler && keyHandler();
};

Phaser.Plugin.Softkey.prototype._debug = function (evt) {
  if (game.custom && game.custom.debug) {
    console.warn("[Phaser.Plugin.Softkey] in debug mode!", evt.key);
    if (evt.shiftKey) {
      switch (evt.key) {
        case "ArrowLeft":
          return "SoftLeft";
        case "ArrowRight":
          return "SoftRight";
        /* istanbul ignore next */
        default:
          break;
      }
    }
  }
  return evt.key;
};

var maxScoreStorage = 'color-crumbs-max-score';
var actualScore = 'color-crumbs-actual-score';
var soundStorage = 'color-crumbs-sound';
var vibrationStorage = 'color-crumbs-vibration';
var delay = 10;

var score = {
  score: 0,
  create: function () {
    this.softkey = this.game.plugins.add(Phaser.Plugin.Softkey);
    var background = game.add.graphics();
    background.beginFill(0xe9e9e9, 1);
    background.drawRect(0, 0, 240, 320);

    this.scoreTitle();
    this.renderText();
    this.bind();
  },
  scoreTitle: function () {

    var scoreTitle = game.add.text(10, -20, locale.getLocale('score').toUpperCase(), {
      font: '16px AvenirHeavy',
      fill: '#3f3f3f'
    });
    scoreTitle.anchor.setTo(0, 0.5);
    scoreTitle.fontWeight = 'bold';

    var scoreTitleDots = game.add.sprite(scoreTitle.x + scoreTitle.width + 5, -20, 'score_title');
    scoreTitleDots.anchor.setTo(0, 0.5);

    game.add.tween(scoreTitleDots).to({ y: 55 }, 600).start();
    game.add.tween(scoreTitle, scoreTitleDots).to({ y: 55 }, 600).start();
  },
  bind: function () {
    var self = this;
    game.navigator.register({
      style: game.custom.fontStyleSKBlack,
      label: {
        lsk: {
         text:  locale.getLocale('home')
        }
      },
      action: {
        softLeft: function () {
          game.state.start('menu');
        }
      }
    });
  },
  renderText: function () {
    var self = this;
    var scoreLabel = game.add.text(game.width / 2, 140, '0000',
      { font: '35px Avenir Black', fill: '#3f3f3f' });
    scoreLabel.fontWeight = 'bold';
    scoreLabel.anchor.setTo(0.5);

    var score = localStorage.getItem(maxScoreStorage);
    this.animationScore(score, scoreLabel, self);

  },
  animationScore: function (score, scoreLabel, self) {
    var initial = 1;
    var sumValue = 1;

    if (score > 0) {
      var interval = setInterval(function () {
        if ((score - initial) < 100) {
          sumValue = 1;
        } else {
          sumValue = 100;
        }
        initial += sumValue;
        scoreLabel.setText(self.formatScore(initial, 4));
        if (initial >= score) {
          clearInterval(interval);
        }
      }, delay);
    }
  },
  formatScore: function (num, size) {
    var s = num + "";
    while (s.length < size) {
      s = "0" + s;
    }
    return s;
  }
};

var options = {
  listenerUp: null,
  listenerDown: null,
  focus: null,
  focus2: null,
  soundOn: null,
  soundOff: null,
  vibrationOn: null,
  vibrationOff: null,
  index: 0,
  softkey: null,
  vibrationText: null,
  soundText: null,
  locale: null,
  create: function () {
    var background = game.add.graphics();
    background.beginFill(0xe9e9e9, 1);
    background.drawRect(0, 0, 240, 320);
    this.index = 0;
    this.createTitleOption();
    this.focus = game.add.tileSprite(25, 138, 190, 40, 'focus');
    this.focus.visible = true;
    this.focus2 = game.add.tileSprite(25, 178, 190, 40, 'focus');
    this.focus2.visible = false;

    this.soundOn = game.add.tileSprite(178, 151, 28, 15, 'on');
    this.soundOn.visible = false;
    this.soundOff = game.add.tileSprite(178, 151, 28, 15, 'off');
    this.soundOff.visible = false;

    this.vibrationOn = game.add.tileSprite(178, 191, 28, 15, 'on');
    this.vibrationOn.visible = false;
    this.vibrationOff = game.add.tileSprite(178, 191, 28, 15, 'off');
    this.vibrationOff.visible = false;

    this.renderText();
    this.bind();
    this.loadSound();
    this.loadVibration();
  },
  createTitleOption: function () {
    var optionsTitle = game.add.text(10, -20, locale.getLocale('options').toUpperCase(), {
      font: '16px AvenirHeavy',
      fill: '#3f3f3f'
    });
    optionsTitle.anchor.setTo(0, 0.5);
    optionsTitle.fontWeight = 'bold';

    var optionsTitleDots = game.add
      .sprite(optionsTitle.x + optionsTitle.width + 5, -20, 'score_title');
    optionsTitleDots.anchor.setTo(0, 0.5);

    game.add.tween(optionsTitleDots).to({ y: 55 }, 600).start();
    game.add.tween(optionsTitle, optionsTitleDots).to({ y: 55 }, 600).start();

  },
  bind: function () {
    var self = this;
    game.navigator.register({
      style: game.custom.fontStyleSKBlack,
      label: {
        lsk: {
         text:  locale.getLocale('home')
        },
        rsk: {
         text:  locale.getLocale('about'),
        }
      },
      action: {
        softLeft: function () {
          game.state.start('menu');
        },
        enter: function () {
          self.select();
        },
        softRight: function () {
          game.state.start('about');
        }
      }
    });


    this.listenerUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.listenerUp.onDown.add(this.up, this);

    this.listenerDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.listenerDown.onDown.add(this.down, this);
  },
  renderText: function () {
    var style = game.custom.fontStyle;
    this.soundText = game.add.text(40, 148, locale.getLocale('sound'), game.custom.fontStyle);
    this.vibrationText = game.add.text(40, 188, locale.getLocale('vibration'), game.custom.fontStyle);
    this.soundText.addColor('#fff', 0);
    this.vibrationText.addColor('#000', 0);

  },
  select: function () {
    switch (this.index) {
      case 0:
        this.saveData(soundStorage, (!this.soundOn.visible).toString());
        this.loadSound();
        break;
      case 1:
        this.saveData(vibrationStorage, (!this.vibrationOn.visible).toString());
        this.loadVibration();
        break;
    }
  },
  up: function () {
    if (this.index === 1) {
      --this.index;
      this.focus.visible = true;
      this.focus2.visible = false;
      this.soundText.addColor('#fff', 0);
      this.vibrationText.addColor('#000', 0);
    }
  },
  down: function () {
    if (this.index < 1) {
      ++this.index;
      this.focus.visible = false;
      this.focus2.visible = true;
      this.vibrationText.addColor('#fff', 0);
      this.soundText.addColor('#000', 0);
    }
  },
  saveData: function (key, value) {
    localStorage.setItem(key, value);
  },
  loadData: function (key) {
    var value = localStorage.getItem(key);

    if (null === value || undefined === value) {
      this.saveData(key, 'true');
      return 'true';
    }
    if (value) {
      return value;
    }
  },
  loadSound: function () {
    var sound = this.loadData(soundStorage);
    this.soundOn.visible = ('true' === sound);
    this.soundOff.visible = ('false' === sound);
  },
  loadVibration: function () {
    var vibration = this.loadData(vibrationStorage);
    this.vibrationOn.visible = ('true' === vibration);
    this.vibrationOff.visible = ('false' === vibration);
  }
};

var about = {
  create: function () {
    var background = game.add.graphics();
    background.beginFill(0xe9e9e9, 1);
    background.drawRect(0, 0, 240, 320);
    this.createTitleAbout();
    this.renderText();
    this.bind();
  },
  createTitleAbout: function () {

    var aboutTitle = game.add.text(10, -20, locale.getLocale('about')
      .toUpperCase(), {
      font: '16px AvenirHeavy',
      fill: '#3f3f3f'
    });
    aboutTitle.anchor.setTo(0, 0.5);
    aboutTitle.fontWeight = 'bold';
    var aboutTitleDots = game.add.sprite(
      aboutTitle.x + aboutTitle.width + 5, -20, 'score_title');
    aboutTitleDots.anchor.setTo(0, 0.5);

    game.add.tween(aboutTitleDots).to({y: 55}, 600).start();
    game.add.tween(aboutTitle, aboutTitleDots).to({y: 55}, 600).start();

  },

  bind: function () {
    game.navigator.register({
      style: game.custom.fontStyleSKBlack,
      label: {
        lsk: {
          text: locale.getLocale('home')
        }
      },
      action: {
        softLeft: function () {
          game.state.start('menu');
        }
      }
    });
  },
  renderText: function () {
    var wordWrapWidth = 200;
    var texto = game.add.text(game.world.centerX, 100,
      locale.getLocale('aboutText'),
      {
        font: '14px AvenirHeavy',
        fill: '#3f3f3f',
        align: "center"
      });
    texto.anchor.set(0.5);
    texto.wordWrap = true;
    texto.wordWrapWidth = 200;

    // var credits = game.add.text(20, texto.y + 100, locale.getLocale('zazieMusic')
    //   + locale.getLocale('licensedCC'),
    //   {
    //     font: '11px AvenirHeavy',
    //     fill: '#3f3f3f',
    //     align: "left"
    //   });
    // credits.wordWrap = true;
    // credits.wordWrapWidth = wordWrapWidth;
    game.add.sprite(game.width / 2, texto.y + 50, 'kaios_logo')
      .anchor.setTo(0.5);

  }
};

var fieldSize = 5;
var orbColors = 5;
var swapSpeed = 200;
var fallSpeed = 200;
var destroySpeed = 300;
var fastFall = true;
var gameArray = [];
var removeMap = [];

var orbGroup;
var cloneGroup;

var selectedOrb;
var canPick = true;
var gameHeader = null;
var boardMarginTop = 60;
var boardMarginLeft = 10;
var selectorMarginTop = boardMarginTop + 5;
var selectorMarginLeft = boardMarginLeft;
var playTime = 60;
var bonusTimePrimaryMove = 4;
var bonusTimeSecondaryMove = 2;
var actualBonusTime = bonusTimePrimaryMove;

var timeLabel;
var scoreLabel;
var timer;
var scoreValue = 0;
var pointPerOrb = 1;
var bonusPointConstant = 1;
var accumulatedBonusPoints = 0;
var maxScore = 0;
var canPlay = true;

var plus1, plus3;

var shouldVibrate = false;
var game_start = {
  selectorPosition: [0, 0],
  selectorPositionPrevious: [0, 0],
  selector: null,
  moves: [],
  clusters: [],
  create: function () {
    playTime = 60;
    this.selectorPosition = [0, 0];
    scoreValue = 0;
    selectedOrb = null;
    canPlay = true;

    this.toggleSound();
    this.toggleVibration();

    game.add.tileSprite(0, 0, 240, 320, 'bg');
    this.drawField(true);
    this.drawHeader();

    maxScore = localStorage.getItem(maxScoreStorage);
    canPick = true;
    this.formatTimer();
    this.bind();
    timer = game.time.create(false);
    timer.loop(Phaser.Timer.SECOND, this.updateCounter, this);
    timer.start();
  },
  toggleSound: function () {
    var shouldPlay = this.loadData(soundStorage);
    if (shouldPlay) {
      game.bgSound.play('', 0, 0.4, true);
    } else {
      game.bgSound.stop();
    }
  },
  loadData: function (key) {
    var value = localStorage.getItem(key);

    if (null === value || undefined === value) {
      this.saveData(key, 'true');
      return true;
    } else {
      return JSON.parse(value);
    }
  },
  saveData: function (key, value) {
    localStorage.setItem(key, value);
  },
  // save the score and the MaxScore if is score is high
  saveGame: function () {
    localStorage.setItem(actualScore, scoreValue);
    this.maxScore = parseInt(localStorage.getItem(maxScoreStorage));

    if (scoreValue > this.maxScore) {
      localStorage.setItem(maxScoreStorage, scoreValue);
    }


  },
  toggleVibration: function () {
    shouldVibrate = ('true' === localStorage.getItem(vibrationStorage));
  },
  vibrate: function () {
    if (shouldVibrate) {
      navigator.vibrate(100);
    }
  },
  updateCounter: function () {
    playTime--;
    playTime = Math.abs(playTime);
    this.formatTimer();
    if (playTime == 0) {
      canPlay = false;
      timer.stop();
      Render.GameOver.show(scoreValue);
      this.saveGame();
    }
  },
  formatTimer: function () {
    var minutes = Math.floor(playTime / 60);
    var seconds = playTime - (minutes * 60);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;

    timeLabel.setText(minutes + ':' + seconds);
  },
  updateSoftkey: function () {
    var self = this;

    game.navigator.register({
      style: game.custom.fontStyleSKWhite,
      label: {
        lsk: {
         text: locale.getLocale('restart')
        },
        rsk: {
         text: locale.getLocale('options')
        },
        csk: null !== selectedOrb ? locale.getLocale('deselect') : locale.getLocale('select')
      },
      action: {
        softLeft: function () {
          game.bgSound.stop();
          game.ads.nextState = 'game';
          game.state.start('ads', true, false, 'restart');
        },
        softRight: function ()
        {
          game.bgSound.stop();
          self.showOptions();
        },
        enter: function () {
          self.toggleSelect();
        },
        ArrowDown: function () {
          self.moveSelectorDown();
        },
        ArrowLeft: function () {
          self.moveSelectorLeft();
        },
        ArrowRight: function () {
          self.moveSelectorRight();
        },
        ArrowUp: function () {
          self.moveSelectorUp();
        },
        5: function () {
          self.toggleSelect();
        },
        2: function () {
          self.moveSelectorUp();
        },
        8: function () {
          self.moveSelectorDown();
        },
        4: function () {
          self.moveSelectorLeft();
        },
        6: function () {
          self.moveSelectorRight();
        },
        0: function () {
          Render.Options.show();
        }
      }
    });
    game.navigator.group.children.forEach(function (item) {
      item.setShadow(3, 3, 'rgba(0,0,0,0.3)', 5);
    });
  },
  bind: function () {
    this.updateSoftkey();
  },
  showOptions: function () {
    Render.Options.show();
  },
  setSelectorPosition: function () {
    var x = (this.selectorPosition[0] * orbSize) + selectorMarginLeft;
    var y = (this.selectorPosition[1] * orbSize) + selectorMarginTop;

    var selectorTween = game.add.tween(this.selector).to({ x: x, y: y }, 200);
    selectorTween.onComplete.add(function () {
    });
    selectorTween.start();
  },
  moveSelectorToDiagonalLeftUp: function () {
    this.orbSelect();
    this.moveSelectorUp();
    this.moveSelectorLeft();
  },
  moveSelectorToDiagonalRightUp: function () {
    this.orbSelect();
    this.moveSelectorUp();
    this.moveSelectorRight();
  },

  moveSelectorToDiagonalRightDown: function () {
    this.orbSelect();
    this.moveSelectorDown();
    this.moveSelectorRight();
  },
  moveSelectorToDiagonalLeftDown: function () {
    this.orbSelect();
    this.moveSelectorDown();
    this.moveSelectorLeft();
  },
  moveSelectorDown: function (e) {
    if (canPlay) {
      this.selectorPositionPrevious = Object.assign([], this.selectorPosition);
      if (this.selectorPosition[1] < fieldSize - 1) {
        this.selectorPosition[1]++;
      }
      this.setSelectorPosition();
      if (selectedOrb != null) {
        this.orbSelect();
      }
    }

  },
  moveSelectorUp: function (e) {
    if (canPlay) {
      this.selectorPositionPrevious = Object.assign([], this.selectorPosition);
      if (this.selectorPosition[1] > 0) {
        this.selectorPosition[1]--;
      }
      this.setSelectorPosition();
      if (selectedOrb !== null) {
        this.orbSelect();
      }
    }
  },
  moveSelectorLeft: function (e) {
    this.selectorPositionPrevious = Object.assign([], this.selectorPosition);
    if (canPlay) {
      if (this.selectorPosition[0] > 0) {
        this.selectorPosition[0]--;
      }
      this.setSelectorPosition();
      if (selectedOrb != null) {
        this.orbSelect();
      }
    }
  },
  moveSelectorRight: function (e) {
    this.selectorPositionPrevious = Object.assign([], this.selectorPosition);
    if (canPlay) {
      if (this.selectorPosition[0] < fieldSize - 1) {
        this.selectorPosition[0]++;
      }
      this.setSelectorPosition();
      if (selectedOrb != null) {
        this.orbSelect();
      }
    }
  },
  update: function () { },
  drawHeader: function () {
    gameHeader = game.add.group();

    var bgSprite = game.add.sprite(0, 0, 'header_bg');
    gameHeader.add(bgSprite);

    var timeTitle = game.add.text(10, 10,
      locale.getLocale('time'), { font: '14px Avenir', fill: '#ffffff' });
    timeLabel = game.add.text(10, 25,
      '00:00', { font: '18px Avenir', fill: '#ffffff' });

    var scoreTitle = game.add.text(0, 10,
      locale.getLocale('score'), { font: '14px Avenir', fill: '#ffffff' });
    scoreTitle.x = game.width - scoreTitle.width - 10;

    scoreLabel = game.add.text(game.width - 50, 25,
      '0000', { font: '18px Avenir', fill: '#ffffff' });

    gameHeader.add(timeTitle);
    gameHeader.add(scoreTitle);
    gameHeader.add(timeLabel);
    gameHeader.add(scoreLabel);

    plus1 = game.add.tileSprite(game.world.centerX, 30, 40, 40, 'plus1');
    plus1.anchor.set(0.5);
    plus1.alpha = 0;
    plus3 = game.add.tileSprite(game.world.centerX, 30, 40, 40, 'plus3');
    plus3.alpha = 0;
    plus3.anchor.set(0.5);
  },
  drawField: function (shouldCreateGroup) {
    if (shouldCreateGroup) {
      game.add.tileSprite(0, boardMarginTop - 1, 240, 240, 'board_bg');
      orbGroup = game.add.group();
      cloneGroup = game.add.group();
      this.selector = game.add.sprite(selectorMarginLeft, selectorMarginTop, 'selector');
    }

    for (var i = 0; i < fieldSize; i++) {
      gameArray[i] = [];
      for (var j = 0; j < fieldSize; j++) {
        var orb = game.add.sprite(
          orbSize * j + orbSize / 2,
          orbSize * i + orbSize / 2, "orbs");
        orb.anchor.set(0.5);
        orbGroup.add(orb);
        do {
          var randomColor = game.rnd.between(0, orbColors - 1);
          orb.frame = randomColor;
          gameArray[i][j] = {
            orbColor: randomColor,
            orbSprite: orb
          }
        } while (this.isMatch(i, j));
      }
    }

    if (selectedOrb)
      this.orbSelect();
    orbGroup.y = boardMarginTop + 5;
    orbGroup.x = boardMarginLeft;
    cloneGroup.y = boardMarginTop + 5;
    cloneGroup.x = boardMarginLeft;

    this.findMoves();
  },

  toggleSelect: function () {
    if (canPick) {
      this.orbSelect();
    } else {
      this.orbDeselect();
    }
    this.updateSoftkey();
  },
  orbSelect: function () {
    var row, col;
    accumulatedBonusPoints = 0;
    actualBonusTime = bonusTimePrimaryMove;

    if (canPick) {
      row = this.selectorPosition[1];
      col = this.selectorPosition[0];
      var pickedOrb = this.gemAt(row, col);
      if (pickedOrb !== -1) {
        if (selectedOrb === null) {
          pickedOrb.orbSprite.scale.setTo(1.2);
          pickedOrb.orbSprite.bringToTop();
          selectedOrb = pickedOrb;
          game.input.addMoveCallback(this.orbMove, this);
        } else {
          if (this.areTheSame(pickedOrb, selectedOrb)) {
            selectedOrb.orbSprite.scale.setTo(1);
            selectedOrb = null;
            this.updateSoftkey();
          }
          else {
            if (this.areNext(pickedOrb, selectedOrb)) {
              selectedOrb.orbSprite.scale.setTo(1);
              this.swapOrbs(selectedOrb, pickedOrb, true, this);
            }
            else {
              selectedOrb.orbSprite.scale.setTo(1);
              pickedOrb.orbSprite.scale.setTo(1.2);
              selectedOrb = pickedOrb;
              game.input.addMoveCallback(this.orbMove, this);
            }
          }
        }
      }
    }
  },

  orbDeselect: function (e) {
    game.input.deleteMoveCallback(this.orbMove, this);
  },

  orbMove: function (event, pX, pY) {
    if (event.id == 0 && selectedOrb != null) {
      var distX = pX - selectedOrb.orbSprite.x;
      var distY = pY - selectedOrb.orbSprite.y;
      var deltaRow = 0;
      var deltaCol = 0;

      if (Math.abs(distX) > orbSize / 2) {
        if (distX > 0) {
          deltaCol = 1;
        }
        else {
          deltaCol = -1;
        }
      } else {
        if (Math.abs(distY) > orbSize / 2) {
          if (distY > 0) {
            deltaRow = 1;
          }
          else {
            deltaRow = -1;
          }
        }
      }
      if (deltaRow + deltaCol != 0) {
        var pickedOrb = this.gemAt(this.getOrbRow(selectedOrb) + deltaRow, this.getOrbCol(selectedOrb) + deltaCol);
        if (pickedOrb != -1) {
          selectedOrb.orbSprite.scale.setTo(1);
          this.swapOrbs(selectedOrb, pickedOrb, true);
          game.input.deleteMoveCallback(this.orbMove, this);
        }
      }
    }
  },

  swapOrbs: function (orb1, orb2, swapBack) {
    canPick = false;
    var fromColor = orb1.orbColor;
    var fromSprite = orb1.orbSprite;
    var toColor = orb2.orbColor;
    var toSprite = orb2.orbSprite;
    gameArray[this.getOrbRow(orb1)][this.getOrbCol(orb1)].orbColor = toColor;
    gameArray[this.getOrbRow(orb1)][this.getOrbCol(orb1)].orbSprite = toSprite;
    gameArray[this.getOrbRow(orb2)][this.getOrbCol(orb2)].orbColor = fromColor;
    gameArray[this.getOrbRow(orb2)][this.getOrbCol(orb2)].orbSprite = fromSprite;
    var orb1Tween = game.add.tween(gameArray[this.getOrbRow(orb1)][this.getOrbCol(orb1)].orbSprite).to({
      x: this.getOrbCol(orb1) * orbSize + orbSize / 2,
      y: this.getOrbRow(orb1) * orbSize + orbSize / 2
    }, swapSpeed, Phaser.Easing.Linear.None, true);
    var orb2Tween = game.add.tween(gameArray[this.getOrbRow(orb2)][this.getOrbCol(orb2)].orbSprite).to({
      x: this.getOrbCol(orb2) * orbSize + orbSize / 2,
      y: this.getOrbRow(orb2) * orbSize + orbSize / 2
    }, swapSpeed, Phaser.Easing.Linear.None, true);
    orb2Tween.onComplete.add(function () {
      if (!this.matchInBoard() && swapBack) {
        this.swapOrbs(orb1, orb2, false);
        this.selectorPosition = Object.assign([], this.selectorPositionPrevious);
        this.setSelectorPosition();
      }
      else {
        if (this.matchInBoard()) {
          this.handleMatches();
        }
        else {
          canPick = true;
          selectedOrb = null;
          this.updateSoftkey();
        }
      }
    }.bind(this));
  },
  areNext: function (orb1, orb2) {
    return Math.abs(this.getOrbRow(orb1) - this.getOrbRow(orb2)) + Math.abs(this.getOrbCol(orb1) - this.getOrbCol(orb2)) == 1;
  },

  areTheSame: function (orb1, orb2) {
    return this.getOrbRow(orb1) == this.getOrbRow(orb2) && this.getOrbCol(orb1) == this.getOrbCol(orb2);
  },

  gemAt: function (row, col) {
    if (row < 0 || row >= fieldSize || col < 0 || col >= fieldSize) {
      return -1;
    }
    return gameArray[row][col];
  },

  getOrbRow: function (orb) {
    return Math.floor(orb.orbSprite.y / orbSize);
  },

  getOrbCol: function (orb) {
    return Math.floor(orb.orbSprite.x / orbSize);
  },

  isHorizontalMatch: function (row, col) {
    return this.gemAt(row, col).orbColor == this.gemAt(row, col - 1).orbColor && this.gemAt(row, col).orbColor == this.gemAt(row, col - 2).orbColor;
  },

  isVerticalMatch: function (row, col) {
    return this.gemAt(row, col).orbColor == this.gemAt(row - 1, col).orbColor && this.gemAt(row, col).orbColor == this.gemAt(row - 2, col).orbColor;
  },

  isMatch: function (row, col) {
    return this.isHorizontalMatch(row, col) || this.isVerticalMatch(row, col);
  },

  matchInBoard: function () {
    for (var i = 0; i < fieldSize; i++) {
      for (var j = 0; j < fieldSize; j++) {
        if (this.isMatch(i, j)) {
          return true;
        }
      }
    }
    return false;
  },

  handleMatches: function () {
    removeMap = [];
    for (var i = 0; i < fieldSize; i++) {
      removeMap[i] = [];
      for (var j = 0; j < fieldSize; j++) {
        removeMap[i].push(0);
      }
    }
    this.handleHorizontalMatches();
    this.handleVerticalMatches();
    this.destroyOrbs();
  },

  handleVerticalMatches: function () {
    for (var i = 0; i < fieldSize; i++) {
      var colorStreak = 1;
      var currentColor = -1;
      var startStreak = 0;
      for (var j = 0; j < fieldSize; j++) {
        if (this.gemAt(j, i).orbColor == currentColor) {
          colorStreak++;
        }
        if (this.gemAt(j, i).orbColor != currentColor || j == fieldSize - 1) {
          if (colorStreak >= 3) {
            for (var k = 0; k < colorStreak; k++) {
              removeMap[startStreak + k][i]++;
            }
          }
          startStreak = j;
          colorStreak = 1;
          currentColor = this.gemAt(j, i).orbColor;
        }
      }
    }
  },
  handleHorizontalMatches: function () {
    for (var i = 0; i < fieldSize; i++) {
      var colorStreak = 1;
      var currentColor = -1;
      var startStreak = 0;
      for (var j = 0; j < fieldSize; j++) {
        if (this.gemAt(i, j).orbColor == currentColor) {
          colorStreak++;
        }
        if (this.gemAt(i, j).orbColor != currentColor || j == fieldSize - 1) {
          if (colorStreak >= 3) {
            for (var k = 0; k < colorStreak; k++) {
              removeMap[i][startStreak + k]++;
            }
          }
          startStreak = j;
          colorStreak = 1;
          currentColor = this.gemAt(i, j).orbColor;
        }
      }
    }
  },
  updateScore: function (orbsDestroyed) {
    var scoreL = scoreValue = (orbsDestroyed + scoreValue);

    scoreL += '';
    switch (scoreL.length) {
      case 1:
        scoreL = '0' + scoreL;
      case 2:
        scoreL = '0' + scoreL;
      case 3:
        scoreL = '0' + scoreL;
    }
    scoreLabel.setText(scoreL);
  },

  updateTime: function (bonusTime) {
    playTime += bonusTime;
    this.animateBonusTime(bonusTime);
  },
  animateBonusTime: function (bonusTime) {
    var plus = bonusTime === bonusTimePrimaryMove ? plus3 : plus1;

    var sizeFadeIn = game.add.tween(plus.scale).to({ x: 1.2, y: 1.2 }, 500);
    var sizeFadeOut = game.add.tween(plus.scale).to({ x: 1, y: 1 }, 200);
    var tweenFadeIn = game.add.tween(plus).to({
      alpha: 1,
      scaleX: 2,
      scaleY: 2
    }, 500);
    var tweenFadeOut = game.add.tween(plus).to({
      alpha: 0,
      scaleX: 1,
      scaleY: 1
    }, 500);
    tweenFadeIn.chain(tweenFadeOut);
    tweenFadeIn.start();
    sizeFadeIn.chain(sizeFadeOut);
    sizeFadeIn.start();
  },
  destroyOrbs: function () {
    var destroyed = 0;
    for (var i = 0; i < fieldSize; i++) {
      for (var j = 0; j < fieldSize; j++) {
        if (removeMap[i][j] > 0) {
          var destroyTween = game.add.tween(gameArray[i][j].orbSprite).to({
            alpha: 0
          }, destroySpeed, Phaser.Easing.Linear.None, true);
          destroyed++;

          destroyTween.onComplete.add(function (orb) {
            orb.destroy();
            destroyed--;
            if (destroyed == 0) {
              this.vibrate();
              this.makeOrbsFall();
              if (fastFall) {
                this.replenishField();
              }
            }
          }.bind(this));
          gameArray[i][j] = null;
        }
      }
    }
    this.updateTime(actualBonusTime);
    actualBonusTime = bonusTimeSecondaryMove;
    this.updateScore(destroyed + (accumulatedBonusPoints * destroyed));
    accumulatedBonusPoints += bonusPointConstant;
  },
  makeOrbsFall: function () {
    var fallen = 0;
    var restart = false;
    for (var i = fieldSize - 2; i >= 0; i--) {
      for (var j = 0; j < fieldSize; j++) {
        if (gameArray[i][j] != null) {
          var fallTiles = this.holesBelow(i, j);
          if (fallTiles > 0) {
            if (!fastFall && fallTiles > 1) {
              fallTiles = 1;
              restart = true;
            }
            var orb2Tween = game.add.tween(gameArray[i][j].orbSprite).to({
              y: gameArray[i][j].orbSprite.y + fallTiles * orbSize
            }, fallSpeed, Phaser.Easing.Linear.None, true);
            fallen++;
            orb2Tween.onComplete.add(function () {
              fallen--;
              if (fallen == 0) {
                if (restart) {
                  this.makeOrbsFall();
                }
                else {
                  if (!fastFall) {
                    this.replenishField();
                  }
                }
              }
            }.bind(this));
            gameArray[i + fallTiles][j] = {
              orbSprite: gameArray[i][j].orbSprite,
              orbColor: gameArray[i][j].orbColor
            };
            gameArray[i][j] = null;
          }
        }
      }
    }
    if (fallen == 0) {
      this.replenishField();
    }
  },
  replenishField: function () {
    var replenished = 0;
    var restart = false;
    for (var j = 0; j < fieldSize; j++) {
      var emptySpots = this.holesInCol(j);
      if (emptySpots > 0) {
        if (!fastFall && emptySpots > 1) {
          emptySpots = 1;
          restart = true;
        }
        for (var i = 0; i < emptySpots; i++) {
          var orb = game.add.sprite(orbSize * j + orbSize / 2, -(orbSize * (emptySpots - 1 - i) + orbSize / 2), "orbs");
          orb.anchor.set(0.5);
          orbGroup.add(orb);
          var randomColor = game.rnd.between(0, orbColors - 1);
          orb.frame = randomColor;
          gameArray[i][j] = {
            orbColor: randomColor,
            orbSprite: orb
          };
          var orb2Tween = game.add.tween(gameArray[i][j].orbSprite).to({
            y: orbSize * i + orbSize / 2
          }, fallSpeed, Phaser.Easing.Linear.None, true);
          replenished++;
          orb2Tween.onComplete.add(function () {
            replenished--;
            if (replenished == 0) {
              if (restart) {
                this.makeOrbsFall();
              }
              else {
                if (this.matchInBoard()) {
                  game.time.events.add(250, this.handleMatches, this);
                }
                else {
                  canPick = true;
                  selectedOrb = null;
                  this.updateSoftkey();
                }

              }
            }
          }.bind(this))
        }
      }
    }
    this.findMoves();
  },
  showNoPlay: function () {
    var self = this;
    if (canPlay) {
      this.updateSoftkey();

      setTimeout(function () {
        if (canPick) {
          canPlay = false;
          timer.pause();
          canPick = false;
          var confirmBack = game.add.graphics();
          confirmBack.beginFill(0xe9e9e9, 0.9);
          confirmBack.drawRect(0, 59, 240, 230);

          var noPlayText = game.add.text(game.world.centerX, game.world.centerY,
            locale.getLocale('possibleMoves'), {
              font: '20px Heavitas',
              fill: '#000',
              align: 'center'
            });

          noPlayText.wordWrap = true;
          noPlayText.wordWrapWidth = 160;
          noPlayText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
          noPlayText.anchor.set(0.5);
          noPlayText.setTextBounds(0, 0, 150, 100);
          var noPlayTextAnim = game.add.tween(noPlayText).to({ alpha: 1 }, 200, 'Linear', true).start();
          noPlayTextAnim.onComplete.add(function () {
            setTimeout(function () {
              noPlayText.destroy();
              confirmBack.destroy();
              self.recreateField();
              canPlay = true;
              if (selectedOrb) {
                self.orbSelect();
              }
            }, 2500);
          });
        }
      }, 600);
    }
  },
  holesBelow: function (row, col) {
    var result = 0;
    for (var i = row + 1; i < fieldSize; i++) {
      if (gameArray[i][col] == null) {
        result++;
      }
    }
    return result;
  },
  holesInCol: function (col) {
    var result = 0;
    for (var i = 0; i < fieldSize; i++) {
      if (gameArray[i][col] == null) {
        result++;
      }
    }
    return result;
  },
  swap: function (x1, y1, x2, y2) {
    var typeswap = gameArray[x1][y1].orbColor;
    gameArray[x1][y1].orbColor = gameArray[x2][y2].orbColor;
    gameArray[x2][y2].orbColor = typeswap;
  },
  findMoves: function () {
    this.moves = []
    for (var j = 0; j < fieldSize; j++) {
      for (var i = 0; i < fieldSize - 1; i++) {
        this.swap(i, j, i + 1, j);
        this.findClusters();
        this.swap(i, j, i + 1, j);
        if (this.clusters.length > 0) {
          this.moves.push({ column1: i, row1: j, column2: i + 1, row2: j });
        }
      }
    }
    for (var i = 0; i < fieldSize; i++) {
      for (var j = 0; j < fieldSize - 1; j++) {
        this.swap(i, j, i, j + 1);
        this.findClusters();
        this.swap(i, j, i, j + 1);
        if (this.clusters.length > 0) {
          this.moves.push({ column1: i, row1: j, column2: i, row2: j + 1 });
        }
      }
    }
    if (this.moves.length === 0) {
      this.showNoPlay();
    }
    this.clusters = [];
  },
  findClusters: function () {
    this.clusters = [];
    for (var j = 0; j < fieldSize; j++) {
      var matchlength = 1;
      for (var i = 0; i < fieldSize; i++) {
        var checkcluster = false;
        if (i == fieldSize - 1) {
          checkcluster = true;
        } else {
          if (gameArray[i][j].orbColor == gameArray[i + 1][j].orbColor &&
            gameArray[i][j].orbColor != -1) {
            matchlength += 1;
          } else {
            checkcluster = true;
          }
        }
        if (checkcluster) {
          if (matchlength >= 3) {
            this.clusters.push({
              column: i + 1 - matchlength, row: j,
              length: matchlength, horizontal: true
            });
          }
          matchlength = 1;
        }
      }
    }
    for (var i = 0; i < fieldSize; i++) {
      var matchlength = 1;
      for (var j = 0; j < fieldSize; j++) {
        var checkcluster = false;
        if (j == fieldSize - 1) {
          checkcluster = true;
        } else {
          if (gameArray[i][j].orbColor == gameArray[i][j + 1].orbColor &&
            gameArray[i][j].orbColor != -1) {
            matchlength += 1;
          } else {
            checkcluster = true;
          }
        }
        if (checkcluster) {
          if (matchlength >= 3) {
            this.clusters.push({
              column: i, row: j + 1 - matchlength,
              length: matchlength, horizontal: false
            });
          }
          matchlength = 1;
        }
      }
    }
  },
  recreateField: function () {
    canPlay = false;
    var x = this.getRandomInt(0, fieldSize - 1);
    var y = this.getRandomInt(0, fieldSize - 1);

    var orb = this.gemAt(x, y).orbSprite;
    cloneGroup.add(orb);
    var transitionTween = game.add.tween(orb.scale).to({
      x: 42,
      y: 42
    }, 500);
    var self = this;
    game.add.tween(this.selector).to({ alpha: 0 }, 200).start();

    transitionTween.onComplete.add(function () {
      var reshufflingText = game.add.text(game.world.centerX, 167,
        locale.getLocale('reshufflig'), { font: '20px Heavitas', fill: '#fff' });
      reshufflingText.anchor.set(0.5);
      reshufflingText.alpha = 0.1;

      var reshufflingTextAnim = game.add.tween(reshufflingText).to({ alpha: 1 }, 200, "Linear", true).start();
      var transitionTween2 = game.add.tween(orb.scale).to({
        x: 0,
        y: 0
      }, 400);
      setTimeout(function () {
        orbGroup.removeAll(true);
        self.drawField(false);
        transitionTween2.start();
        var reshufflingTextAnim2 = game.add.tween(reshufflingText).to({ alpha: 0 }, 300, "Linear", true).start();
        transitionTween2.onComplete.add(function () {
          reshufflingTextAnim2.onComplete.add(function () {
            reshufflingText.destroy();
          });

          cloneGroup.removeAll(true);
          game.add.tween(self.selector).to({ alpha: 1 }, 200).start();
          canPlay = true;
          canPick = true;
          timer.resume();
        });

      }, 1000);

    });

    transitionTween.start();
  },
  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

var menu = {
  create: function () {
    game.add.tileSprite(0, 0, 240, 320, 'bg_menu');
    game.add.tileSprite(18, 35, 202, 103, 'logo');
    game.add.tileSprite(48, 190, 140, 42, 'btn_play');

    this.renderText();
    this.bind();
  },
  bind: function () {
    var self = this;
    game.navigator.register({
      style: game.custom.fontStyleSKWhite,
      label: {
        lsk: {
          text: locale.getLocale('score')
        },
        rsk: {
          text: locale.getLocale('options')
        }
      },
      action: {
        softLeft: function () {
          game.state.start('score');
        },
        enter: function () {
          game.state.start('game');
        },
        softRight: function () {
          game.state.start('options');
        }
      }
    });
  },
  renderText: function () {
    //label play
    var label = this.game.add.text(this.game.world.centerX, game.height * 0.67, locale.getLocale('play').toUpperCase(), { font: '13px AvenirHeavy', fill: '#ffffff' });
    label.anchor.setTo(0.5);
    label.fontWeight = 'bold';
  }
};

var orbSize = 44;

var splash = {
  locale: null,
  preload: function () {
    game.load.image('splash_logo', 'assets/kaios-logo.png');
    var arr = document.querySelectorAll('.fontPreload');
    for (var i = 0; i < arr.length; i++) {
      arr[i].remove();
    }
    game.navigator = game.plugins.add(Phaser.Plugin.Navigator);
  },
  create: function () {
    var logo = game.add.sprite(game.world.centerX, 140, 'splash_logo');
    logo.anchor.set(0.5);
    this.loadData(soundStorage);
    this.loadData(vibrationStorage);
    var start = game.add.text(game.world.centerX, game.world.centerY + 20, locale.getLocale('presents'), {
      font: '20px Bebas Neue',
      fill: '#fff'
    });
    start.anchor.set(0.5);

    document.addEventListener('visibilitychange', function (e) {
      if (document.hidden) {
        game.sound.mute = true;
        if (game.state.current === 'game' && !Render.Options.isPaused) {
          if (!Render.GameOver.isLose ) {
            Render.Options.show();
          }
        }
      } else {
        if (Render.Options.isPaused || Render.Confirm.isOpen) {
          game.sound.mute = true;
        } else {
          game.sound.mute = false;
        }
      }
    });

    game.load.onLoadComplete.add(function () {
      this.decode(game, this, function() {
        game.init = true;
        game.bgSound.volume = 0.4;
        game.ads.nextState = 'menu';
        game.state.start('ads', true, false, 'splash');
      });
    }, this);
    this.start();
  },

  decode: function (game, context, callback) {
    var sounds = [];
    game.bgSound = game.add.audio('bg_sound');

    sounds = [
      game.bgSound
    ];
    game.sound.setDecodedCallback(sounds, function() {
      callback();
    }, context);
  },

  loadSounds: function () {
    // BG Sound
    game.load.audio('bg_sound', ['assets/sounds/zazie.mp3']);
  },

  start: function () {
    game.load.image('bg_menu', 'assets/home-background.png');
    game.load.image('btn_play', "assets/btn-play.png");
    game.load.image('logo', "assets/logo-color.png");

    //dialog confirm
    game.load.image('bg-dialog', 'assets/dialog.png');

    // Game assets
    game.load.spritesheet("orbs", "assets/sprites/tile-colorful.png", orbSize, orbSize);
    game.load.spritesheet('selector', "assets/sprites/focus-select.png", orbSize, orbSize);
    game.load.image('board_bg', "assets/game-board.png");
    game.load.image('header_bg', "assets/header_footer_bg.png");
    game.load.image('no_play_bg', "assets/bg_50.png");
    game.load.spritesheet('plus1', "assets/sprites/bonus-time_1.png", 40, 40);
    game.load.spritesheet('plus3', "assets/sprites/bonus-time_3.png", 40, 40);

   //Options
   game.load.image('focus', 'assets/focus-options.png');
   game.load.image('on', 'assets/selector-on.png');
   game.load.image('off', 'assets/selector-off.png');

   // Game Over
   game.load.image('gameover_title', "assets/label-game_over.png");
   game.load.image('new_max_record', "assets/new-record.png");

    // Score
    game.load.image('score_title', "assets/label-dots.png");

    // About
    game.load.image('kaios_logo', "assets/logo-kaios.png");

    this.loadSounds();
    game.load.start();
  },
  loadData: function (key) {
    var value = localStorage.getItem(key);
    if (null === value || undefined === value) {
      this.saveData(key, 'true');
      return 'true';
    }
    return value;
  },
  saveData: function (key, value) {
    localStorage.setItem(key, value);
  }
};

var ads = {
  init: function (adname) {
    this.adname = adname;
  },
  create: function () {
    game.sound.mute = true;
    var onAdFinished = function() {
      game.sound.mute = false;
      window.focus();
      game.state.start(game.ads.nextState);
    };
    game.ads.showAds({
      adname: this.adname,
      onAdFinished: onAdFinished
    });
    this.bind();

  },
  bind: function () {
    if (game.navigator) {
      game.navigator.register({
        style: game.custom.fontStyleSKWhite,
        label: {},
        action: {
          softLeft: function () {
          },
          enter: function () {
          },
          softRight: function () {
          },
          backspace: function () {
          },
          endCall: function () {
          }
        }
      });
    }
  }

};

function JioKaiAds(adsWrapperId) {
  this.adsWrapperId = adsWrapperId;
}

JioKaiAds.prototype.showAds = function(containerCfg) {
  if (
    navigator.connection &&
    ('wifi' === navigator.connection.type ||
      'cellular' === navigator.connection.type)
  ) {
    const timeout = setTimeout(function() {
      const frame = document.getElementById('iframe-ads');
      if (frame) {
        frame.remove();
      }
      clearTimeout(timeout);
      navigator.spatialNavigationEnabled = false;
      containerCfg.onAdFinished();
    }, 10000);

    const ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', 'iframe-ads');
    ifrm.setAttribute('style', 'border: none;');
    document.getElementById(this.adsWrapperId).appendChild(ifrm);
    const kaiJioAds = KaiDisplayAdsSdk('iframe-ads');
    kaiJioAds.init({
      banner: {
        w: window.screen.width,
        h: (window.screen.height - 26), // top bar 26px deducted
        topmargin: 26,
        adspotkey: '0fed88cc',
        pkgname: 'com.kaiostech.gems',
        adrefresh: 0,
        customData: '', // '{"key1": "Some key value to be sent", "key2": "Some key2 value to be sent"}'
        advid: window.advid,
        uid: window.uid
      },
      listeners: {
        adviewability: function() {
          clearTimeout(timeout);
          navigator.spatialNavigationEnabled = true;
          console.log('...............................................adsvisibility!!!!');
        },
        adclose: function() {
          clearTimeout(timeout);
          console.log('ad close 1');
          navigator.spatialNavigationEnabled = false;
          console.log('close spatiaNavigation...............');
          containerCfg.onAdFinished();
        },
        adclick: function() {
          clearTimeout(timeout);
          console.log('ad clicked 1');
        }
      }
    });
  } else {
    // we directory enter the game
    navigator.spatialNavigationEnabled = false;
    containerCfg.onAdFinished();
  }
}

var game = new Phaser.Game(
  240,
  320,
  Phaser.AUTO,
  'phaser-game'
);

var Render = {};//Need to use renderFiles

game.custom = Object.freeze({
  debug: true,
  fontStyle: Object.freeze({
    "font": "AvenirHeavy",
    "fontFamily": "Avenir",
    "fontSize": "16px",
    "fill": "#FFFFFF"
  }),
  fontStyleSKWhite: Object.freeze({
    "font": "AvenirHeavy",
    "fontFamily": "Avenir",
    "fontSize": "16px",
    "fill": "#FFFFFF"
  }),
  fontStyleSKBlack: Object.freeze({
    "font": "AvenirHeavy",
    "fontFamily": "Avenir",
    "fontSize": "16px",
    "fill": "#000000"
  })
});

var maxScore = localStorage.getItem(maxScoreStorage);
if (!maxScore)
  localStorage.setItem(maxScoreStorage, 0);

var sound = localStorage.getItem(soundStorage);
if (!soundStorage)
  localStorage.setItem(soundStorage, 'true');

var vibration = localStorage.getItem(vibrationStorage);
if (!vibrationStorage)
  localStorage.setItem(vibrationStorage, 'true');


// var adsConfig = {
//   kai: {
//     app: "Gems",
//     publisher: 'e6dfb88f-ca58-4816-85ad-27eb07964d34',
//     loadingTheme: 'dark',
//     ads: {
//         splash: {
//             slotName: "splash",
//             type: "Interstitial"
//         },
//         restart: {
//             slotName: "restart",
//             type: "Interstitial"
//         },
//         playAgain: {
//             slotName: "playAgain",
//             type: "Interstitial"
//         },
//         goHome: {
//             slotName: "goHome",
//             type: "Interstitial"
//         }
//     },
//     timeout: 5000
//   },
//   jio: {
//     loadingTheme: 'dark',
//     ads: {
//         restart: {
//             source: 'com.kaiostech.gems',
//             adspot: '0fed88cc',
//             type: 'Interstitial'
//         },
//         playAgain: {
//             source: 'com.kaiostech.gems',
//             adspot: '0fed88cc',
//             type: 'Interstitial'
//         },
//         goHome: {
//             source: 'com.kaiostech.gems',
//             adspot: '0fed88cc',
//             type: 'Interstitial'
//         }
//     }
//   }
// };

game.ads = new JioKaiAds('adsWrapper');
// game.ads.setConfig(adsConfig);

game.state.add('ads', ads);
game.state.add('splash', splash);
game.state.add('menu', menu);
game.state.add('game', game_start);
game.state.add('about', about);
game.state.add('options', options);
game.state.add('score', score);

game.init = false;
navigator.mozL10n.ready(function () {

    if (Render.Options.isPaused) {
      Render.Options.hide();
    }
    if (Render.Confirm.isOpen) {
      Render.Confirm.hide();
    }
    if (Render.GameOver.isLose) {
      Render.GameOver.hide();
    }
    game.paused = false;
    if (!game.init) {
      game.state.start('splash');
    } else {
      game.bgSound.stop();
      game.state.start('menu');
    }

});

// Conditional add for scroll Advertisement
document.addEventListener("keydown", function (e) {
  e.key === "ArrowDown" && e.preventDefault();
});
document.addEventListener("keydown", function (e) {
  e.key === "ArrowUp" && e.preventDefault();
});




Render.Confirm = {
  isOpen: false,
  show: function (text) {
    this.isOpen = true;

    if (game.state.current === 'game' && !Render.Options.isPaused) {
      game.paused = true;
    }

    this.confirmGroup = game.add.group();
    var confirmBack = game.add.graphics();
    confirmBack.beginFill(0x1a0129, 0.9);
    confirmBack.drawRect(0, 0, 240, 320);

    game.navigator.register({
      style: game.custom.fontStyleSKWhite,
      label: {
        lsk: {
         text: locale.getLocale('cancel')
        },
        rsk: {
        text: locale.getLocale('quit')
        }
      },
      action: {
        softLeft: function () {
          game_start.toggleSound();
          Render.Confirm.hide();
        },
        softRight: function () {
          // window.close();
        },
        backspace: function () {
          game_start.toggleSound();
          Render.Confirm.hide();
        }
      }
    });

    var logo = game.add.image(game.world.centerX, game.world.centerY - 50, 'logo');
    logo.anchor.setTo(0.5);

    var dialog = game.add.image(game.world.centerX, game.height - 80, 'bg-dialog');
    dialog.anchor.setTo(0.5);

    var txt = game.add.text(dialog.x, dialog.y, locale.getLocale('confirmText'), { fontSize: 16, align: "center", fill: "#0a0a0a" });
    txt.anchor.setTo(0.5);
    txt.wordWrap = true;
    txt.wordWrapWidth = 200;

    this.confirmGroup.addMultiple([confirmBack, logo, dialog, txt]);
  },
  hide: function () {
    if (game.state.current === 'game' && !Render.Options.isPaused) {
      game.paused = false;
    }
    this.isOpen = false;
    this.confirmGroup.removeAll();
    game.navigator.setLastConfig();
  }
};

Render.Options = {
  isPaused: false,
  show: function () {
    this.isPaused = true;
    game.paused = true;
    game_start.canMove = false;
    this.optionsGroup = game.add.group();

    var background = game.add.graphics();
    background.beginFill(0xffd800, 0.9);
    background.drawRect(0, 0, 240, 320);

    game.navigator.register({
      style: game.custom.fontStyleSKBlack,
      label: {
        lsk: {
         text: locale.getLocale('home')
        },
        rsk: {
         text: locale.getLocale('resume')
        }
      },
      action: {
        softLeft: function () {
          game.bgSound.stop();
          Render.Options.hide();
          game.state.start('menu');
        },
        enter: function () {
          Render.Options.selectOpValue();
        },
        softRight: function () {
          game_start.toggleSound();
          Render.Options.hide();
        },
        ArrowUp: function () {
          if (Render.Options.index === 1) {
            --Render.Options.index;
            Render.Options.focus.visible = true;
            Render.Options.focus2.visible = false;
          }
        },
        ArrowDown: function () {
          if (Render.Options.index < 1) {
            ++Render.Options.index;
            Render.Options.focus.visible = false;
            Render.Options.focus2.visible = true;
          }
        },
        0: function () {
          game_start.toggleSound();
          Render.Options.hide();
        }
      }
    });

    this.focus = game.add.sprite(game.world.centerX, 190, 'focus');
    this.focus.anchor.setTo(0.5);
    this.focus.visible = true;
    this.focus2 = game.add.sprite(game.world.centerX, 228, 'focus');
    this.focus2.anchor.setTo(0.5);
    this.focus2.visible = false;

    this.soundOn = game.add.tileSprite(180, 183, 28, 15, 'on');
    this.soundOn.visible = false;
    this.soundOff = game.add.tileSprite(180, 183, 28, 15, 'off');
    this.soundOff.visible = false;

    this.vibrationOn = game.add.tileSprite(180, 223, 28, 15, 'on');
    this.vibrationOn.visible = false;
    this.vibrationOff = game.add.tileSprite(180, 223, 28, 15, 'off');
    this.vibrationOff.visible = false;

    this.index = 0;
    this.loadSound();
    this.loadVibration();

    var style = Object.assign({}, game.custom.fontStyle);
    style.fontSize = "24px";
    var sound = game.add.text(43, 180, locale.getLocale('sound'), game.custom.fontStyle);
    sound.setShadow(3, 3, 'rgba(0,0,0,0.3)', 5);
    var vibration = game.add.text(43, 220, locale.getLocale('vibration'), game.custom.fontStyle);
    vibration.setShadow(3, 3, 'rgba(0,0,0,0.3)', 5);

    var optionsTitle = game.add.text(10, 100, locale.getLocale('options').toUpperCase(), {
      font: '18px AvenirHeavy',
      fill: '#3f3f3f'
    });
    optionsTitle.anchor.setTo(0, 0.5);
    optionsTitle.fontWeight = 'bold';

    var optionsTitleDots = game.add.sprite(optionsTitle.x + optionsTitle.width + 5, 100, 'score_title');
    optionsTitleDots.anchor.setTo(0, 0.5);

    this.optionsGroup.addMultiple([background, this.focus, optionsTitle, optionsTitleDots, this.focus2, sound, vibration,
      this.vibrationOn, this.vibrationOff, this.soundOff, this.soundOn]);
  },
  hide: function () {
    this.isPaused = false;
    game.sound.mute = false;
    game.paused = false;
    game_start.canMove = true;
    this.optionsGroup.removeAll();
    game.navigator.setLastConfig();
  },
  selectOpValue: function () {
    switch (this.index) {
      case 0:
        this.saveData(soundStorage, (!this.soundOn.visible));
        this.loadSound();
        break;
      case 1:
        this.saveData(vibrationStorage, (!this.vibrationOn.visible));
        this.loadVibration();
        break;
    }
  },
  saveData: function (key, value) {
    localStorage.setItem(key, value);
  },
  loadData: function (key) {
    var value = JSON.parse(localStorage.getItem(key));
    if (null === value || undefined === value) {
      this.saveData(key, 'true');
      return 'true';
    }
    return value;
  },
  loadSound: function () {
    var sound = this.loadData(soundStorage);
    game_start.toggleSound();
    this.soundOn.visible = sound;
    this.soundOff.visible = !sound;
  },
  loadVibration: function () {
    var vibration = this.loadData(vibrationStorage);
    game_start.toggleVibration();
    this.vibrationOn.visible = vibration;
    this.vibrationOff.visible = !vibration;
  }
};

Render.GameOver = {
  isLose: false,
  show: function (currentScore) {
    this.isLose = true;

    var background = game.add.graphics();
    background.beginFill(0xfa1919, 0.9);
    background.drawRect(0, 0, 240, 320);

    game.navigator.register({
      style: game.custom.fontStyleSKWhite,
      label: {
        lsk: {
          text: locale.getLocale('home')
        },
        rsk: {
          text: locale.getLocale('restart')
        }
      },
      action: {
        softLeft: function () {
          game.bgSound.stop();
          Render.GameOver.hide();
          game.ads.nextState = 'menu';
          game.state.start('ads', true, false, 'goHome');
        },
        softRight: function () {
          game.bgSound.stop();
          Render.GameOver.hide();
          game.ads.nextState = 'game';
          game.state.start('ads', true, false, 'playAgain');
        }
      }
    });

    var scoreTitleImage = game.add.text(self.game.width / 2, 20, locale.getLocale('gameOver'),
      {
        font: '26px Heavitas',
        fill: '#fff',
        align: 'center'
      });
    scoreTitleImage.wordWrap = true;
    scoreTitleImage.lineSpacing = -8;
    scoreTitleImage.anchor.setTo(0.5, 0.5);
    scoreTitleImage.wordWrapWidth = 210;

    var newMaxScore = game.add.sprite(120, 270, 'new_max_record');
    newMaxScore.anchor.setTo(0.5);
    newMaxScore.scale.x = 0;
    newMaxScore.scale.y = 0;
    newMaxScore.alpha = 0;

    var newRecord = game.add.text(120, 274, locale.getLocale('newRecord').toUpperCase(), { font: '12px Avenir', fill: '#ff0000' });
    newRecord.anchor.setTo(0.5);
    newRecord.alpha = 0;
    newRecord.scale.x = 0;
    newRecord.scale.y = 0;
    newRecord.fontWeight = 'bold';

    game.add.tween(scoreTitleImage).to({ y: 70 }, 600).start();

    this.actualScore = currentScore;
    this.maxScore = parseInt(localStorage.getItem(maxScoreStorage));

    if (this.actualScore > this.maxScore) {
      localStorage.setItem(maxScoreStorage, currentScore);
      game.add.tween(newMaxScore).to({ alpha: 1 }).start();
      game.add.tween(newMaxScore.scale).to({ x: 1, y: 1 }).start();
      game.add.tween(newRecord).to({ alpha: 1 }).start();
      game.add.tween(newRecord.scale).to({ x: 1, y: 1 }).start();
    }
    var scoreTitle = game.add.text(120, 160, locale.getLocale('score'),
      { font: '16px AvenirHeavy', fill: '#ffffff', align: "right" });
    scoreTitle.anchor.setTo(0.5);
    var scoreLabel = game.add.text(120, scoreTitle.y + 35, '0000',
      { font: '40px AvenirHeavy', fill: '#ffffff', align: "right" });
    scoreLabel.fontWeight = 'bold';
    scoreLabel.anchor.setTo(0.5);
    var score = this.actualScore;
    var initial = 0;
    var delay = 50;
    var compareVal = parseInt(score * 0.9);
    var sumValue = 1;
    if (score > 0) {
      if (score > 100) {
        delay = 10;
        compareVal = parseInt(score * 0.95);
        sumValue = 3;
      }
      var interval = setInterval(function () {
        initial += sumValue;
        scoreLabel.setText(this.formatScore(initial, 4));
        if (initial >= compareVal) {
          delay = 130;
          clearInterval(interval);
          interval = setInterval(function () {
            scoreLabel.setText(this.formatScore(initial++, 4));
            if (initial > score) {
              clearInterval(interval);
            }
          }.bind(this), delay);
        }
      }.bind(this), delay);
    }
  },
  hide: function () {
    this.isLose = false;
    game.navigator.setLastConfig();
  },
  formatScore: function (num, size) {
    var s = num + "";
    while (s.length < size) {
      s = "0" + s;
    }
    return s;
  }
};
