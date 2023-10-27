//設定----------------------------------------------------------------------------------------------------
const app_mount = "root"
const voice_container = "Voice_voiceContainer__adk9M"
const voice_states = "Voice_voiceStates__a121W"
const voice_state = "Voice_voiceState__OCoZh"
const Vavatar = "Voice_avatar__htiqH"
const user = "Voice_user__8fGwX"
const namename = "Voice_name__TALd9"
const speaking = "Voice_avatarSpeaking__lE\+4m"



function execution1(li_num) {

    var li_num = li_num - 1;
    //console.log(li_num)

    //idを変更 要素追加----------------------------------------------------------------------------------------------------

    var user_info = document.querySelectorAll("." + Vavatar);
    //console.log(user_info)
    //console.log(user_info[li_num])
    var src = user_info[li_num].getAttribute('src');
    //console.log(src)

    //avatarsより後の文字が欲しい
    var cut = src.substr(src.indexOf('avatars') + 8);
    // /より前の文字が欲しい
    var user_id = cut.substr(0, cut.indexOf('/'));




    var change_root = document.getElementById("root");
    change_root.setAttribute("style", "font-family:Whitney, sans-serif;background-color:transparent;");
    change_root.setAttribute("class", " ");
    change_root.setAttribute("data-reactid", ".0");




    var change_class1 = document.querySelector("." + voice_container);
    //change_class1.className = "voice-container";
    change_class1.setAttribute("data-reactid", ".0.0");

    var change_class2 = document.querySelector("." + voice_states);
    //change_class2.className = "voice-states";
    change_class2.setAttribute("data-reactid", ".0.0.0");

    var change_class3 = document.querySelectorAll("." + voice_state);
    //change_class3.className = "voice-state";
    change_class3[li_num].setAttribute("data-reactid", ".0.0.0.$" + user_id + "/=1$" + user_id);

    var change_class4 = document.querySelectorAll("." + Vavatar);
    change_class4[li_num].setAttribute("data-reactid", ".0.0.0.$" + user_id + "/=1$" + user_id + ".$=10");

    var change_class5 = document.querySelectorAll("." + user);
    //change_class5.className = "user";
    change_class5[li_num].setAttribute("data-reactid", ".0.0.0.$" + user_id + "/=1$" + user_id + ".$/=11");

    var change_class6 = document.querySelectorAll("." + namename);
    //change_class6.className = " name";
    change_class6[li_num].setAttribute("style", "color:#ffffff;font-size:14px;background-color:rgba(30, 33, 36, 0.95);");
    change_class6[li_num].setAttribute("data-reactid", ".0.0.0.$" + user_id + "/=1$" + user_id + ".$/=11.0");


}


const CHROME_EXT_URL = chrome.extension.getURL("images/");
const CREW_COLORS = [
    "#c51111",
    "#132fd2",
    "#127f2d",
    "#ed53b9",
    "#ef7d0e",
    "#f5f558",
    "#3f484e",
    "#d5e0ef",
    "#6b30bc",
    "#72491e",
    "#39fedb",
    "#50ef3a",
    "#741b14",
    "#ecc0d3",
    "#fefbbe",
    "#708496",
    "#928776",
    "#ec7678",
    "#ffce10",
    "#ff3c10",
    "#ff1c67",
    "#ffa36d",
    "#f4bfbf",
    "#b478c4",
    "#aadbf4",
    "#50c099",
    "#ceff10",
    "#5b34e5",
    "#1f82b2",
    "#1eb9c3",
    "#1d6566",
    "#6c9138",
    "#998b3c",
    "#a1623d",
    "#6d1027",
];

/*----CSS読み込み----*/
function appendCSS(url) {
    $("body").append(`<link rel="stylesheet" href="${url}">`);
}
appendCSS("https://fonts.googleapis.com/icon?family=Material+Icons");
appendCSS(chrome.extension.getURL("css/style.css"));

/*----ツール要素追加----*/
$("body").prepend(`
      <canvas id="preview-canvas"></canvas>
      <input id="lock" type="checkbox">
      <div class="edit">
        <label  for="lock"><a class="button" id="lock-button">Lock</a></label>
        <a class="button" id="reset-button">Reset</a>
      </div>
    `);
$("body").append(`
      <div class="map-container">
        <img id="map" src="${CHROME_EXT_URL}TheSkeld.png" ondragstart="return false;">
      </div>
      <div class="popup_wrap">
        <input id="trigger" type="checkbox">
        <div class="popup_overlay">
          <label for="trigger" class="popup_trigger"></label>
          <div class="popup_content">
            <label for="trigger" class="close_btn">×</label>
            <img id="popup-preview" src="">
          </div>
        </div>
      </div>
      <input class="menu-label" id="menu" type="checkbox" />
      <label class="open menu-label" for="menu">≡</label>
      <label class="back menu-label" for="menu"></label>
      <aside>
        <label for="menu" class="close">×</label>
        <nav>
          <div class="participation">
            <div class="player-container display-none">
              <i class="material-icons md-light">person</i> Player
              <ul id="player-ul"></ul>
            </div>
            <div class="joined-container">
              <i class="material-icons md-light">login</i> Joined
              <ul id="joined-ul"></ul>
            </div>
            <div class="leaved-container">
              <i class="material-icons md-light transform">logout</i> Leaved
              <ul id="leaved-ul"></ul>
            </div>
          </div>
          <hr class="divider">
          <div class="preview">
            <div class="preview-button">
              <a class="button" id="save-ss">Screen Shot</a>
              <a class="button" id="clear-ss">Clear</a>
              <a class="button" id="new-game">New Game</a>
            </div>
            <div class="preview-img-container"></div>
          </div>
        </nav>
        <footer>
          <hr class="divider">
          <div class="settings">
            <div class="map-list">
              <a class="button map-button" id="TheSkeld">TheSkeld</a>
              <a class="button map-button" id="MiraHQ">MiraHQ</a>
              <a class="button map-button" id="Polus">Polus</a>
              <a class="button map-button" id="TheAirShip">TheAirShip</a>
              <a class="button map-button" id="submerged">submerged</a>
              <a class="button map-button" id="TheFungle">TheFungle</a>
            </div>
            <table id="rule-table">
              <tr>
                <td>Anonymous Votes:</td>
                <td>
                  <input id="switch" type="checkbox">
                  <label for="switch" class="switch-trigger"></label>
                </td>
              </tr>
              <tr>
                <td>Emergency Cooldown:</td>
                <td><input type="number" value="15" min="0" max="60" step="5"></td>
              </tr>
              <tr>
                <td>Kill Cooldown:</td>
                <td><input type="number" value="35.0" min="10.0" max="60.0" step="2.5"></td>
              </tr>
              <tr>
                <td>#Common Tasks:</td>
                <td><input type="number" value="2" min="0" max="2" step="1"></td>
              </tr>
              <tr>
                <td>#Long Tasks:</td>
                <td><input type="number" value="3" min="0" max="3" step="1"></td>
              </tr>
              <tr>
                <td>#Short Tasks:</td>
                <td><input type="number" value="5" min="0" max="5" step="1"></td>
              </tr>
            </table>
          </div>
          <div id="crewmate-list">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/c51111.png" alt="#c51111">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/132fd2.png" alt="#132fd2">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/127f2d.png" alt="#127f2d">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/ed53b9.png" alt="#ed53b9">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/ef7d0e.png" alt="#ef7d0e">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/f5f558.png" alt="#f5f558">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/3f484e.png" alt="#3f484e">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/d5e0ef.png" alt="#d5e0ef">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/6b30bc.png" alt="#6b30bc">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/72491e.png" alt="#72491e">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/39fedb.png" alt="#39fedb">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/50ef3a.png" alt="#50ef3a">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/741b14.png" alt="#741b14">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/ecc0d3.png" alt="#ecc0d3">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/fefbbe.png" alt="#fefbbe">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/708496.png" alt="#708496">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/928776.png" alt="#928776">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/ec7678.png" alt="#ec7678">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/ffce10.png" alt="#ffce10">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/ff3c10.png" alt="#ff3c10">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/ff1c67.png" alt="#ff1c67">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/ffa36d.png" alt="#ffa36d">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/f4bfbf.png" alt="#f4bfbf">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/b478c4.png" alt="#b478c4">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/aadbf4.png" alt="#aadbf4">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/50c099.png" alt="#50c099">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/ceff10.png" alt="#ceff10">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/5b34e5.png" alt="#5b34e5">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/1f82b2.png" alt="#1f82b2">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/1eb9c3.png" alt="#1eb9c3">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/1d6566.png" alt="#1d6566">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/6c9138.png" alt="#6c9138">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/998b3c.png" alt="#998b3c">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/a1623d.png" alt="#a1623d">
            <img class="${Vavatar}" src="${CHROME_EXT_URL}playerIcons/6d1027.png" alt="#6d1027">
          </div>
        </footer>
      </aside>
    `);
$("body").children("*:not(aside, .menu-label)").wrapAll("<main></main>");

/*---- ロック切り替え ----*/
let isLock = false;
$("#lock-button").on("click", function() {
    // ロック外す
    if (isLock) {
        isLock = false;
        $("." + voice_state).spectrum("enable"); // カラーパレット有効化
        $(this).text("Lock");
        $("#player-ul").empty(); // プレイヤーリスト削除
        $(".temp-vs").remove(); // 退室済アバター削除
        $(`.` + voice_state + `[alt='rgba(0, 0, 0, 0)']`).toggleClass("display-none");
        //console.log("ロック解除")
    }
    // ロックする
    else {
        isLock = true;
        $("." + voice_state).spectrum("disable"); // カラーパレット無効化
        $(this).text("Unlock");
        $(`#joined-ul .side-vs[alt!='rgba(0, 0, 0, 0)']`)
            .clone()
            .appendTo("#player-ul");

        $(`.` + voice_state + `[alt='rgba(0, 0, 0, 0)']`).toggleClass("display-none");
        //console.log("ロック")
    }
    $(".player-container").toggleClass("display-none");
    $(".joined-container").toggleClass("display-none");
});

/*---- 初期位置 ----*/
$("#reset-button").on("click", function() {
    resetAvatarPosition();
});

function resetAvatarPosition() {
    $("." + voice_state).each(function(index, element) {
        $(element).css({
            position: "relative",
            left: "",
            top: "",
        });
    });
}

/*---- 新規ラウンド ----*/
$("#new-game").on("click", function() {
    canvas.clear();
    $(".preview-img-container").empty();
    resetAvatarPosition();
    resetAvatarState();
    resetAvatarState2()
});

function resetAvatarState() {
    $("#player-ul .side-vs").attr("data-dead", "");
    $("." + voice_state).each(function(index, element) {
        const avatar = $(element).children("." + Vavatar);
        const avatarSrc = avatar.attr("src").replace("-dead", "");
        avatar.attr("src", avatarSrc);
        avatar.attr("data-dead", "");

        const emergencyButton = $(element).find(".emergency-button");
        const ebSrc = emergencyButton.attr("src").replace("open", "close");
        emergencyButton.attr("src", ebSrc);
        emergencyButton.css("filter", "brightness(0.5)");
    });
}

function resetAvatarState2() {
    $("#player-ul .side-vs").attr("data-dead", "");
    $("." + voice_state).each(function(index, element) {
        const avatar = $(element).children("." + Vavatar);
        const avatarSrc = avatar.attr("src").replace("-dead", "");
        avatar.attr("src", avatarSrc);
        avatar.attr("data-dead", "");

        const emergencyButton = $(element).find(".sabotage-button");
        const ebSrc = emergencyButton.attr("src").replace("open", "close");
        emergencyButton.attr("src", ebSrc);
        emergencyButton.css("filter", "brightness(0.5)");
    });
}

/*---- マップ切り替え ----*/
$(".map-button").on("click", function() {
    const buttonId = $(this).attr("id");
    const src = `${CHROME_EXT_URL}${buttonId}.png`;
    $(".map-button").each(function(index, element) {
        $(element).css({
            background: "#36393f",
            color: "#bbbbbb",
        });
    });
    $(this).css({
        background: "#a0a0a0",
        color: "white",
    });
    $("#map").attr("src", src);
});

/*----Discordユーザ取得----*/
const target = document.getElementById("root");
//console.log(target)
const mutationObserver = new MutationObserver(callback);


function callback(mutations) {
    var li_count = 0;
    //console.log(li_count)


    mutations.forEach((mutation) => {

        li_count++
        //console.log(li_count)

        mutation.addedNodes.forEach((node) => {
            if ($(node).hasClass(voice_state)) {
                if (!$(node).hasClass("temp-vs")) {
                    execution1(li_count)
                    userJoined(node);
                }
            }
        });
        mutation.removedNodes.forEach((node) => {
            if ($(node).hasClass(voice_state)) {
                userLeaved(node);
            }
        });
    });
}
const option = {
    childList: true,
    subtree: true,
};
//console.log(target)
mutationObserver.observe(target, option);

/*----ユーザ参加時の設定----*/
function userJoined(node) {
    //console.log(node)
    setCrewmate(node);
    setDraggable(node);
    setEmergencyButton(node);
    setSabotageButton(node);
    setColorPicker(node);
    setDeadSwitch(node);
}

/*----ユーザ退室時の設定----*/
function userLeaved(node) {
    // sidebar設定
    const id = $(node).attr("data-reactid");
    const joinedUser = $(`#joined-ul .side-vs[data-reactid='${id}']`);
    $("#leaved-ul").append(joinedUser);

    if (getIsPlayer(node)) {
        $(node).addClass("temp-vs");
        $(node).attr("data-reactid", "");
        $(node).attr("temp-reactid", id);
        $("." + voice_states).append($(node));
    } else {
        // crewmate-list設定
        const color = $(node).children("." + Vavatar).attr("alt");
        const src = `${CHROME_EXT_URL}playerIcons/${color.substr(1)}.png`;
        if (CREW_COLORS.some((c) => c === color) && !isLock) {
            $("#crewmate-list").append(
                `<img class="${Vavatar}" src="${src}" alt="${color}">`
            );
        }
    }
}

/*----参加ユーザの初期設定----*/
function setCrewmate(node) {
    /* sidebar設定 */
    const id = $(node).attr("data-reactid");
    const leavedUser = $(`#leaved-ul .side-vs[data-reactid='${id}']`);
    let color = "rgba(0, 0, 0, 0)";
    let dead = "";

    if (leavedUser.length != 0) {
        if (!isLock || getIsPlayer(node)) {
            // 退出履歴有り
            const oldColor = leavedUser.attr("alt");
            const joinedUser = $(`#joined-ul .side-vs[alt="${oldColor}"]`);
            if (joinedUser.length == 0) {
                // 色被り無し
                color = oldColor;
            }
        }
        leavedUser.remove();
    }
    if (getIsPlayer(node)) {
        const playerUser = $(`#player-ul .side-vs[data-reactid='${id}']`);
        dead = playerUser.attr("data-dead");
    }

    const sideElement = $(node).clone().appendTo("#joined-ul");
    sideElement.attr({ class: "side-vs", "data-dead": "" });
    sideElement.find("." + Vavatar).attr("class", "side-avatar");
    setElementColor(sideElement, color);

    /* avatar設定 */
    const tempAvatar = $(`.temp-vs[temp-reactid='${id}']`);
    if (tempAvatar.css("position") == "absolute") {
        const pos = tempAvatar.offset();
        $(node).css({
            position: "absolute",
            left: pos.left,
            top: pos.top,
        });
    }
    tempAvatar.remove();

    if (CREW_COLORS.some((c) => c === color)) {
        $(node)
            .children("." + Vavatar)
            .attr(
                "src",
                `${CHROME_EXT_URL}playerIcons/${color.substr(1) + dead}.png`
            );
        $(`#crewmate-list .` + Vavatar + `[alt='${color}']`).remove();
    }

    $(node).attr("alt", color);
    $(node).children("." + Vavatar).attr("alt", color);
    $(node).children("." + Vavatar).attr("data-dead", dead);
}

/*---- Draggable設定 ----*/
function setDraggable(node) {
    $(node).draggable({
        scroll: false,
        distance: 20,
        start: function() {
            $(node).spectrum("hide");
        },
        stop: function() {
            const pos = $(node).offset();
            $(node).css({
                position: "absolute",
                left: pos.left,
                top: pos.top,
            });
        },
    });
}

/*---- EmergencyButton設定 ----*/
function setEmergencyButton(node) {
    if (!$(node).find(".emergency-button").length) {
        var button = $(
            `<img class="emergency-button" src="${CHROME_EXT_URL}EmergencyButton_close.png">`
        ).appendTo($(node).children("." + user));
        button.on("click", function() {
            var src = $(this).attr("src");
            if ($(this).css("filter") == "brightness(0.5)") {
                $(this).css("filter", "brightness(1.0)");
                src = src.replace("close", "open");
            } else {
                $(this).css("filter", "brightness(0.5)");
                src = src.replace("open", "close");
            }
            $(this).attr("src", src);
        });
    }
}

/*---- SabotageButton設定 ----*/
function setSabotageButton(node) {
    if (!$(node).find(".sabotage-button").length) {
        var button = $(
            `<img class="sabotage-button" src="${CHROME_EXT_URL}SabotageButton_close.png">`
        ).appendTo($(node).children("." + user));
        button.on("click", function() {
            var src = $(this).attr("src");
            if ($(this).css("filter") == "brightness(0.5)") {
                $(this).css("filter", "brightness(1.0)");
                src = src.replace("close", "open");
            } else {
                $(this).css("filter", "brightness(0.5)");
                src = src.replace("open", "close");
            }
            $(this).attr("src", src);
        });
    }
}



/*----カラーパネルの設定----*/
function setColorPicker(node) {
    $(node).spectrum({
        showPalette: true,
        showPaletteOnly: true,
        palette: [
            ["#c51111", "#132fd2", "#127f2d", "#ed53b9", "#ef7d0e", "#f5f558"],
            ["#3f484e", "#d5e0ef", "#6b30bc", "#72491e", "#39fedb", "#50ef3a"],
            ["#741b14", "#ecc0d3", "#fefbbe", "#708496", "#928776", "#ec7678"],
            ["#ffce10", "#ff3c10", "#ff1c67", "#ffa36d", "#f4bfbf", "#b478c4"],
            ["#aadbf4", "#50c099", "#ceff10", "#5b34e5", "#1f82b2", "#1eb9c3"],
            ["#1d6566", "#6c9138", "#998b3c", "#a1623d", "#6d1027"],
        ],
        hideAfterPaletteSelect: true,
        clickoutFiresChange: false,

        show: function() {
            $(".sp-container").offset(function(index, coords) {
                return {
                    top: coords.top + 13,
                    left: coords.left - 27,
                };
            });
        },

        move: function(color) {
            const oldElement = $(node).children("." + Vavatar);
            const oldColor = oldElement.attr("alt");
            const oldSrc = `${CHROME_EXT_URL}playerIcons/${oldColor.substr(1)}.png`;
            const oldJoinedUser = $(
                `#joined-ul .side-vs[data-reactid='${$(node).attr("data-reactid")}']`
            );
            const newColor = color.toHexString();
            const newSrc = `${CHROME_EXT_URL}playerIcons/${color.toHex()}.png`;
            const newElement = $(`.` + Vavatar + `[alt='${newColor}']`);
            const newJoinedUser = $(
                `#joined-ul .side-vs[data-reactid='${newElement
              .parent()
              .attr("data-reactid")}']`
            );

            if (CREW_COLORS.some((c) => c === newColor) && oldColor != newColor) {
                // 選択したカラーをスワップ
                if (CREW_COLORS.some((c) => c === oldColor)) {
                    // 元がユーザ画像ではない
                    newElement.attr({
                        src: oldSrc,
                        alt: oldColor,
                    });
                    setElementColor(newJoinedUser, oldColor);
                } else {
                    // 元がユーザ画像
                    if (newElement.hasClass(Vavatar)) {
                        // 他のユーザが対象
                        const subElement = $("#crewmate-list ." + Vavatar + ":first");
                        const subColor = subElement.attr("alt");
                        const subSrc = `${CHROME_EXT_URL}playerIcons/${subColor.substr(
                  1
                )}.png`;

                        newElement.attr({
                            src: subSrc,
                            alt: subColor,
                        });
                        setElementColor(newJoinedUser, subColor);
                        subElement.remove();
                    } else {
                        // クルーリストが対象
                        newElement.remove();
                    }
                }
                // 選択したカラーをボタンに追加
                oldElement.attr({
                    src: newSrc,
                    alt: newColor,
                });
                setElementColor(oldJoinedUser, newColor);
                $(node).attr("alt", newColor);
            }
        },
    });
    if (isLock) $(node).spectrum("disable");
}

/*---- 死体切り替え ----*/
function setDeadSwitch(node) {
    $(node).dblclick(function() {
        const crew = $(node).children("." + Vavatar);
        var color = crew.attr("alt");

        if (CREW_COLORS.some((c) => c === color) && isLock) {
            const sideUser = $(`#player-ul .side-vs[alt='${color}']`);
            var dead = sideUser.attr("data-dead") === "" ? "-dead" : "";
            sideUser.attr("data-dead", dead);
            crew.attr("data-dead", dead);
            crew.attr(
                "src",
                `${CHROME_EXT_URL}playerIcons/${color.substr(1) + dead}.png`
            );
        }
    });
}

/* サイドバーのユーザの色設定 */
function setElementColor(element, color) {
    element.attr("alt", color);
    element.css("background-color", color);
}
/* プレイヤーの存在判定 */
function getIsPlayer(node) {
    const id = $(node).attr("data-reactid");
    const user = $(`#player-ul .side-vs[data-reactid='${id}']`);
    return user.length != 0 ? true : false;
}

/*==== プレビュー ====*/
const previewCanvas = new fabric.Canvas("preview-canvas");
$("#save-ss").on("click", function() {
    previewCanvas.setDimensions({
        width: $("main").width() + 20,
        height: $("main").height() + 20,
    });
    previewCanvas.setBackgroundColor("#36393f");

    addPreview();
});
// SSをサイドバーに追加
async function addPreview() {
    // map描画
    var mapSrc = $("#map").attr("src");
    var mapHeight = $("#map").height();
    var mapOffset = $("#map").offset();
    await setImg(mapSrc, mapHeight, mapOffset);

    // paint描画
    var paintSrc = canvas.toDataURL({
        width: $("main").width() + 20,
        height: $("main").height() + 20,
    });
    var paintHeight = $("main").height() + 20;
    var paintOffset = { top: 0, left: 0 };
    await setImg(paintSrc, paintHeight, paintOffset);

    // avatar描画
    for await (avatar of $("." + voice_state + " ." + Vavatar)) {
        var avatarSrc = $(avatar).attr("src");
        if (avatarSrc.indexOf(CHROME_EXT_URL)) {
            continue;
        }
        var avatarHeight = $(avatar).height();
        var avatarOffset = $(avatar).offset();
        avatarOffset.left += 7.5;
        await setImg(avatarSrc, avatarHeight, avatarOffset);
    }

    var previewSrc = previewCanvas.toDataURL();
    var previewButton = $(`
        <span class="preview-node">
          <label for="trigger" class="open-preview">
            <img class="preview-img" src="${previewSrc}" ondragstart="return false;">
            <i class="material-icons remove-preview-node">cancel</i>
          </label>
        </span>
      `).appendTo($(".preview-img-container"));
    previewButton.on("click", function() {
        var src = $(this).find(".preview-img").attr("src");
        $("#popup-preview").attr("src", src);
    });
    previewButton.find(".remove-preview-node").on("click", function() {
        previewButton.remove();
    });
    previewCanvas.clear();
}
// canvasに画像を追加
function setImg(src, height, offset) {
    return new Promise(function(resolve, reject) {
        fabric.Image.fromURL(src, function(img) {
            img.scaleToHeight(height);
            img.set({
                left: offset.left,
                top: offset.top,
            });
            previewCanvas.add(img);
            resolve();
        });
    });
}
/*-- プレビュー削除 --*/
$("#clear-ss").on("click", function() {
    $(".preview-img-container").empty();
});