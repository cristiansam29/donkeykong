function get_hi_scores() {
    return;
    var n
}
function set_hi_score(n, t) {
    return;
    var i
}
function show_scores() {}
function init() {
    var n;
    for (Gl_scrollbars("no"),
    window.focus(),
    document.all ? document.all.preDiv.style.left = -1e3 : document.layers ? document.layers.preDiv.left = -1e3 : document.getElementById && (document.getElementById("preDiv").style.left = -1e3),
    Sp_Sprite.prototype.getEnv = Sp_GetEnv,
    background = new Sp_Sprite,
    background.setImage("assets/bg.gif", 448, 512, 9, 1),
    background.setXlimits(0, 448),
    background.setYlimits(0, 600),
    background.moveTo(0, 0),
    background.setFrame(0),
    background2 = new Sp_Sprite,
    background2.setImage("assets/bg01.gif", 401, 193, 1, 1),
    background2.setXlimits(-1e3, 448),
    background2.setYlimits(0, 600),
    background2.moveTo(-1e3, 0),
    background2.setFrame(0),
    player = new Sp_Sprite,
    player.x16 = 0,
    player.y16 = 0,
    player.jumping = !1,
    player.climbing = !1,
    player.jumpTmr = 0,
    player.l = 0,
    player.onLadder = !1,
    player.setImage("assets/g1.gif", 32, 32, 11, 4),
    player.setXlimits(0, 448),
    player.setYlimits(-100, 600),
    player.setCollide(!0),
    player.setZ(998),
    player.switchOn(),
    lifeSprite = new Sp_Sprite,
    lifeSprite.setImage("assets/g4.gif", 32, 16, 1, 3),
    lifeSprite.setXlimits(0, 100),
    lifeSprite.setYlimits(0, 100),
    lifeSprite.moveTo(80, 48),
    lifeSprite.setFrame(0),
    bonusSprite = new Sp_Sprite,
    bonusSprite.setImage("assets/g6.gif", 32, 16, 5, 7),
    bonusSprite.setXlimits(-100, 500),
    bonusSprite.setYlimits(-100, 600),
    bonusSprite.moveTo(-100, -100),
    bonusSprite.setDir(0, -2),
    bonusSprite.setFrame(0),
    charPicker = new Sp_Sprite,
    charPicker.setImage("assets/g8.gif", 32, 32, 1, 3),
    charPicker.setXlimits(-100, 448),
    charPicker.setYlimits(-100, 512),
    charPicker.setAnimationSpeed(1, "forward"),
    charPicker.setFrame(0),
    princess = new Sp_Sprite,
    princess.setImage("assets/g5.gif", 80, 48, 1, 3),
    princess.setXlimits(-100, 448),
    princess.setYlimits(-1e3, 512),
    princess.setFrame(0),
    kong = new Sp_Sprite,
    kong.setImage("assets/g0.gif", 96, 75, 5, 4),
    kong.setXlimits(-100, 448),
    kong.setYlimits(-100, 512),
    kong.setAnimationSpeed(5, "forward"),
    kong.setZ(999),
    kong.tmr = 0,
    kong.state = 1,
    n = 0; n < 4; n++)
        otherKong[n] = new Sp_Sprite,
        otherKong[n].setImage("assets/g0.gif", 96, 75, 5, 4),
        otherKong[n].setXlimits(-100, 448),
        otherKong[n].setYlimits(-1e3, 480 - n * 64),
        otherKong[n].setZ(1001 + n),
        otherKong[n].setFrame(3);
    for (n = 0; n < 16; n++)
        barrel[n] = new Sp_Sprite,
        barrel[n].setImage("assets/g2.gif", 32, 20, 2, 2),
        barrel[n].setXlimits(-100, 448),
        barrel[n].setYlimits(0, 600),
        barrel[n].moveTo(-100, 0),
        barrel[n].setAnimationSpeed(3, "forward"),
        barrel[n].setFrame(0),
        barrel[n].setFrameByDirection(20, 160, 0, 200, 339, 0, 161, 199, 1, 0, 19, 1, 340, 359, 1),
        barrel[n].jumped = !1;
    for (n = 0; n < 6; n++)
        roller[n] = new Sp_Sprite,
        roller[n].setImage("assets/g9.gif", 22, 20, 2, 4),
        roller[n].setXlimits(-100, 448),
        roller[n].setYlimits(0, 600),
        roller[n].moveTo(-100, 0),
        roller[n].setFrame(n < 3 ? 0 : 1);
    for (n = 0; n < 3; n++)
        bonusItem[n] = new Sp_Sprite,
        bonusItem[n].setImage("assets/g11.gif", 32, 32, 7, 1),
        bonusItem[n].setXlimits(-100, 548),
        bonusItem[n].setYlimits(-100, 600),
        bonusItem[n].moveTo(-100, 0),
        bonusItem[n].setFrame(n),
        bonusItem[n].isBonus = !0;
    for (n = 0; n < 10; n++)
        pie[n] = new Sp_Sprite,
        pie[n].setImage("assets/g11.gif", 32, 32, 7, 1),
        pie[n].setXlimits(-34, 482),
        pie[n].setYlimits(0, 600),
        pie[n].moveTo(-100, 0),
        pie[n].setFrame(3),
        pie[n].jumped = !1;
    for (n = 0; n < 8; n++)
        flame[n] = new Sp_Sprite,
        flame[n].setImage("assets/g12.gif", 32, 32, 6, 2),
        flame[n].setXlimits(-100, 548),
        flame[n].setYlimits(0, 600),
        flame[n].setAnimationSpeed(5, "forward"),
        flame[n].moveTo(-100, 0),
        flame[n].state = 1,
        flame[n].cnt = 0,
        flame[n].climbing = !1;
    for (n = 0; n < 2; n++)
        ladderSpring[n] = new Sp_Sprite,
        ladderSpring[n].setImage("assets/g10.gif", 24, 32, 2, 2),
        ladderSpring[n].setXlimits(-100, 548),
        ladderSpring[n].setYlimits(-100, 600),
        ladderSpring[n].moveTo(-100, 0),
        ladderSpring[n].setFrame(0);
    for (n = 0; n < 90; n++)
        charSprite[n] = new Sp_Sprite,
        charSprite[n].setImage("assets/g3.gif", 16, 16, 44, 1),
        charSprite[n].setXlimits(-100, 448),
        charSprite[n].setYlimits(0, 600),
        n < 12 ? charSprite[n].moveTo(n * 16 + (n < 6 ? 16 : 82), 16) : charSprite[n].moveTo(-100, -100);
    for (n = 0; n < 8; n++)
        plug[n] = new Sp_Sprite,
        plug[n].setImage("assets/g13.gif", 16, 19, 2, 1),
        plug[n].setXlimits(-100, 448),
        plug[n].setYlimits(-100, 512),
        plug[n].setFrame(0);
    infoSprite = new Sp_Sprite,
    infoSprite.setImage("assets/g7.gif?", 192, 48, 8, 4),
    infoSprite.setXlimits(-400, 600),
    infoSprite.setYlimits(-400, 600),
    infoSprite.moveTo(-400, -400),
    infoSprite.setAnimationSpeed(1, "forward"),
    infoSprite.setFrame(0),
    charSprite[12].moveTo(370, 48),
    charSprite[13].moveTo(386, 48),
    oilDrum = new Sp_Sprite,
    oilDrum.setImage("assets/g12.gif", 32, 32, 6, 2),
    oilDrum.setXlimits(-400, 600),
    oilDrum.setYlimits(-400, 600),
    oilDrum.moveTo(-400, -400),
    oilDrum.setFrame(5),
    upKey = Kb_trapkey("&"),
    downKey = Kb_trapkey("("),
    leftKey = Kb_trapkey("%"),
    rightKey = Kb_trapkey("'"),
    jumpKey = Kb_trapkey(" "),
    redefineKey = Kb_trapkey("r"),
    showNumbers(),
    Gl_start(),
    startDemo()
}
function Sp_GetEnv() {
    this.y16 = this.y % 16,
    this.x16 = (this.x + 8) % 16,
    this.l = Math.floor((this.x - 1) / 16) + Math.floor((this.y + 32) / 16) * 28,
    this.cLeft = currentMap[this.l],
    this.cCenter = currentMap[this.l + 1],
    this.cRight = currentMap[this.l + 2],
    this.cBelow = currentMap[this.l + 29],
    this.cLadder = currentLadder[this.l + 1],
    this.onLadder = isNaN(this.cLadder) ? !1 : !0,
    this.cConveyor = currentConveyor[this.l + 1],
    this.onConveyor = isNaN(this.cConveyor) ? !1 : !0
}
function startGame() {
    score = 0,
    bonus = 0,
    level = STARTLEVEL,
    lives = STARTLIVES,
    stage = STARTSTAGE,
    gametmr = 0,
    showNumbers(),
    clearSprites(),
    gameChangeState(LEVELSTART),
    Gl_unhook("demoLoop()"),
    Gl_hook("gameLoop()")
}
function gameLoop() {
    switch (gamestate) {
    case 3:
        startLevel();
        break;
    case 0:
        playing();
        break;
    case 1:
        loseLife();
        break;
    case 2:
        finishLevel();
        break;
    case 4:
        gameOver();
        break;
    case 5:
        newHi()
    }
    bonusSprite.on && bonusSprite.animpos == 6 && stopBonus(),
    gametmr++
}
function playing() {
    if (player.getEnv(),
    player.jumping)
        player.jmpTmr < 6 ? player.moveTo(player.x, player.y + jmpDef[player.jmpTmr]) : (player.moveTo(player.x, player.y + jmpDef[player.jmpTmr]),
        player.getEnv(),
        player.cCenter > -8 && player.cCenter < player.y16 && (player.moveTo(player.x, player.y - (player.cBelow == 1 && player.cCenter == 16 ? -1 : player.y16 - player.cCenter)),
        player.jumping = !1,
        jumpKey.pressed = !1,
        player.setAnimationSpeed(1, "forward"),
        player.y > player.jy + 30 && gameChangeState(LOSELIFE))),
        ++player.jmpTmr > 11 && (player.jmpTmr = 11),
        checkKeys();
    else if (player.climbing)
        player.climbing && (player.x16 != 0 && (player.x16 > 8 ? player.x += 16 - player.x16 : player.x -= player.x16),
        checkKeys(),
        player.onLadder || (player.climbing = !1));
    else {
        if (player.moveTo(player.x, player.y - (player.y16 - player.cCenter)),
        player.cCenter == 16 && player.cBelow == 16 && player.frame < 8)
            player.fallingToDeath = !0;
        else if (player.fallingToDeath) {
            gameChangeState(LOSELIFE);
            return
        }
        player.getEnv(),
        checkKeys()
    }
    if (player.onConveyor && player.moveTo(player.x + conveyorDir[player.cConveyor], player.y),
    !jumpKey.pressed || player.jumping || player.fallingToDeath || (jumpKey.pressed = !1,
    player.jumping = !0,
    player.climbing = !1,
    player.jy = player.y,
    player.jmpTmr = 0,
    player.setAnimationSpeed(0, "forward")),
    stage == 0 && barrelLevel(),
    stage == 1 && factoryLevel(),
    stage == 2 && springLevel(),
    stage == 3 && towerLevel(),
    gametmr % 50 == 0 && (bonus -= 100,
    bonus > -1 ? showBonus() : gameChangeState(LOSELIFE)),
    player.hit)
        if (player.hit.isBonus)
            startBonus(player.hit.frame),
            player.hit.switchOff();
        else {
            if (player.hit.state == 1) {
                gameChangeState(LOSELIFE);
                return
            }
            player.climbing || player.hit.state != 2 || (startBonus(0),
            player.hit.setFrame(1),
            player.hit.setDir(0, 1),
            player.hit.switchOn(),
            player.hit.state = 3)
        }
}
function towerLevel() {
    for (var n = 0; n < plug.length; n++)
        plug[n].on && plug[n].state > 2 && ++plug[n].state == 14 && (plugsPulled++,
        pPos = Math.floor(plug[n].x / 16) + Math.floor(plug[n].y / 16) * 28,
        currentMap[pPos] = 16,
        plug[n].switchOff(),
        plugsPulled == 8 && gameChangeState(FINISHLEVEL));
    if (flametmr++ == 50)
        for (flametmr = 0,
        n = 0; n < 6; n++)
            if (!flame[n].on) {
                pPos = currentRoute[Math.floor(Math.random() * currentRoute.length)],
                flame[n].moveTo(player.x > 208 ? pPos[0] : pPos[1], pPos[2]),
                flame[n].setDir(flame[n].x < 208 ? 1 : -1, 0),
                flame[n].setSpeed(2 + level / 4),
                flame[n].climbing = !1,
                flame[n].cnt = 0,
                flame[n].switchOn();
                break
            }
    for (n = 0; n < 6; n++)
        flame[n].on && (flame[n].cnt++,
        flame[n].getEnv(),
        flame[n].climbing || (flame[n].cCenter == 16 && flame[n].cnt > 2 && (flame[n].setDir(flame[n].xydegs < 180 ? -1 : 1, 0),
        flame[n].cnt = 0),
        flame[n].onLadder && flame[n].cnt > 20 && Math.random() > .9 && (flame[n].climbing = !0,
        flame[n].setSpeed(2),
        flame[n].cLadder > 31 ? flame[n].setDir(0, 1) : flame[n].setDir(0, -1),
        flame[n].cnt = 0)),
        flame[n].climbing && flame[n].cnt == 40 && (flame[n].onLadder && flame[n].cCenter == -1 || (flame[n].setDir(Math.random() > .5 ? -1 : 1, 0),
        flame[n].climbing = !1,
        flame[n].cnt = 0)))
}
function springLevel() {
    var n, t;
    if (gametmr == 1)
        for (n = 0; n < 6; n++)
            pie[n].switchOn();
    for (n = 0; n < 2; n++)
        pie[n].y < 194 && pie[n].moveTo(pie[n].x, 478);
    for (n = 2; n < 4; n++)
        pie[n].y > 478 && pie[n].moveTo(pie[n].x, 194);
    for (n = 0; n < 4; n++)
        pPos = Math.floor(pie[n].x / 16) + Math.floor(pie[n].y / 16) * 28,
        yTop = pie[n].y % 16,
        currentMap[pPos - 28] = currentMap[pPos - 27] = currentMap[pPos + 56] = currentMap[pPos + 57] = 16,
        currentMap[pPos] = currentMap[pPos + 1] = yTop,
        currentMap[pPos + 28] = currentMap[pPos + 29] = yTop - 16;
    for (n = 0; n < 2; n++)
        flame[n].routing || (t = currentRoute[Math.floor(Math.random() * (currentRoute.length / 2)) + n * (currentRoute.length / 2)],
        flame[n].setRoute(t),
        flame[n].setSpeed(1 + (level * .3 < 1.6 ? level * .3 : 1.6)));
    player.y < 107 && gameChangeState(FINISHLEVEL)
}
function factoryLevel() {
    for (var n, i, t = 0; t < 4; t++)
        if (--conveyorSwitch[t] == 0)
            for (conveyorSwitch[t] = 50 + Math.floor(Math.random() * 120),
            conveyorDir[t] = (conveyorDir[t] > 0 ? -1 : 1) * CONVEYORSPEED,
            n = 0; n < 2; n++)
                conveyorLink[t * 2 + n] > -1 && roller[conveyorLink[t * 2 + n]].setAnimationSpeed(4, conveyorDir[t] > 0 ? "forward" : "reverse");
    if (kong.moveTo(kong.x + conveyorDir[0], kong.y),
    ladderSpring[0].y < 193 ? currentLadder[394] == 32 && (currentLadder[394] = -1,
    currentLadder[366] = -1,
    currentLadder[338] = -1) : currentLadder[394] == -1 && (currentLadder[394] = 32,
    currentLadder[366] = null,
    currentLadder[338] = -0),
    ladderSpring[0].ydir > 0 && player.hasHit(ladderSpring[0]) && player.y < 223 && !player.jumping && player.moveTo(player.x, player.y + 3),
    ladderSpring[1].y < 193 ? currentLadder[417] == 32 && (currentLadder[417] = -1,
    currentLadder[389] = -1,
    currentLadder[361] = -1) : currentLadder[417] == -1 && (currentLadder[417] = 32,
    currentLadder[389] = null,
    currentLadder[361] = -0),
    ladderSpring[1].ydir > 0 && player.hasHit(ladderSpring[1]) && player.y < 223 && player.moveTo(player.x, player.y + 3),
    pie[2].moveTo(pie[2].x + conveyorDir[1], 384),
    pie[3].moveTo(pie[3].x + conveyorDir[1], 384),
    pie[0].moveTo(pie[0].x + conveyorDir[2], 224),
    pie[1].moveTo(pie[1].x + conveyorDir[3], 224),
    pie[2].x > 446 && (pie[2].x = -32,
    pie[2].jumped = !1),
    pie[3].x < -30 && (pie[3].x = 448,
    pie[3].jumped = !1),
    pie[0].x > 200 && (pie[0].x = -32,
    pie[0].jumped = !1),
    pie[1].x < 220 && (pie[1].x = 448,
    pie[1].jumped = !1),
    player.hit && player.hit.index > pie[0].index - 1 && player.hit.index < pie[3].index + 1 && player.y < player.hit.y - 2 && (player.hit.jumped || (startBonus(0),
    player.hit.jumped = !0),
    player.hit = !1),
    ++flametmr == 150 - (level < 10 ? level * 10 : 100))
        for (flametmr = 0,
        n = 0; n < 3; n++)
            if (!flame[n].on) {
                i = currentRoute[Math.floor(Math.random() * currentRoute.length)],
                flame[n].moveTo(208, 256),
                flame[n].setRoute(i),
                flame[n].setSpeed(FLAMESPEED),
                flame[n].switchOn();
                break
            }
    for (n = 0; n < 3; n++)
        !flame[n].routing && flame[n].on && flame[n].switchOff();
    player.y < 107 && gameChangeState(FINISHLEVEL)
}
function barrelLevel() {
    var r, t, i;
    if (kong.tmr < 1 && kong.frame == 1 && kong.animspd == 0 && (kong.setFrame(0),
    kong.setAnimationSpeed(5, "forward")),
    barrelsonscreen < level * 2 + 7 && --kong.tmr < 0 && kong.frame == 0 && Math.random() > .92 && (kong.setAnimationSpeed(4, "forward"),
    kong.setFrame(1)),
    kong.frame == 1 && kong.animpos == 3 && kong.animspd > 0)
        for (kong.setAnimationSpeed(0, "forward"),
        kong.tmr = Math.round(Math.random() * (30 - (level < 10 ? level * 2 : 20))) + 6,
        n = 0; n < barrel.length; n++)
            if (!barrel[n].on || !barrel[n].routing) {
                barrelsonscreen++,
                r = currentRoute[Math.floor(Math.random() * 5)],
                barrel[n].moveTo(115, 143),
                barrel[n].setRoute(r),
                barrel[n].setSpeed(BARRELSPEED),
                barrel[n].switchOn();
                break
            }
    for (player.hit && (player.hit.frame == 1 && player.hit.index < 28 && player.hit.index > 11 ? gameChangeState(LOSELIFE) : player.hit.index < 28 && player.hit.index > 11 ? (t = Math.abs(player.x + player.width / 2 - (player.hit.x + player.hit.width / 2)),
    i = Math.abs(player.y + player.height / 2 - (player.hit.y + player.hit.height / 2)),
    Math.sqrt(t * t + i * i) < 20 ? gameChangeState(LOSELIFE) : !player.hit.jumped && player.y < player.hit.y - 20 && (player.hit.jumped = !0,
    startBonus(0))) : player.y == 81 & player.x < 208 && (player.setDir(0, 0),
    player.setFrame(0),
    gameChangeState(FINISHLEVEL))),
    n = 0; n < barrel.length; n++)
        !barrel[n].routing && barrel[n].on && (barrel[n].switchOff(),
        barrel[n].jumped = !1,
        barrelsonscreen--);
    ++flametmr > 150 && !flame[7].on && (flame[7].moveTo(32, 432),
    flame[7].setFrame(4),
    flame[7].switchOn()),
    flametmr > 160 && !flame[0].routing && (flametmr = 0,
    flame[0].setSpeed(2),
    flame[0].moveTo(32, 464),
    flame[0].setFrameByDirection(0, 180, 0, 181, 359, 1),
    flame[0].setRoute(currentRoute[Math.floor(Math.random() * (currentRoute.length - 5)) + 5]),
    flame[0].switchOn())
}
function checkKeys() {
    player.rmoving = !1,
    leftKey.pressed && !player.climbing && player.cLeft > player.y16 - 4 && (player.climbing = !1,
    player.onLadder = !1,
    player.rmoving = !0,
    player.jumping || player.animspd != 0 || player.setAnimationSpeed(1, "forward"),
    player.frame != 1 && (player.setFrame(1),
    player.setSpeed(PLAYERSPEED),
    player.setDir(-1, 0))),
    rightKey.pressed && !player.climbing && player.cRight > player.y16 - 4 && (player.climbing = !1,
    player.onLadder = !1,
    player.rmoving = !0,
    player.jumping || player.animspd != 0 || player.setAnimationSpeed(1, "forward"),
    player.frame != 3 && (player.setFrame(3),
    player.setSpeed(PLAYERSPEED),
    player.setDir(1, 0))),
    player.onLadder && (upKey.pressed && (player.cLadder < 32 || player.cLadder - 32 <= player.y16) ? (player.jumping = !1,
    player.frame != 8 && (player.setFrame(8),
    player.setSpeed(0),
    player.setAnimationSpeed(0, "forward")),
    player.moveTo(player.x, player.y - 3),
    player.setAnimation(player.animpos == 0 ? 1 : 0),
    player.climbing = !0,
    player.getEnv(),
    player.cLadder != -1 && (!player.onLadder || player.y16 <= player.cLadder - 32) && (isNaN(player.cLadder) || player.moveTo(player.x, player.y - (player.y16 - (player.cLadder - 32))),
    player.climbing = !1,
    player.setFrame(10))) : downKey.pressed && (player.cLadder == -1 || player.cLadder > 31 || player.cLadder >= player.y16) && (player.jumping = !1,
    player.frame != 8 && (player.setFrame(8),
    player.setSpeed(0),
    player.setAnimationSpeed(0, "forward")),
    player.moveTo(player.x, player.y + 3),
    player.setAnimation(player.animpos == 0 ? 1 : 0),
    player.climbing = !0,
    player.getEnv(),
    player.cLadder != -1 && player.y16 >= player.cLadder && (player.moveTo(player.x, player.y - (player.y16 - player.cLadder)),
    player.climbing = !1,
    player.setFrame(10)))),
    player.speed > 0 && !player.rmoving && (player.setFrame(player.frame == 1 ? 0 : 2),
    player.setSpeed(0))
}
function startLevel() {
    var n;
    if (gametmr == 1)
        for (stage > 3 && (stage = 0),
        showLives(),
        showLevel(),
        clearSprites(),
        background.setFrame(2),
        n = 0; n < stage + 1; n++)
            otherKong[n].moveTo(168, -85 * n),
            otherKong[n].setSpeed(16),
            otherKong[n].setDir(0, 1),
            otherKong[n].switchOn();
    else if (gametmr == 60) {
        for (plugsPulled = 0,
        bonus = 5e3,
        flametmr = 0,
        n = 0; n < 4; n++)
            otherKong[n].switchOff();
        for (background.setFrame(stage + 4),
        stage == 0 && setUpStage0(),
        stage == 1 && setUpStage1(),
        stage == 2 && setUpStage2(),
        stage == 3 && setUpStage3(),
        currentMap = [],
        currentLadder = [],
        currentRoute = [],
        currentConveyor = [],
        n = 0; n < map[stage].length; n++)
            currentMap[n] = map[stage][n];
        for (n = 0; n < ladder[stage].length; n += 2)
            currentLadder[ladder[stage][n]] = ladder[stage][n + 1];
        for (n = 0; n < route[stage].length; n++)
            currentRoute[n] = route[stage][n];
        for (n = 0; n < conveyor[stage].length; n += 2)
            currentConveyor[conveyor[stage][n]] = conveyor[stage][n + 1];
        for (n = 0; n < 3; n++)
            bonusStartPoint[stage * 6 + n * 2] != -1 && (bonusItem[n].moveTo(bonusStartPoint[stage * 6 + n * 2], bonusStartPoint[stage * 6 + n * 2 + 1]),
            bonusItem[n].switchOn());
        for (oilDrum.moveTo(oilDrumStartPoint[stage * 2], oilDrumStartPoint[stage * 2 + 1]),
        player.moveTo(playerStartPoint[stage * 2], playerStartPoint[stage * 2 + 1]),
        player.setFrame(2),
        player.setSpeed(0),
        player.switchOn(),
        player.onLadder = !1,
        player.climbing = !1,
        player.jumping = !1,
        player.jy = 600,
        player.fallingToDeath = !1,
        kong.moveTo(kongStartPoint[stage * 2], kongStartPoint[stage * 2 + 1]),
        kong.setFrame(0),
        kong.setAnimationSpeed(14, "forward"),
        kong.switchOn(),
        princess.moveTo(princessStartPoint[stage * 2], princessStartPoint[stage * 2 + 1]),
        princess.setAnimationSpeed(60, "forward"),
        princess.switchOn(),
        n = 0; n < barrel.length; n++)
            barrel[n].switchOff(),
            barrel[n].jumped = !1;
        showBonus(),
        showInfo(0),
        clearKeys()
    } else
        gametmr == 80 && (hideInfo(),
        gameChangeState(PLAYING))
}
function setUpStage0() {
    for (var n = 0; n < 4; n++)
        charSprite[n + 14].moveTo(16 * n + 351, 98);
    barrelsonscreen = 0
}
function setUpStage1() {
    for (var n = 0; n < 4; n++)
        charSprite[n + 14].moveTo(16 * n + 351, 98);
    for (n = 0; n < 4; n++)
        conveyorSwitch[n] = 1;
    for (roller[0].moveTo(4, 174),
    roller[3].moveTo(422, 174),
    roller[1].moveTo(4, 414),
    roller[4].moveTo(422, 414),
    roller[2].moveTo(238, 254),
    roller[5].moveTo(190, 254),
    n = 0; n < roller.length; n++)
        roller[n].switchOn();
    for (kong.setXlimits(0, 448),
    n = 0; n < 2; n++)
        ladderSpring[n].clearRoute(),
        ladderSpring[n].setFrame(0),
        ladderSpring[n].moveTo(n == 0 ? 28 : 396, 225),
        ladderSpring[n].setRouteByCommand(n == 0 ? "s0;f100;s1;d0;f32;s0;f150;s1;d180;f32;" : "s0;f120;s1;d0;f32;s0;f100;s1;d180;f32;", !0),
        ladderSpring[n].switchOn();
    for (flame[7].moveTo(208, 224),
    flame[7].setAnimationSpeed(3, "forward"),
    flame[7].setFrame(4),
    flame[7].switchOn(),
    n = 0; n < 4; n++)
        pie[n].state = 1,
        pie[n].moveTo(n % 1 == 0 ? -32 : 448, n < 2 ? 224 : 384),
        pie[n].jumped = !1,
        pie[n].switchOn();
    for (n = 0; n < 3; n++)
        flame[n].setFrameByDirection(0, 180, 0, 181, 359, 1)
}
function setUpStage2() {
    for (var t, n = 0; n < 4; n++)
        charSprite[n + 14].moveTo(16 * n + 351, 98);
    for (n = 0; n < 4; n++)
        pie[n].setFrame(6),
        pie[n].moveTo(n < 2 ? 64 : 192, 194 + (n < 2 ? n : n - 2) * 144),
        pie[n].setSpeed(2),
        pie[n].state = 0,
        pie[n].setDir(0, n < 2 ? -2 : 2);
    for (t = 0,
    n = 6; n < 10; n++)
        pie[n].setFrame(n < 8 ? 4 : 5),
        pie[n].state = 1,
        pie[n].moveTo(64 + t * 128, n < 8 ? 176 : 478),
        t = t == 1 ? 0 : 1;
    for (n = 0; n < 2; n++)
        flame[n].setFrameByDirection(0, 180, 0, 181, 359, 1),
        n == 0 ? flame[n].moveTo(120, 240) : flame[n].moveTo(408, 176),
        flame[n].switchOn();
    ladderSpring[0].setFrame(1),
    ladderSpring[0].setAnimationSpeed(6, "forward"),
    ladderSpring[0].state = 1,
    ladderSpring[0].setRouteByCommand("s0;d0;m0,150;s18;d35;f6;d155;f6;d25;f5;d155;f5;d25;f5;d155;f5;d25;f4;d180;f25", !0),
    ladderSpring[0].switchOn()
}
function setUpStage3() {
    for (var t, n = 0; n < 4; n++)
        charSprite[n + 14].moveTo(16 * n + 351, 98);
    for (n = 0; n < 4; n++)
        plug[n * 2].moveTo(112, 174 + n * 80),
        plug[n * 2 + 1].moveTo(320, 174 + n * 80),
        plug[n * 2].switchOn(),
        plug[n * 2 + 1].switchOn();
    for (n = 0; n < 6; n++)
        flame[n].setFrameByDirection(0, 180, 2, 181, 359, 3),
        flame[n].setAnimationSpeed(4, "forward")
}
function loseLife() {
    if (gametmr == 1) {
        var n;
        if (kong.setFrame(0),
        kong.setAnimationSpeed(4, "forward"),
        kong.setRouteByCommand("s4;d0;f1;s3;f2;s2;f3;s1;f8;d180;f4;s2;f3;s3;f2;s4;f1;", !0),
        player.setFrame(9),
        player.setAnimation(0),
        player.setAnimationSpeed(8, "forward"),
        player.setSpeed(0),
        stage == 2)
            for (n = 0; n < 6; n++)
                pie[n].setDir(0, 0)
    } else
        gametmr == 46 ? (player.setAnimationSpeed(0, "forward"),
        player.setDir(0, 1),
        player.setSpeed(6)) : player.y > 540 && gametmr < 300 ? gametmr = 300 : gametmr == 301 && (kong.clearRoute(),
        kong.setDir(0, 0),
        kong.moveTo(kongStartPoint[stage * 2], kongStartPoint[stage * 2 + 1]),
        lives--,
        lives > -1 ? gameChangeState(LEVELSTART) : gameChangeState(GAMEOVER))
}
function finishLevel() {
    switch (stage) {
    case 0:
        endStage0();
        break;
    case 1:
        endStage1();
        break;
    case 2:
        endStage2();
        break;
    case 3:
        endStage3()
    }
}
function endStage0() {
    gametmr == 1 ? (score += bonus,
    bonus = 0,
    showScore(),
    showBonus(),
    kong.setFrame(0),
    kong.setAnimationSpeed(8, "forward"),
    kong.setDir(1, 0),
    kong.setSpeed(3),
    kong.switchOn()) : gametmr == 25 ? (kong.setFrame(2),
    kong.setSpeed(2),
    kong.setDir(0, -1)) : gametmr == 34 ? (princess.moveTo(144, 64),
    princess.setDir(0, -1),
    princess.setSpeed(2)) : gametmr == 140 && (clearSprites(),
    level++,
    stage++,
    gameChangeState(LEVELSTART))
}
function endStage1() {
    if (gametmr == 1) {
        for (score += bonus,
        bonus = 0,
        showScore(),
        showBonus(),
        n = 0; n < roller.length; n++)
            roller[n].setAnimationSpeed(0, "forward");
        kong.setSpeed(3),
        kong.setRoute(!1, 104, 107)
    } else
        !kong.routing && kong.y > 106 ? (kong.setFrame(2),
        kong.setSpeed(2),
        kong.setRoute(!1, 104, -98)) : kong.y < 80 && princess.ydir == 0 ? (princess.moveTo(144, 64),
        princess.setDir(0, -1),
        princess.setSpeed(2)) : kong.routing || (princess.setSpeed(0),
        princess.setDir(0, 0),
        clearSprites(),
        level++,
        stage++,
        gameChangeState(LEVELSTART))
}
function endStage2() {
    var n;
    if (gametmr == 1) {
        for (n = 0; n < 6; n++)
            pie[n].setDir(0, 0);
        score += bonus,
        bonus = 0,
        showScore(),
        showBonus(),
        kong.setFrame(0),
        kong.setAnimationSpeed(8, "forward"),
        kong.setDir(1, 0),
        kong.setSpeed(3),
        kong.switchOn()
    } else
        gametmr == 25 ? (kong.setFrame(2),
        kong.setSpeed(2),
        kong.setDir(0, -1)) : gametmr == 34 ? (princess.moveTo(144, 64),
        princess.setDir(0, -1),
        princess.setSpeed(2)) : gametmr == 140 && (clearSprites(),
        level++,
        stage++,
        gameChangeState(LEVELSTART))
}
function endStage3() {
    var n;
    if (gametmr == 1) {
        for (n = 0; n < flame.length; n++)
            flame[n].moveTo(-100, -100),
            flame[n].switchOff();
        for (n = 0; n < bonusItem.length; n++)
            bonusItem[n].switchOff();
        score += bonus,
        bonus = 0,
        stopBonus(),
        showScore(),
        showBonus(),
        kong.setFrame(0),
        kong.setAnimationSpeed(8, "forward"),
        background.setFrame(8),
        princess.moveTo(144, 48),
        princess.setAnimationSpeed(0, "forward"),
        princess.setFrame(0),
        princess.setRouteByCommand("s4;d0;f1;s3;f2;s2;f3;s1;f8;d180;f4;s2;f3;s3;f2;s4;f1;", !0),
        player.setDir(0, 0),
        player.setFrame(0),
        player.moveTo(272, 64),
        player.setRouteByCommand("s4;d0;f1;s3;f2;s2;f3;s1;f6;d180;f2;s2;f3;s3;f2;s4;f1;", !0)
    } else
        gametmr == 40 ? (kong.setAnimationSpeed(0, "forward"),
        kong.setFrame(3),
        kong.setAnimation(1),
        kong.setSpeed(3),
        kong.setDir(0, 1)) : gametmr == 125 ? (kong.setDir(0, 0),
        kong.setFrame(4),
        kong.setAnimationLoop(0, 3),
        kong.setAnimationSpeed(4, "forward")) : gametmr == 200 && (clearSprites(),
        level++,
        stage = 0,
        gameChangeState(LEVELSTART))
}
function gameOver() {
    gametmr == 1 ? showInfo(1) : gametmr == 40 && (score > hi_scores[4] ? gameChangeState(NEWHI) : startDemo())
}
function newHi() {
    var n;
    if (gametmr == 1)
        showInfo(2);
    else if (gametmr == 40) {
        for (n = 4,
        clearSprites(); score > hi_scores[n] && n > -1; )
            hi_scores[n + 1] = hi_scores[n],
            hi_names[n + 1] = hi_names[n],
            n--;
        for (newHiSlot = n + 1,
        newHiTmr = 60,
        newHiTicker = 0,
        charSprite[78].moveTo(289, 288),
        charSprite[79].moveTo(305, 288),
        n = 0; n < 3; n++)
            charSprite[80 + n].moveTo(81 + n * 16, 320 + newHiSlot * 32);
        for (n = 0; n < 6; n++)
            charSprite[84 + n].setFrame(43),
            charSprite[84 + n].moveTo(211 + n * 16, 127);
        displayChars("   ", 80),
        displayNumeric(newHiTmr, 78, 2),
        hi_scores[newHiSlot] = score,
        hi_names[newHiSlot] = "      ",
        showHi(),
        newHiPos = 0,
        hideInfo(),
        showHiScores(),
        background.setFrame(3),
        charPicker.moveTo(72, 168),
        charPicker.switchOn(),
        clearKeys()
    } else if (gametmr > 25) {
        if (newHiTicker++ == 30) {
            if (newHiTicker = 0,
            --newHiTmr < 0) {
                registerName(),
                startDemo();
                return
            }
            displayNumeric(newHiTmr, 78, 2)
        }
        if ((newHiTicker == 15 || newHiTicker == 0) && (charSprite[80].frame == 43 ? displayChars("%%%", 80) : displayChars("   ", 80)),
        leftKey.pressed && (leftKey.pressed = !1,
        charPicker.x > 72 && charPicker.moveTo(charPicker.x - 32, charPicker.y)),
        rightKey.pressed && (rightKey.pressed = !1,
        charPicker.x < 360 && charPicker.moveTo(charPicker.x + 32, charPicker.y)),
        upKey.pressed && (upKey.pressed = !1,
        charPicker.y > 168 && charPicker.moveTo(charPicker.x, charPicker.y - 32)),
        downKey.pressed && (downKey.pressed = !1,
        charPicker.y < 232 && charPicker.moveTo(charPicker.x, charPicker.y + 32)),
        jumpKey.pressed) {
            if (jumpKey.pressed = !1,
            newHiChar = hiConv.charAt((charPicker.x - 72) / 32 + (charPicker.y - 168) / 32 * 10),
            newHiChar == "^") {
                registerName(),
                startDemo();
                return
            }
            newHiChar == "<" && newHiPos > 0 ? (newHiPos--,
            displayChars(" ", 84 + newHiPos)) : newHiChar != "<" && newHiPos < 6 && (displayChars(newHiChar, 84 + newHiPos),
            newHiPos++)
        }
    }
}
function registerName() {
    for (var n = 0, t = ""; n < 6; n++)
        t += charConv.charAt(charSprite[n + 84].frame);
    hi_names[newHiSlot] = t,
    set_hi_score(score, t)
}
function startBonus(n) {
    score += bonusConv[n],
    showScore(),
    bonusSprite.setFrame(n || 0),
    bonusSprite.moveTo(player.x, player.y - 18),
    bonusSprite.setAnimationSpeed(3, "forward"),
    bonusSprite.setSpeed(1),
    bonusSprite.switchOn()
}
function stopBonus() {
    bonusSprite.setSpeed(0),
    bonusSprite.switchOff()
}
function gameChangeState(n) {
    gamestate = n,
    gametmr = 0
}
function showInfo(n) {
    infoSprite.setFrame(n),
    infoSprite.moveTo(128, 296),
    infoSprite.switchOn()
}
function hideInfo() {
    infoSprite.moveTo(-400, -400),
    infoSprite.switchOff()
}
function showHi() {
    displayNumeric(hi_scores[0], 6, 6)
}
function showScore() {
    displayNumeric(score, 0, 6)
}
function showLevel() {
    displayNumeric(level + 1, 12, 2)
}
function showLives() {
    lifeSprite.setAnimation(lives)
}
function showBonus() {
    displayNumeric(bonus, 14, 4)
}
function showNumbers() {
    showHi(),
    showScore(),
    showLevel(),
    showBonus()
}
function showHiScores() {
    for (var t, i = 18, r = 24, n = 0; n < 5; n++) {
        for (displayNumeric(hi_scores[n], i, 6),
        displayChars(hi_names[n], r),
        t = 0; t < 6; t++)
            charSprite[i++].moveTo(161 + t * 16, n * 32 + 320),
            charSprite[r++].moveTo(273 + t * 16, n * 32 + 320);
        i += 6,
        r += 6
    }
}
function displayNumeric(n, t, i) {
    for (var u, r = i; r > 0; r--)
        u = n % 10,
        charSprite[t + r - 1].setFrame(u),
        n = Math.floor(n / 10)
}
function displayChars(n, t) {
    for (var r = n.toUpperCase(), i = 0; i < n.length; i++)
        charSprite[t + i].setFrame(charConv.indexOf(r.charAt(i)))
}
function clearKeys() {
    upKey.pressed = downKey.pressed = leftKey.pressed = rightKey.pressed = jumpKey.pressed = !1,
    redefineKey.pressed = !1
}
function clearSprites() {
    var n;
    for (background2.moveTo(-1e3, 127),
    infoSprite.moveTo(-1e3, 0),
    bonusSprite.switchOff(),
    charPicker.switchOff(),
    kong.setXlimits(-1e3, 1e3),
    kong.setSpeed(0),
    kong.setDir(0, 0),
    kong.setAnimationLoop(0, 10),
    kong.switchOff(),
    princess.setSpeed(0),
    princess.setDir(0, 0),
    princess.clearRoute(),
    princess.switchOff(),
    player.moveTo(-1e3, -100),
    player.setDir(0, 0),
    player.setSpeed(0),
    player.clearRoute(),
    player.switchOff(),
    oilDrum.moveTo(-100, -100),
    n = 0; n < barrel.length; n++)
        barrel[n].setSpeed(0),
        barrel[n].setDir(0, 0),
        barrel[n].switchOff(),
        barrel[n].jumped = !1;
    for (n = 0; n < roller.length; n++)
        roller[n].switchOff();
    for (n = 0; n < bonusItem.length; n++)
        bonusItem[n].switchOff();
    for (n = 0; n < ladderSpring.length; n++)
        ladderSpring[0].state = 0,
        ladderSpring[0].clearFrameByDirection(),
        ladderSpring[0].clearRoute(),
        ladderSpring[n].switchOff();
    for (n = 0; n < pie.length; n++)
        pie[n].moveTo(-100, -100),
        pie[n].setDir(0, 0),
        pie[n].setSpeed(0),
        pie[n].setFrame(3),
        pie[n].switchOff();
    for (n = 0; n < flame.length; n++)
        flame[n].cnt = 0,
        flame[n].climbing = !1,
        flame[n].clearFrameByDirection(),
        flame[n].routing = !1,
        flame[n].clearRoute(),
        flame[n].switchOff();
    for (n = 18; n < charSprite.length; n++)
        charSprite[n].moveTo(-100, -100);
    for (n = 0; n < plug.length; n++)
        plug[n].moveTo(-100, -100),
        plug[n].setFrame(0),
        plug[n].state = 2,
        plug[n].clearRoute(),
        plug[n].setDir(0, 0),
        plug[n].setSpeed(1),
        plug[n].switchOff()
}
function startDemo() {
    gametmr = 0,
    clearSprites(),
    Gl_unhook("gameLoop()"),
    Gl_hook("demoLoop()"),
    clearKeys()
}
function demoLoop() {
    gametmr++ == 1 ? (clearSprites(),
    background.setFrame(0),
    kong.moveTo(168, 344),
    kong.setFrame(0),
    kong.setAnimationSpeed(8, "forward"),
    kong.switchOn()) : gametmr > 40 && gametmr < 150 ? gametmr % 1 == 0 && (background2.x < 15 ? background2.moveTo(15, 127) : background2.moveTo(-1e3, 127)) : gametmr == 150 ? (kong.switchOff(),
    background2.moveTo(-1e3, 127),
    background.setFrame(1),
    showHiScores()) : gametmr == 300 && (gametmr = 0),
    redefineKey.pressed && redefineKeys(),
    jumpKey.pressed && startGame()
}
function redefineKeys() {
    var n;
    Gl_unhook("demoLoop()");
    for (n in Kb_keys)
        n != 109 && (Kb_keys[n] = null);
    clearKeys(),
    Kb_lastcode = -1,
    gametmr = 0,
    Gl_hook("redefineLoop()")
}
function redefineLoop() {
    Kb_lastcode == 109 && (Kb_lastcode = -1),
    gametmr == 0 && (showInfo(3),
    gametmr++),
    gametmr == 2 && (showInfo(4),
    gametmr++),
    gametmr == 4 && (showInfo(5),
    gametmr++),
    gametmr == 6 && (showInfo(6),
    gametmr++),
    gametmr == 8 && (showInfo(7),
    gametmr++),
    gametmr == 10 && (Gl_unhook("redefineLoop()"),
    startDemo()),
    gametmr == 1 && Kb_lastcode > 0 && (leftKey = Kb_trapkey(String.fromCharCode(Kb_lastcode)),
    Kb_lastcode = -1,
    gametmr++),
    gametmr == 3 && Kb_lastcode > 0 && (rightKey = Kb_trapkey(String.fromCharCode(Kb_lastcode)),
    Kb_lastcode = -1,
    gametmr++),
    gametmr == 5 && Kb_lastcode > 0 && (upKey = Kb_trapkey(String.fromCharCode(Kb_lastcode)),
    Kb_lastcode = -1,
    gametmr++),
    gametmr == 7 && Kb_lastcode > 0 && (downKey = Kb_trapkey(String.fromCharCode(Kb_lastcode)),
    Kb_lastcode = -1,
    gametmr++),
    gametmr == 9 && Kb_lastcode > 0 && (jumpKey = Kb_trapkey(String.fromCharCode(Kb_lastcode)),
    Kb_lastcode = -1,
    gametmr++)
}
function leftClick(n) {
    return window.focus(),
    n || (n = event),
    typeof n.which == "undefined" ? n.button == 1 : n.which == 1 || n.button == 0
}
function nrc(n) {
    if (leftClick(n) == !1)
        return ce(n)
}
function cp(n) {
    n || (n = event),
    n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "undefined" && (n.cancelBubble = !0)
}
function ce(n) {
    return n || (n = event),
    typeof n.preventDefault != "undefined" ? n.preventDefault() : typeof n.cancelBubble != "undefined" && (n.returnValue = 0,
    n.cancelBubble = !0),
    !1
}
var firstGo = !0, hi_scores = [500, 450, 400, 350, 300, 250, 200, 150, 100, 50], hi_names = ["      ", "      ", "      ", "      ", "      ", "      ", "      ", "      ", "      ", "      "], hi_score_file_reference = "kong1", this_frame_name = "kong", hidden_frame_name = "hiwin", hidden_frame_color = "111122", PLAYING = 0, LOSELIFE = 1, FINISHLEVEL = 2, LEVELSTART = 3, GAMEOVER = 4, NEWHI = 5, PLAYERSPEED = 5, BARRELSPEED = 10, FLAMESPEED = 2, CONVEYORSPEED = 3, STARTSTAGE = 0, STARTLIVES = 2, STARTLEVEL = 0, upKey, downKey, leftKey, rightKey, jumpKey, redefineKey, score = 0, bonus = 0, hi = 5e3, lives = 0, level = 0, stage = 0, newHiSlot, newHiTmr, newHiTicker, newHiPos, flametmr, barrelsonscreen, pPos, yTop, plugsPulled, newHiChar, currentMap = [], currentLadder = [], currentRoute = [], currentConveyor = [], conveyorDir = [], conveyorSwitch = [], conveyorLink = [0, 3, 1, 4, 5, -1, 2, -1], background, background2, player, kong, princess, lifeSprite, bonusSprite, infoSprite, charPicker, oilDrum, charSprite = [], charConv = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ.():'!- %", hiConv = "abcdefghijklmnopqrstuvwxyz.-<^", bonusConv = [100, 200, 500, 800, 1e3], layer = [], barrel = [], flame = [], roller = [], pie = [], plug = [], ladderSpring = [], bonusItem = [], otherKong = [], gamestate, gametmr, playerStartPoint = [72, 464, 72, 464, 16, 430, 96, 464], kongStartPoint = [32, 98, 32, 107, 32, 107, 176, 107], princessStartPoint = [176, 64, 176, 64, 176, 64, 208, 48], bonusStartPoint = [-1, -1, -1, -1, -1, -1, 224, 464, 120, 304, 392, 304, 408, 176, 136, 384, 8, 240, 248, 464, 392, 384, 56, 144], oilDrumStartPoint = [32, 464, 208, 256, -100, 0, -100, 0], jmpDef = [-9, -8, -3, -2, -1, 0, 0, 1, 2, 3, 8, 9], map = [], ladder = [], route = [], conveyor = [];
map[0] = [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 4, 4, 4, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 0, 0, -80, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 0, 0, -80, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 0, 0, -80, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 16, 16, 0, 0, 0, -8, -8, -8, -8, -8, -8, -8, -8, -8, -8, -8, -8, -8, -8, -8, -6, -6, -4, -4, -2, -2, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 84, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 14, 14, 12, 12, 10, 10, 16, 16, 16, 16, 16, 16, 14, 14, 12, 12, 10, 10, 8, 8, 06, 06, 04, 04, 02, 02, 1, 1, -2, -2, -4, -4, -6, -6, 16, 16, 02, 02, 1, 1, -2, -2, -4, -4, -6, -6, -8, -8, -10, -10, -12, -12, -14, -14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 12, 12, 14, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -4, -4, -2, -2, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -14, -14, -12, -12, -10, -10, -8, -8, -6, -6, -4, -4, -2, -2, 1, 1, 2, 2, 4, 4, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -14, -14, -12, -12, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 14, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 14, 14, 12, 12, 10, 10, 8, 8, 6, 6, 4, 4, 2, 2, 1, 1, -2, -2, 16, 16, 6, 6, 4, 4, 2, 2, 1, 1, -2, -2, -4, -4, -6, -6, -8, -8, -10, -10, -12, -12, -14, -14, 16, 16, 16, 16, 16, 16, -10, -10, -12, -12, -14, -14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 01, 1, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -14, -14, -12, -12, -10, -10, -8, -8, -6, -6, -4, -4, -2, -2, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -14, -14, -12, -12, -10, -10, -8, -8, 16, 16, 16, 16, -80, -80, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -80, -80, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 14, 14, 12, 12, 10, 10, 8, 8, 6, 6, 4, 4, 2, 02, 01, 1, -80, -80, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -2, -2, -4, -4, -6, -6, -8, -8, -10, -10, -12, -12, -14, -14],
map[1] = [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -80, -80, -80, -80, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -80, -80, -80, -80, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -80, -80, -80, -80, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, -80, -80, -80, -80, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 16, 16, 1, 1, 1, 1, -80, -80, -80, -80, 1, 1, 1, 16, 16, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
map[2] = [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 16, 16, 16, 16, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
map[3] = [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16],
ladder[0] = [878, 0, 850, 32, 863, 06, 835, -1, 807, -1, 779, 38, 732, 4, 704, -1, 676, -1, 648, 36, 738, 40, 766, -1, 794, 10, 740, 10, 712, -1, 684, -1, 656, -1, 628, 44, 652, 1, 624, 32, 630, 10, 602, -1, 574, -1, 546, -1, 518, 42, 639, 1, 611, -1, 583, -1, 555, 33, 508, 1, 480, -1, 452, -1, 424, 33, 512, 34, 540, -1, 568, 8, 513, 4, 485, -1, 457, -1, 429, -1, 401, 46, 553, 1, 525, 32, 403, 10, 375, 32, 387, 14, 359, -1, 331, -1, 303, 46, 288, 6, 260, -1, 232, -1, 204, -1, 176, -1, 148, -1, 120, 32, 290, 6, 262, -1, 234, -1, 206, -1, 178, -1, 150, -1, 122, 32, 296, 6, 268, -1, 240, -1, 212, 32, 291, 38, 319, 14],
ladder[1] = [871, 0, 843, -1, 815, -1, 787, -1, 759, -1, 731, 32, 878, 0, 850, -1, 822, -1, 794, -1, 766, -1, 738, 32, 885, 0, 857, -1, 829, -1, 801, -1, 773, -1, 745, 32, 892, 0, 864, -1, 836, -1, 808, -1, 780, -1, 752, 32, 736, 0, 708, -1, 680, -1, 652, -1, 624, -1, 596, 32, 746, 0, 718, -1, 690, -1, 662, -1, 634, -1, 606, 32, 591, 0, 563, -1, 535, -1, 507, -1, 479, -1, 451, 32, 598, 0, 570, -1, 542, -1, 514, -1, 486, -1, 458, 32, 605, 0, 577, -1, 549, -1, 521, -1, 493, -1, 465, 32, 612, 0, 584, -1, 556, -1, 528, -1, 500, -1, 472, 32, 450, 0, 422, -1, 394, 32, 310, 32, 473, 0, 445, -1, 417, 32, 333, 32, 316, 0, 288, -1, 260, -1, 232, -1, 204, -1, 176, -1, 148, -1, 120, 32, 318, 0, 290, -1, 262, -1, 234, -1, 206, -1, 178, -1, 150, -1, 122, 32, 324, 0, 296, -1, 268, -1, 240, -1, 212, 32],
ladder[2] = [754, 0, 726, -1, 698, -1, 670, 32, 639, 0, 611, -1, 583, -1, 555, -1, 527, 32, 577, 0, 549, -1, 521, -1, 493, -1, 465, 32, 530, 0, 502, -1, 474, -1, 446, -1, 418, -1, 390, 32, 440, 0, 412, -1, 384, -1, 356, -1, 328, 32, 813, 0, 785, -1, 757, -1, 729, -1, 701, -1, 673, 32, 674, 0, 646, -1, 618, -1, 590, -1, 562, -1, 534, -1, 506, -1, 478, 32, 736, 0, 708, -1, 680, -1, 652, -1, 624, -1, 596, -1, 568, -1, 540, -1, 512, -1, 484, 32, 738, 0, 710, -1, 682, -1, 654, -1, 626, -1, 598, -1, 570, -1, 542, -1, 514, -1, 486, 32, 316, 0, 288, -1, 260, -1, 232, -1, 204, -1, 176, -1, 148, -1, 120, 32, 318, 0, 290, -1, 262, -1, 234, -1, 206, -1, 178, -1, 150, -1, 122, 32, 324, 0, 296, -1, 268, -1, 240, -1, 212, 32],
ladder[3] = [869, 0, 841, -1, 813, -1, 785, -1, 757, -1, 729, 32, 881, 0, 853, -1, 825, -1, 797, -1, 769, -1, 741, 32, 894, 0, 866, -1, 838, -1, 810, -1, 782, -1, 754, 32, 730, 0, 702, -1, 674, -1, 646, -1, 618, -1, 590, 32, 737, 0, 709, -1, 681, -1, 653, -1, 625, -1, 597, 32, 746, 0, 718, -1, 690, -1, 662, -1, 634, -1, 606, 32, 753, 0, 725, -1, 697, -1, 669, -1, 641, -1, 613, 32, 591, 0, 563, -1, 535, -1, 507, -1, 479, -1, 451, 32, 601, 0, 573, -1, 545, -1, 517, -1, 489, -1, 461, 32, 612, 0, 584, -1, 556, -1, 528, -1, 500, -1, 472, 32, 452, 0, 424, -1, 396, -1, 368, -1, 340, -1, 312, 32, 456, 0, 428, -1, 400, -1, 372, -1, 344, -1, 316, 32, 467, 0, 439, -1, 411, -1, 383, -1, 355, -1, 327, 32, 471, 0, 443, -1, 415, -1, 387, -1, 359, -1, 331, 32],
route[0] = [],
route[0][0] = [!1, 160, 148, 180, 140, 200, 148, 280, 148, 410, 156, 416, 198, 400, 186, 380, 200, 6, 222, 0, 264, 16, 256, 32, 266, 410, 289, 416, 330, 400, 318, 380, 332, 6, 354, 0, 396, 16, 388, 32, 398, 410, 421, 416, 462, 400, 450, 380, 464, 200, 476, -50, 476],
route[0][1] = [!1, 160, 148, 180, 140, 200, 148, 280, 148, 410, 156, 416, 198, 400, 186, 380, 200, 134, 214, 134, 272, 362, 285, 362, 334, 6, 354, 0, 396, 16, 388, 32, 398, 410, 421, 416, 462, 400, 450, 380, 464, 200, 476, -50, 476],
route[0][2] = [!1, 160, 148, 180, 140, 200, 148, 280, 148, 360, 154, 360, 200, 54, 218, 54, 268, 410, 289, 416, 330, 400, 318, 380, 332, 56, 350, 56, 400, 360, 417, 360, 466, 200, 476, -50, 476],
route[0][3] = [!1, 160, 148, 168, 148, 168, 214, 6, 222, 0, 264, 16, 256, 32, 266, 216, 277, 216, 342, 184, 344, 184, 407, 410, 421, 416, 462, 400, 450, 380, 464, 200, 476, -50, 476],
route[0][4] = [!1, 150, 108, 180, 214, 184, 180, 204, 277, 208, 232, 228, 342, 232, 310, 252, 410, 256, 390, 276, 470, 270, 456, 260, 472, 250, 460, 240, 474, 230, 470, 220, 476, -50, 476],
route[0][5] = [!1, 32, 464, 32, 432, 64, 432, 64, 462, 152, 462, 152, 390, 56, 384, 56, 336, 120, 332, 120, 254, 56, 252, 56, 204, 448, 180],
route[1] = [],
route[1][0] = [!1, 208, 256, 208, 224, 152, 224, 152, 304, 120, 304, 120, 384, 280, 384, 280, 304, 264, 304, 264, 224, 208, 224, 208, 256],
route[1][1] = [!1, 208, 256, 208, 224, 40, 224, 40, 304, 8, 304, 80, 304, 40, 304, 40, 224, 208, 224, 208, 256],
route[1][2] = [!1, 208, 256, 208, 224, 376, 224, 376, 304, 408, 304, 328, 304, 376, 304, 376, 224, 208, 224, 208, 256],
route[1][3] = [!1, 208, 256, 208, 224, 264, 224, 264, 304, 280, 304, 280, 384, 376, 384, 376, 464, 264, 464, 264, 384, 152, 384, 152, 464, 40, 464, 40, 384, 120, 384, 120, 304, 152, 304, 152, 224, 208, 224, 208, 256],
route[1][4] = [!1, 208, 256, 208, 224, 24, 224, 24, 144, 392, 144, 392, 224, 208, 224, 208, 256],
route[1][5] = [!1, 208, 256, 208, 224, 392, 224, 392, 144, 24, 144, 24, 224, 208, 224, 208, 256],
route[2] = [],
route[2][0] = [!1, 120, 240, 120, 384, 152, 384, 152, 240, 120, 240],
route[2][1] = [!1, 120, 240, 120, 384, 152, 384, 120, 384, 120, 240, 152, 240, 152, 384, 152, 240, 120, 240],
route[2][2] = [!1, 152, 240, 152, 384, 120, 384, 120, 240],
route[2][3] = [!1, 152, 240, 112, 240, 152, 240, 152, 384, 152, 240, 152, 384, 120, 384, 152, 384, 120, 384, 120, 240],
route[2][4] = [!1, 408, 176, 424, 176, 408, 176],
route[2][5] = [!1, 408, 176, 408, 256, 424, 256, 360, 256, 408, 256, 408, 176],
route[2][6] = [!1, 408, 176, 408, 256, 360, 256, 424, 256, 360, 256, 360, 320, 376, 320, 360, 320, 376, 320, 360, 320, 360, 256, 424, 256, 408, 256, 408, 176],
route[2][7] = [!1, 408, 176, 408, 256, 424, 256, 360, 256, 424, 256, 360, 256, 360, 320, 360, 256, 360, 320, 376, 320, 360, 320, 360, 256, 360, 320, 360, 256, 408, 256, 408, 176],
route[3] = [],
route[3][0] = [0, 416, 464],
route[3][1] = [16, 400, 384],
route[3][2] = [32, 384, 304],
route[3][3] = [48, 368, 224],
conveyor[0] = [],
conveyor[1] = [308, 0, 309, 0, 310, 0, 311, 0, 312, 0, 313, 0, 314, 0, 315, 0, 316, 0, 317, 0, 318, 1, 319, 0, 320, 0, 321, 0, 322, 0, 323, 0, 324, 0, 325, 0, 326, 0, 327, 0, 328, 0, 329, 1, 330, 0, 331, 0, 332, 0, 333, 0, 334, 0, 335, 0, 728, 1, 729, 1, 730, 1, 731, 1, 732, 1, 733, 1, 734, 1, 735, 1, 736, 1, 737, 1, 738, 1, 739, 1, 740, 1, 741, 1, 742, 1, 743, 1, 744, 1, 745, 1, 746, 1, 747, 1, 748, 1, 749, 1, 750, 1, 751, 1, 752, 1, 753, 1, 754, 1, 755, 1, 448, 2, 449, 2, 450, 2, 451, 2, 452, 2, 453, 2, 454, 2, 455, 2, 456, 2, 457, 2, 458, 2, 459, 2, 460, 2, 463, 3, 464, 3, 465, 3, 466, 3, 467, 3, 468, 3, 469, 3, 470, 3, 471, 3, 472, 3, 473, 3, 474, 3, 475, 3],
conveyor[2] = [],
conveyor[3] = [],
Gl_preloader("assets/g0.gif", "assets/g1.gif", "assets/g2.gif", "assets/g3.gif", "assets/g4.gif", "assets/g5.gif", "assets/g6.gif", "assets/g7.gif", "assets/g8.gif", "assets/g9.gif", "assets/bg.gif", "assets/bg01.gif"),
typeof document.oncontextmenu != "undefined" ? document.oncontextmenu = ce : document.onclick = nrc,
typeof document.onselectstart != "undefined" && (document.onselectstart = ce),
typeof document.ondragstart != "undefined" && (document.ondragstart = ce)
