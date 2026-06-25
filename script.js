// 等网页内容加载完成后，再寻找需要互动的元素。
document.addEventListener("DOMContentLoaded", function () {
  var wechatMessage = document.getElementById("wechatMessage");
  var closeMessage = document.getElementById("closeMessage");
  var desktopTip = document.getElementById("desktopTip");
  var iconButtons = document.querySelectorAll(".desktop-icon");
  var dockButtons = document.querySelectorAll(".dock-item");
  var wechatDesktopIcon = document.getElementById("wechatDesktopIcon");
  var wechatWindow = document.getElementById("wechatWindow");
  var wechatCloseButton = document.getElementById("wechatCloseButton");
  var contactItems = document.querySelectorAll(".contact-item");
  var achuanChat = document.getElementById("achuanChat");
  var xiaoheChat = document.getElementById("xiaoheChat");
  var seniorChat = document.getElementById("seniorChat");
  var classChat = document.getElementById("classChat");
  var transferChat = document.getElementById("transferChat");
  var chatTitle = document.getElementById("chatTitle");
  var wechatReplyInput = document.getElementById("wechatReplyInput");
  var wechatSendButton = document.getElementById("wechatSendButton");
  var wechatSendError = document.getElementById("wechatSendError");
  var downloadsDesktopIcon = document.getElementById("downloadsDesktopIcon");
  var folderWindow = document.getElementById("folderWindow");
  var folderCloseButton = document.getElementById("folderCloseButton");
  var mirrorZipFile = document.getElementById("mirrorZipFile");
  var imageCacheInfoFile = document.getElementById("imageCacheInfoFile");
  var passwordWindow = document.getElementById("passwordWindow");
  var passwordCloseButton = document.getElementById("passwordCloseButton");
  var passwordInput = document.getElementById("passwordInput");
  var passwordError = document.getElementById("passwordError");
  var passwordConfirmButton = document.getElementById("passwordConfirmButton");
  var passwordCancelButton = document.getElementById("passwordCancelButton");
  var damagedMirrorFile = document.getElementById("damagedMirrorFile");
  var liveScreenshotFile = document.getElementById("liveScreenshotFile");
  var imageViewerWindow = document.getElementById("imageViewerWindow");
  var imageViewerCloseButton = document.getElementById("imageViewerCloseButton");
  var imageViewerTitle = document.getElementById("imageViewerTitle");
  var imagePlaceholder = document.getElementById("imagePlaceholder");
  var imageDescription = document.getElementById("imageDescription");
  var browserDesktopIcon = document.getElementById("browserDesktopIcon");
  var douyinDesktopIcon = document.getElementById("douyinDesktopIcon");
  var douyinWindow = document.getElementById("douyinWindow");
  var douyinCloseButton = document.getElementById("douyinCloseButton");
  var profileEmailButton = document.getElementById("profileEmailButton");
  var wechatNewsCard = document.getElementById("wechatNewsCard");
  var classNewsCard = document.getElementById("classNewsCard");
  var mailDesktopIcon = document.getElementById("mailDesktopIcon");
  var mailWindow = document.getElementById("mailWindow");
  var mailCloseButton = document.getElementById("mailCloseButton");
  var mailLoginPanel = document.getElementById("mailLoginPanel");
  var mailLayout = document.getElementById("mailLayout");
  var mailLoginInput = document.getElementById("mailLoginInput");
  var mailPasswordInput = document.getElementById("mailPasswordInput");
  var mailLoginButton = document.getElementById("mailLoginButton");
  var mailLoginError = document.getElementById("mailLoginError");
  var mailList = document.getElementById("mailList");
  var mailDetail = document.getElementById("mailDetail");
  var memoTaskList = document.getElementById("memoTaskList");
  var recycleDesktopIcon = document.getElementById("recycleDesktopIcon");
  var recycleWindow = document.getElementById("recycleWindow");
  var recycleCloseButton = document.getElementById("recycleCloseButton");
  var recycleFileList = document.getElementById("recycleFileList");
  var recycleFileDetail = document.getElementById("recycleFileDetail");
  var browserWindow = document.getElementById("browserWindow");
  var browserCloseButton = document.getElementById("browserCloseButton");
  var chromeTab = document.querySelector(".chrome-tab");
  var chromeNavButtons = document.querySelectorAll(".chrome-nav-button");
  var addressBar = document.getElementById("addressBar");
  var searchPage = document.getElementById("searchPage");
  var baiyePage = document.getElementById("baiyePage");
  var siteSearchInput = document.getElementById("siteSearchInput");
  var siteSearchButton = document.getElementById("siteSearchButton");
  var searchResults = document.getElementById("searchResults");
  var searchHistory = document.getElementById("searchHistory");
  var caseQueryInput = document.getElementById("caseQueryInput");
  var caseQueryButton = document.getElementById("caseQueryButton");
  var caseResult = document.getElementById("caseResult");
  var fakeResultPage = document.getElementById("fakeResultPage");
  var fakePageTitle = document.getElementById("fakePageTitle");
  var fakePageBody = document.getElementById("fakePageBody");
  var backToSearchButton = document.getElementById("backToSearchButton");
  var baiyeNavLinks = document.querySelectorAll(".baiye-nav-link");
  var baiyeHomeSection = document.getElementById("baiyeHomeSection");
  var baiyeQuerySection = document.getElementById("baiyeQuerySection");
  var baiyeArchiveSection = document.getElementById("baiyeArchiveSection");
  var archiveMoreButton = document.getElementById("archiveMoreButton");
  var archiveMoreInfo = document.getElementById("archiveMoreInfo");
  var realQueryInput = document.getElementById("realQueryInput");
  var realQueryButton = document.getElementById("realQueryButton");
  var realQueryResult = document.getElementById("realQueryResult");
  var baiyeObjectSearchInput = document.getElementById("baiyeObjectSearchInput");
  var baiyeObjectSearchButton = document.getElementById("baiyeObjectSearchButton");
  var baiyeObjectResult = document.getElementById("baiyeObjectResult");
  var staffLogLink = document.getElementById("staffLogLink");
  var staffLogPanel = document.getElementById("staffLogPanel");
  var staffLogInput = document.getElementById("staffLogInput");
  var staffLogButton = document.getElementById("staffLogButton");
  var staffLogResult = document.getElementById("staffLogResult");
  var staffPermissionBadge = document.getElementById("staffPermissionBadge");
  var staffHiddenNavButtons = document.querySelectorAll(".staff-hidden-nav");
  var staffPanel = document.getElementById("staffPanel");
  var storageSystemSection = document.getElementById("storageSystemSection");
  var faceMaintenanceSection = document.getElementById("faceMaintenanceSection");
  var takeFaceExplainSection = document.getElementById("takeFaceExplainSection");
  var takeFaceLoading = document.getElementById("takeFaceLoading");
  var takeFaceContent = document.getElementById("takeFaceContent");
  var activationSection = document.getElementById("activationSection");
  var observeRecordSection = document.getElementById("observeRecordSection");
  var face004MaintenanceRow = document.getElementById("face004MaintenanceRow");
  var face004Tooltip = document.getElementById("face004Tooltip");
  var viewFaceSummaryButton = document.getElementById("viewFaceSummaryButton");
  var faceSummaryPanel = document.getElementById("faceSummaryPanel");
  var openWarehouseDetailButton = document.getElementById("openWarehouseDetailButton");
  var warehouseDetailPanel = document.getElementById("warehouseDetailPanel");
  var openCasePreviewButton = document.getElementById("openCasePreviewButton");
  var casePreviewPanel = document.getElementById("casePreviewPanel");
  var coreVerificationPanel = document.getElementById("coreVerificationPanel");
  var coreConfirmModal = document.getElementById("coreConfirmModal");
  var coreConfirmItemName = document.getElementById("coreConfirmItemName");
  var coreConfirmButton = document.getElementById("coreConfirmButton");
  var coreCancelButton = document.getElementById("coreCancelButton");
  var selectCoreItemButtons = document.querySelectorAll(".select-core-item");
  var whitefoxIntervention = document.getElementById("whitefoxIntervention");
  var chapterEndingPanel = document.getElementById("chapterEndingPanel");
  var continueToObsSyncButton = document.getElementById("continueToObsSyncButton");
  var obsSyncPanel = document.getElementById("obsSyncPanel");
  var obsSyncLines = document.getElementById("obsSyncLines");
  var obsSyncTransfer = document.getElementById("obsSyncTransfer");
  var obs008LatestAction = document.getElementById("obs008LatestAction");
  var obs008RiskNote = document.getElementById("obs008RiskNote");
  var activationOldItemStatus = document.getElementById("activationOldItemStatus");
  var activationMaskStatus = document.getElementById("activationMaskStatus");
  var activationHandoverStatus = document.getElementById("activationHandoverStatus");
  var activationFinalHint = document.getElementById("activationFinalHint");
  var activationMaskHint = document.getElementById("activationMaskHint");
  var faceSummaryStatus = document.getElementById("faceSummaryStatus");
  var faceSummaryCoreItem = document.getElementById("faceSummaryCoreItem");
  var faceSummaryHandoverTime = document.getElementById("faceSummaryHandoverTime");
  var faceSummaryHint = document.getElementById("faceSummaryHint");
  var openInternalLogButton = document.getElementById("openInternalLogButton");
  var internalLogModal = document.getElementById("internalLogModal");
  var internalModalCloseButtons = document.querySelectorAll(".internal-modal-close");
  var realArchiveMoreButton = document.getElementById("realArchiveMoreButton");
  var realArchiveMoreInfo = document.getElementById("realArchiveMoreInfo");
  var horrorTextWall = document.getElementById("horrorTextWall");
  var horrorCaptureLog = document.getElementById("horrorCaptureLog");
  var horrorLogTitle = document.getElementById("horrorLogTitle");
  var horrorLogLines = document.getElementById("horrorLogLines");
  var horrorFinalRegion = document.getElementById("horrorFinalRegion");
  var horrorBackLink = document.getElementById("horrorBackLink");
  var finalRecordPaused = document.getElementById("finalRecordPaused");
  var desktopEndingOverlay = document.getElementById("desktopEndingOverlay");
  var endingWechatContact = document.getElementById("endingWechatContact");
  var endingWechatLines = document.getElementById("endingWechatLines");
  var endingPhotoNote = document.getElementById("endingPhotoNote");
  var whitefoxEndingFlash = document.getElementById("whitefoxEndingFlash");
  var filesExtracted = false;
  var mailLoggedIn = false;
  var discoveredProfileEmail = "xiaohejiuwu@mail.com";
  var browserSearchHistory = loadBrowserSearchHistory();
  var pendingCoreItem = null;
  var gameState = {
    coreItemSelected: false,
    correctCoreItem: false,
    face004Interrupted: false
  };
  // 每次置顶时递增，数值越大代表窗口越靠前。
  var nextWindowZIndex = 30;

  // 本地模拟搜索关键词：v0.7 版本按固定关键词释放线索，避免玩家过早看到隐藏档案。

  // 邮箱邮件数据：统一写在这里，方便后续继续添加新邮件。
  var mailMessages = [
    {
      id: "mail-1",
      sender: "白页旧物社 客服中心",
      receiver: "小禾旧物 / 商务邮箱",
      subject: "白页旧物社｜旧物直播合作申请已受理",
      time: "2021/03/15 19:07",
      body: [
        "您好，",
        "您提交的旧物直播合作申请已受理。",
        "本次合作为首次试播合作，白页旧物社将提供一组旧物整理素材，供您在直播中进行开箱、介绍与展示。",
        "服务信息如下：",
        "服务编号：#007\n服务类型：首次旧物直播合作\n合作形式：试播展示\n整理方式：无接触交接\n归档状态：待确认\n素材箱数：1\n素材件数：7\n建议开箱时间：2021/03/16 23:40 前",
        "本次素材包括旧相框、铜制香插、旧怀表、木质首饰盒、复古摆件等。",
        "其中编号 BY-AC-MR-0719 的仿古铜镜为重点展示素材，建议在直播后半段单独展示。",
        "注意事项：\n1. 请在直播前确认素材箱外封条完整。\n2. 请勿提前公开素材清单。\n3. BY-AC-MR-0719 建议最后开箱。\n4. BY-AC-MR-0719 不建议长时间正面照人。\n5. 如直播过程中出现画面异常，请优先保存回放并暂停展示。",
        "如需查询本次合作归档记录，请通过服务查询入口输入服务编号。",
        "白页旧物社 客服中心"
      ],
      attachment: "旧物素材清单_0316.pdf",
      todoStage: "mail-clue"
    },
    {
      id: "mail-2",
      sender: "小禾旧物 / 商务邮箱",
      receiver: "白页旧物社 客服中心",
      subject: "Re: 旧物盲盒直播素材清单",
      time: "2021/03/16 12:41",
      body: [
        "您好，",
        "素材箱已收到。",
        "外封条完整，箱体编号显示为：",
        "BY-0316-007",
        "今晚直播会按建议顺序展示。",
        "另外，箱内有轻微金属撞击声，请确认是否正常。",
        "小禾旧物"
      ]
    },
    {
      id: "mail-3",
      sender: "系统通知",
      receiver: "小禾旧物 / 商务邮箱",
      subject: "部分邮件同步失败",
      time: "2021/03/22 23:40",
      body: [
        "同步异常。",
        "以下关键词相关邮件可能无法完整显示：",
        "小禾\n白页旧物社\n#007\n铜镜\n吴晗",
        "错误原因：",
        "远程归档状态发生变化。\n部分熟人连接正在重新整理。",
        "请稍后重试。"
      ],
      isError: true
    }
  ];

  // 回收站文件数据：这里保存被删除文件的预览内容与恢复状态。
  var recycleFiles = [
    {
      id: "chat-backup",
      name: "聊天备份_小禾_0315.txt",
      deletedTime: "2021/03/22 23:40",
      type: "文本文件",
      lines: [
        "[2021/03/15 22:08]",
        "",
        "小禾：你还记得我小时候那个项链盒吗？",
        "主角：WH0017 那个？",
        "小禾：你居然还记得。",
        "主角：你小时候非说那是宝石项链。",
        "小禾：别叫我小禾了，小时候你不是一直叫我吴晗吗。",
        "主角：那你现在不是不让别人叫这个名字了吗？",
        "小禾：别人不行，你可以。"
      ],
      restored: false
    },
    {
      id: "birthday",
      name: "生日提醒_吴晗.ics",
      deletedTime: "2021/03/22 23:40",
      type: "日历文件",
      lines: [
        "事件标题：吴晗生日",
        "",
        "日期：1998/11/10",
        "",
        "备注：",
        "04:07 北京",
        "每年提醒",
        "不要发到小禾工作号"
      ],
      memoTask: "用吴晗的生日信息排出八字",
      restored: false
    },
    {
      id: "childhood-photo",
      name: "童年照片说明.txt",
      deletedTime: "2021/03/22 23:40",
      type: "文本文件",
      lines: [
        "照片说明：",
        "",
        "地点：母亲的照相馆 / 饰品摊前",
        "人物：一群孩子",
        "备注：戴伪宝石项链的是吴晗",
        "",
        "补充记录：",
        "她说那不是玻璃，是她第一条宝石项链。"
      ],
      memoTask: "找到童年合照中戴伪宝石项链的孩子",
      restored: false
    },
    {
      id: "mirror-cache",
      name: "mirror_cache.tmp",
      deletedTime: "2021/03/22 23:40",
      type: "临时文件",
      lines: [
        "CACHE ERROR",
        "",
        "face_reflect = null",
        "source_face = missing",
        "observer_link = active",
        "archive_path = archive/007",
        "next_target = observer_008"
      ],
      memoTask: "observer_008 是谁？",
      anomaly: true,
      restored: false
    }
  ];

  // 打开微信窗口，同时隐藏右下角的新消息提醒。
  function openWechat() {
    if (!wechatWindow) return;

    wechatWindow.classList.add("show");
    wechatWindow.setAttribute("aria-hidden", "false");
    wechatMessage.classList.remove("show");
    bringToFront(wechatWindow);

    // 默认打开的就是小禾聊天，因此这里也推进“回复小禾消息”阶段。
    updateTodoStage("xiaoheReplied");
  }

  // 关闭微信窗口。
  function closeWechat() {
    if (!wechatWindow) return;

    wechatWindow.classList.remove("show");
    wechatWindow.setAttribute("aria-hidden", "true");
  }

  // 切换联系人及对应的聊天内容。
  function switchChat(contactName) {
    var chatMap = {
      xiaohe: xiaoheChat,
      achuan: achuanChat,
      senior: seniorChat,
      class: classChat,
      transfer: transferChat
    };
    var titleMap = {
      xiaohe: "远声传媒-小禾",
      achuan: "阿川",
      senior: "林师兄",
      class: "班级群",
      transfer: "文件传输助手"
    };

    Object.keys(chatMap).forEach(function (key) {
      if (chatMap[key]) {
        chatMap[key].classList.toggle("active", key === contactName);
      }
    });

    chatTitle.textContent = titleMap[contactName] || "微信";

    contactItems.forEach(function (item) {
      item.classList.toggle("active", item.dataset.contact === contactName);
    });

    // 玩家看到小禾消息后，待办从“回复小禾消息”推进到下一步。
    if (contactName === "xiaohe") {
      updateTodoStage("xiaoheReplied");
    }
  }

  // 打开、关闭下载文件夹窗口。
  function openFolder() {
    folderWindow.classList.add("show");
    folderWindow.setAttribute("aria-hidden", "false");
    bringToFront(folderWindow);
  }

  function closeFolder() {
    folderWindow.classList.remove("show");
    folderWindow.setAttribute("aria-hidden", "true");
  }

  // 打开密码框前，先清除上次输入与错误提示。
  function openPasswordWindow() {
    passwordInput.value = "";
    passwordError.textContent = "";
    passwordWindow.classList.add("show");
    passwordWindow.setAttribute("aria-hidden", "false");
    bringToFront(passwordWindow);
    passwordInput.focus();
  }

  function closePasswordWindow() {
    passwordWindow.classList.remove("show");
    passwordWindow.setAttribute("aria-hidden", "true");
  }

  // 密码不区分大小写；trim 会忽略输入前后的空格。
  function checkPassword() {
    var enteredPassword = passwordInput.value.trim().toUpperCase();

    if (enteredPassword === "WH0017") {
      filesExtracted = true;
      damagedMirrorFile.hidden = false;
      liveScreenshotFile.hidden = false;
      closePasswordWindow();
      showDesktopTip("解压完成。部分图片文件可能已损坏。");
    } else {
      passwordError.textContent = "密码错误。这个编号好像和某个旧盒子有关。";
    }
  }

  // 打开图片查看器，并依照文件名称填入不同的线索内容。
  function openImageViewer(imageType) {
    var isDamagedMirror = imageType === "mirror";

    imageViewerTitle.textContent = isDamagedMirror ? "铜镜照片_损坏.png" : "直播截图_0316.png";
    imagePlaceholder.textContent = isDamagedMirror ? "图片损坏：镜面区域无法显示" : "直播截图：画面卡顿于 00:17";
    imageDescription.textContent = isDamagedMirror ? "文件创建时间：2021/03/16 23:18" : "评论区截图中有人留言：她脸呢？";
    imageViewerWindow.classList.add("show");
    imageViewerWindow.setAttribute("aria-hidden", "false");
    bringToFront(imageViewerWindow);
  }

  function closeImageViewer() {
    imageViewerWindow.classList.remove("show");
    imageViewerWindow.setAttribute("aria-hidden", "true");
  }

  // 统一显示桌面下方的系统提示。
  function showDesktopTip(message) {
    desktopTip.textContent = message;
    desktopTip.classList.add("show");
    window.setTimeout(function () {
      desktopTip.classList.remove("show");
    }, 2600);
  }

  // 打开邮箱窗口，并默认显示收件箱第一封邮件。
  function openMail() {
    if (!mailWindow) return;

    mailWindow.classList.add("show");
    mailWindow.setAttribute("aria-hidden", "false");
    bringToFront(mailWindow);

    if (mailLoggedIn) {
      showMailInbox();
    } else {
      mailLoginPanel.hidden = false;
      mailLayout.hidden = true;
      mailLoginError.textContent = "";
      mailLoginInput.focus();
    }
  }

  function closeMail() {
    if (!mailWindow) return;

    mailWindow.classList.remove("show");
    mailWindow.setAttribute("aria-hidden", "true");
  }

  // 打开抖音主页窗口，玩家可从这里发现小禾主页邮箱。
  function openDouyin() {
    if (!douyinWindow) return;

    douyinWindow.classList.add("show");
    douyinWindow.setAttribute("aria-hidden", "false");
    bringToFront(douyinWindow);
  }

  function closeDouyin() {
    if (!douyinWindow) return;

    douyinWindow.classList.remove("show");
    douyinWindow.setAttribute("aria-hidden", "true");
  }

  // 点击新闻卡片：打开模拟浏览器里的新闻资讯页，引导玩家去看短视频主页。
  function openNewsFromWechat() {
    openBrowser();
    showNewsPage("xiaohe");
  }

  // 邮箱登录：玩家需要先从抖音主页找到邮箱地址，再用童年生日照片里的日期作为密码。
  function loginMail() {
    var enteredEmail = mailLoginInput.value.trim().toLowerCase();
    var enteredPassword = mailPasswordInput.value.trim();

    if (enteredEmail === discoveredProfileEmail && enteredPassword === "19981110") {
      mailLoggedIn = true;
      showMailInbox();
      showDesktopTip("已同步 " + mailMessages.length + " 封邮件。");
    } else {
      mailLoginError.textContent = "账号或密码错误。";
    }
  }

  // 玩家尝试回复小禾时，只显示“发送失败”，强化“对方关系已被清理”的感觉。
  function sendWechatReply() {
    if (!wechatSendError) return;
    var messageText = wechatReplyInput.value.trim();

    if (!messageText) {
      wechatReplyInput.focus();
      return;
    }

    // 如果之前发过失败消息，先移除旧的演出，避免重复堆满聊天区。
    xiaoheChat.querySelectorAll(".failed-outgoing-message, .wechat-system-tip").forEach(function (node) {
      node.remove();
    });

    var failedMessage = document.createElement("div");
    failedMessage.className = "chat-message-row self failed-outgoing-message";
    failedMessage.innerHTML =
      '<span class="wechat-fail-mark" aria-label="发送失败">!</span>' +
      '<div class="chat-bubble self-bubble">' + escapeHtml(messageText) + '</div>';

    var systemTip = document.createElement("p");
    systemTip.className = "wechat-system-tip";
    systemTip.textContent = "消息已发出，但被对方拒收。你还不是对方好友，请先发送朋友验证请求。";

    xiaoheChat.insertBefore(failedMessage, wechatReplyInput.closest(".wechat-reply-box"));
    xiaoheChat.insertBefore(systemTip, wechatReplyInput.closest(".wechat-reply-box"));

    wechatSendError.textContent = "消息发送失败";
    wechatSendError.classList.add("show");
    wechatReplyInput.value = "";
    xiaoheChat.scrollTop = xiaoheChat.scrollHeight;
    updateTodoStage("xiaoheReplied");
  }

  function showMailInbox() {
    mailLoginPanel.hidden = true;
    mailLayout.hidden = false;
    renderMailList();
    showMailDetail(mailMessages[0].id);
  }

  // 渲染收件箱列表。
  function renderMailList() {
    if (!mailList) return;

    mailList.innerHTML = mailMessages.map(function (mail, index) {
      return (
        '<button class="mail-item' + (index === 0 ? " active" : "") + '" data-mail-id="' + mail.id + '">' +
          '<span class="mail-sender">' + mail.sender + '</span>' +
          '<strong>' + mail.subject + '</strong>' +
          '<time>' + mail.time + '</time>' +
        '</button>'
      );
    }).join("");

    mailList.querySelectorAll(".mail-item").forEach(function (button) {
      button.addEventListener("click", function () {
        showMailDetail(button.dataset.mailId);
      });
    });
  }

  // 点击邮件时，右侧切换详情内容。
  function showMailDetail(mailId) {
    var selectedMail = mailMessages.find(function (mail) {
      return mail.id === mailId;
    });

    if (!selectedMail || !mailDetail) return;

    mailList.querySelectorAll(".mail-item").forEach(function (button) {
      button.classList.toggle("active", button.dataset.mailId === mailId);
    });

    var bodyHtml = selectedMail.body.map(function (paragraph) {
      var html = paragraph.replace(/\n/g, "<br>");
      html = html.replace("5. 如直播过程中出现画面异常，请优先保存回放并暂停展示。", '<span class="faint-warning">5. 如直播过程中出现画面异常，请优先保存回放并暂停展示。</span>');
      return "<p>" + html + "</p>";
    }).join("");
    var attachmentHtml = selectedMail.attachment
      ? '<button class="mail-attachment" id="mailAttachmentButton">📎 ' + selectedMail.attachment + '</button><p class="mail-attachment-tip" id="mailAttachmentTip"></p>'
      : "";

    mailDetail.classList.toggle("mail-error", Boolean(selectedMail.isError));
    mailDetail.innerHTML =
      '<h2 class="mail-subject">' + selectedMail.subject + '</h2>' +
      '<div class="mail-meta">' +
        '<p><strong>发件人：</strong>' + selectedMail.sender + '</p>' +
        '<p><strong>收件人：</strong>' + selectedMail.receiver + '</p>' +
        '<p><strong>时间：</strong>' + selectedMail.time + '</p>' +
      '</div>' +
      '<div class="mail-body">' + bodyHtml + '</div>' +
      attachmentHtml;

    if (selectedMail.attachment) {
      document.getElementById("mailAttachmentButton").addEventListener("click", function () {
        document.getElementById("mailAttachmentTip").innerHTML =
          '<strong>合作商品清单</strong><br>' +
          '素材箱数：1<br>' +
          '素材件数：7<br><br>' +
          '旧相框<br>铜制香插<br>旧怀表<br>木质首饰盒<br>复古摆件<br>仿古铜镜 BY-AC-MR-0719<br>其他整理素材';
      });
    }

    if (selectedMail.todoStage) {
      updateTodoStage(selectedMail.todoStage);
    } else if (selectedMail.memoTask) {
      updateMemoTask(selectedMail.memoTask);
    }
  }

  // 备忘录联动：避免重复添加同一条任务。没有便签时至少输出到控制台。
  function updateMemoTask(text) {
    var fullText = "□ " + text;

    if (!memoTaskList) {
      console.log("备忘录新增：" + text);
      return;
    }

    var existingTasks = Array.from(memoTaskList.querySelectorAll("li")).map(function (item) {
      return item.textContent.trim();
    });

    if (existingTasks.indexOf(fullText) === -1) {
      var taskItem = document.createElement("li");
      taskItem.textContent = fullText;
      memoTaskList.appendChild(taskItem);
      console.log("备忘录新增：" + text);
    }
  }

  // 根据主线阶段刷新今日待办，避免任务重复堆叠。
  function updateTodoStage(stageName) {
    try {
      localStorage.setItem("xinjinTodoStage", stageName);
    } catch (error) {
      console.log("待办进度暂时无法写入本地存储。");
    }

    if (!memoTaskList) return;

    var stages = {
      initial: [
        "✔ 论文格式修改",
        "✔ 下午跑步",
        "✔ 课程资料整理",
        "✔ 给导师回邮件",
        "□ 回复小禾消息",
        "□ 找到图片缓存",
        "□ 查找镜子来源"
      ],
      xiaoheReplied: [
        "✔ 论文格式修改",
        "✔ 下午跑步",
        "✔ 课程资料整理",
        "✔ 给导师回邮件",
        "✔ 回复小禾消息",
        "□ 找到图片缓存",
        "□ 查找镜子来源"
      ],
      "mail-clue": [
        "✔ 回复小禾消息",
        "✔ 找到图片缓存名",
        "✔ 查到商品编号：BY-AC-MR-0719",
        "□ 查询白页旧物社"
      ],
      service007: [
        "✔ 查询白页整理服务 #007",
        "□ 查 FACE-004",
        "□ 查 3号仓"
      ],
      face004Found: [
        "✔ 查询白页整理服务 #007",
        "✔ 查到 FACE-004",
        "□ 查 3号仓"
      ],
      face004: [
        "✔ 查到 FACE-004",
        "✔ 查到 3号仓",
        "□ 阻止归零交接",
        '<span class="memo-deadline">23:40 前。</span>'
      ],
      activation: [
        "✔ 查到 FACE-004",
        "✔ 查到 3号仓",
        "□ 找到核心留物",
        "□ 阻止归零交接",
        '<span class="memo-deadline">23:40 前。</span>'
      ],
      casePreview: [
        "✔ 查到 FACE-004",
        "✔ 查到 3号仓",
        "✔ 找到旧物盒 CASE-FACE004-01",
        "□ 判断核心留物",
        "□ 阻止归零交接",
        '<span class="memo-deadline">23:40 前。</span>'
      ],
      interrupted: [
        "✔ 查到 FACE-004",
        "✔ 查到 3号仓",
        "✔ 找到旧物盒 CASE-FACE004-01",
        "✔ 判断核心留物",
        "✔ 阻止归零交接",
        "✔ 查 OBS-008",
        '<span class="memo-deadline todo-complete-final">归零交接已暂停。<br>OBS-008 已生成。</span>'
      ]
    };

    var tasks = stages[stageName];
    if (!tasks) return;

    memoTaskList.innerHTML = tasks.map(function (task) {
      return "<li>" + task + "</li>";
    }).join("");
  }

  // 如果玩家在白页官网推进了后台线索，回到桌面时自动同步今日待办。
  function applyStoredTodoStage() {
    if (!memoTaskList) return;

    try {
      var storedStage = localStorage.getItem("xinjinTodoStage");
      if (storedStage) updateTodoStage(storedStage);
    } catch (error) {
      console.log("待办进度暂时无法读取。");
    }
  }

  // 第一章结局后回到桌面：播放小禾账号短暂恢复、照片标记与白狐伏笔。
  function startDesktopEndingEcho() {
    if (!desktopEndingOverlay || !endingWechatLines) return;

    var shouldPlay = false;
    try {
      shouldPlay = localStorage.getItem("xinjinDesktopEndingPending") === "true";
    } catch (error) {
      shouldPlay = false;
    }

    if (!shouldPlay) return;

    try {
      localStorage.setItem("xinjinDesktopEndingPending", "played");
    } catch (error) {
      console.log("桌面结局状态暂时无法写入。");
    }

    desktopEndingOverlay.hidden = false;
    endingWechatLines.innerHTML = "";

    var recoveryLines = [
      "小禾：别让他们整理那个盒子。",
      "小禾：还有……",
      "小禾：别再叫我小禾。",
      "小禾：你知道我是谁。",
      "连接中断。消息已无法继续接收。"
    ];

    recoveryLines.forEach(function (line, index) {
      window.setTimeout(function () {
        var item = document.createElement("p");
        item.textContent = line;
        endingWechatLines.appendChild(item);
      }, index * 900);
    });

    window.setTimeout(function () {
      if (!endingWechatContact) return;
      endingWechatContact.classList.add("name-flicker");
      endingWechatContact.textContent = "吴晗";
      window.setTimeout(function () {
        endingWechatContact.textContent = "远声传媒-小禾";
        endingWechatContact.classList.remove("name-flicker");
      }, 3000);
    }, 3600);

    window.setTimeout(function () {
      var birthdayCard = document.querySelector(".birthday-photo-card");
      if (birthdayCard) birthdayCard.classList.add("childhood-photo-highlight");
      if (endingPhotoNote) endingPhotoNote.hidden = false;
    }, 5800);

    window.setTimeout(function () {
      if (whitefoxEndingFlash) whitefoxEndingFlash.hidden = false;
    }, 7600);

    window.setTimeout(function () {
      desktopEndingOverlay.hidden = true;
    }, 12000);
  }

  // 打开、关闭回收站窗口。
  function openRecycleBin() {
    if (!recycleWindow) return;

    recycleWindow.classList.add("show");
    recycleWindow.setAttribute("aria-hidden", "false");
    renderRecycleList();
    showRecycleFile(recycleFiles[0].id);
    bringToFront(recycleWindow);
  }

  function closeRecycleBin() {
    if (!recycleWindow) return;

    recycleWindow.classList.remove("show");
    recycleWindow.setAttribute("aria-hidden", "true");
  }

  // 渲染回收站文件列表。
  function renderRecycleList() {
    if (!recycleFileList) return;

    recycleFileList.innerHTML =
      '<div class="recycle-list-header">' +
        '<span>文件名</span><span>删除时间</span><span>类型</span><span>操作</span>' +
      '</div>' +
      recycleFiles.map(function (file, index) {
        return (
          '<div class="recycle-file-item' + (index === 0 ? " active" : "") + (file.anomaly ? " recycle-anomaly" : "") + (file.restored ? " recycle-restored" : "") + '" data-recycle-id="' + file.id + '">' +
            '<button class="recycle-file-name" data-action="preview">' + file.name + '</button>' +
            '<span class="deleted-time">' + file.deletedTime + '</span>' +
            '<span>' + file.type + '</span>' +
            '<button class="recycle-restore-btn" data-action="restore" ' + (file.restored ? "disabled" : "") + '>' + (file.restored ? "已恢复" : "恢复") + '</button>' +
          '</div>'
        );
      }).join("");

    recycleFileList.querySelectorAll(".recycle-file-item").forEach(function (row) {
      row.addEventListener("click", function (event) {
        var fileId = row.dataset.recycleId;
        if (event.target.dataset.action === "restore") {
          restoreRecycleFile(fileId);
        } else {
          showRecycleFile(fileId);
        }
      });
    });
  }

  // 显示被删除文件的预览内容。
  function showRecycleFile(fileId) {
    var selectedFile = recycleFiles.find(function (file) {
      return file.id === fileId;
    });

    if (!selectedFile || !recycleFileDetail) return;

    recycleFileList.querySelectorAll(".recycle-file-item").forEach(function (row) {
      row.classList.toggle("active", row.dataset.recycleId === fileId);
    });

    recycleFileDetail.classList.toggle("recycle-anomaly", Boolean(selectedFile.anomaly));
    recycleFileDetail.innerHTML =
      '<h2>' + selectedFile.name + '</h2>' +
      '<p class="recycle-file-meta">删除时间：' + selectedFile.deletedTime + '　类型：' + selectedFile.type + '</p>' +
      '<pre>' + formatRecycleContent(selectedFile) + '</pre>';

    if (selectedFile.id === "chat-backup") {
      triggerNameRewriteEffect();
    }

    if (selectedFile.memoTask) {
      updateMemoTask(selectedFile.memoTask);
    }
  }

  // 为聊天备份中的“吴晗”加上短暂篡改效果。
  function formatRecycleContent(file) {
    var content = file.lines.join("\n");
    if (file.id === "chat-backup") {
      return content.replace(/吴晗/g, '<span class="name-glitch">吴晗</span>');
    }
    return content;
  }

  // 轻微异常：吴晗短暂闪成小禾，再恢复。
  function triggerNameRewriteEffect() {
    window.setTimeout(function () {
      document.querySelectorAll(".name-glitch").forEach(function (nameNode) {
        nameNode.classList.add("rewriting");
        nameNode.textContent = "小禾";
        window.setTimeout(function () {
          nameNode.textContent = "吴晗";
          nameNode.classList.remove("rewriting");
        }, 650);
      });
    }, 1000);
  }

  // 恢复文件：只改变状态，不永久删除，也不真的生成桌面文件。
  function restoreRecycleFile(fileId) {
    var selectedFile = recycleFiles.find(function (file) {
      return file.id === fileId;
    });

    if (!selectedFile || selectedFile.restored) return;

    selectedFile.restored = true;
    renderRecycleList();
    showRecycleFile(fileId);
    showDesktopTip("文件已恢复到桌面备份区。");
  }

  // 打开、关闭模拟浏览器。每次打开都回到本地搜索首页。
  function openBrowser() {
    browserWindow.classList.add("show");
    browserWindow.setAttribute("aria-hidden", "false");
    bringToFront(browserWindow);
    showSearchPage();
  }

  function closeBrowser() {
    browserWindow.classList.remove("show");
    browserWindow.setAttribute("aria-hidden", "true");
  }

  function showSearchPage() {
    addressBar.value = "https://search.local";
    chromeTab.textContent = "搜索 - Google";
    searchPage.classList.add("active");
    baiyePage.classList.remove("active");
    fakeResultPage.classList.remove("active");
    siteSearchInput.value = "";
    searchResults.innerHTML = "";
    renderSearchHistory();
    siteSearchInput.focus();
  }

  // 去掉空格并转成小写，方便判断玩家输入的关键词。
  function normalizeKeyword(keyword) {
    return keyword.replace(/\s/g, "").toLowerCase();
  }

  // 搜索记录保存在浏览器本地；如果本地存储不可用，就退回空数组。
  function loadBrowserSearchHistory() {
    try {
      return JSON.parse(localStorage.getItem("xinjinSearchHistory")) || [];
    } catch (error) {
      return [];
    }
  }

  // 保存搜索记录：去重、把新搜索放在最前面，并限制最多 8 条。
  function saveBrowserSearchHistory() {
    try {
      localStorage.setItem("xinjinSearchHistory", JSON.stringify(browserSearchHistory));
    } catch (error) {
      // 本地文件环境下偶尔可能禁止 localStorage；不影响游戏主流程。
      console.log("搜索记录暂时无法写入本地存储。");
    }
  }

  function addSearchHistory(keyword) {
    if (!keyword) return;

    browserSearchHistory = browserSearchHistory.filter(function (item) {
      return item !== keyword;
    });
    browserSearchHistory.unshift(keyword);
    browserSearchHistory = browserSearchHistory.slice(0, 8);
    saveBrowserSearchHistory();
    renderSearchHistory();
  }

  // 渲染搜索记录按钮；点击记录会填回搜索框并立刻搜索。
  function renderSearchHistory() {
    if (!searchHistory) return;

    if (browserSearchHistory.length === 0) {
      searchHistory.innerHTML = "";
      return;
    }

    searchHistory.innerHTML =
      '<span>最近搜索</span>' +
      browserSearchHistory.map(function (item) {
        return '<button type="button" class="search-history-item" data-keyword="' + escapeHtml(item) + '">' + escapeHtml(item) + '</button>';
      }).join("");

    searchHistory.querySelectorAll(".search-history-item").forEach(function (button) {
      button.addEventListener("click", function () {
        siteSearchInput.value = button.dataset.keyword;
        searchSite();
      });
    });
  }

  // 简单模糊匹配：只要输入里包含这些关键词片段，就认为命中对应线索。
  function hasAnyKeyword(compactKeyword, keywordList) {
    return keywordList.some(function (word) {
      return compactKeyword.indexOf(normalizeKeyword(word)) !== -1;
    });
  }

  function hasAllKeywords(compactKeyword, keywordList) {
    return keywordList.every(function (word) {
      return compactKeyword.indexOf(normalizeKeyword(word)) !== -1;
    });
  }

  // 把玩家输入转成安全文本，避免搜索记录里的特殊字符影响 HTML 结构。
  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 在搜索页结果区域显示一条普通提示，不进入其他页面。
  function showSearchNotice(message) {
    searchResults.innerHTML = '<article class="search-notice-card">' + message + '</article>';
  }

  // 17/40：搜索“白页旧物社”后显示的搜索结果页。
  function showBaiyeSearchResults() {
    searchResults.innerHTML =
      '<p class="result-count">约 17 / 40 条结果与“白页旧物社”有关</p>' +
      '<article class="search-result-item">' +
        '<button class="search-result-link" id="openBaiyeOfficial">白页旧物社｜旧物整理与隐私清理服务</button>' +
        '<p>替你清理不想留下的痕迹。旧物整理、数字痕迹清理、无接触交接。</p>' +
      '</article>' +
      '<article class="search-result-item">' +
        '<button class="search-result-link" id="openArchiveSnapshot">已删除的历史快照：baiye-oldthings.local/archive/007</button>' +
        '<p>该快照来自旧版归档索引，当前访问状态异常。</p>' +
      '</article>' +
      '<article class="search-result-item">' +
        '<button class="search-result-link" type="button">白页旧物社 2021 年无接触交接说明</button>' +
        '<p>支持远程估价、匿名寄送与临时仓交接。公开说明未包含具体客户信息。</p>' +
      '</article>';

    document.getElementById("openBaiyeOfficial").addEventListener("click", function () {
      // 由玩家点击触发新标签页，避免被浏览器当成自动弹窗拦截。
      window.open("baiye.html", "_blank");
    });
    document.getElementById("openArchiveSnapshot").addEventListener("click", showArchive404);
  }

  // 14/40：新闻资讯页。不同关键词会显示不同信息层级。
  function showNewsPage(newsType) {
    var title = "城市晚报｜某传媒旗下女主播直播事故后停更";
    var intro = "";
    var identityNote = "";

    if (newsType === "0316") {
      intro = "<p>3 月 16 日晚，一名某传媒女主播在旧物盲盒直播中发生事故。公开转述显示，直播过程中出现铜镜，随后画面卡顿并中断，账号之后进入停更状态。</p>";
    } else if (newsType === "company") {
      intro = "<p>多名网友整理称，远声传媒旗下女主播曾在旧物盲盒直播中展示一面铜镜。直播随后异常中断，相关切片陆续被删除。</p>";
      identityNote = "<p>目前公开资料只能确认其所属机构为远声传媒，事故后相关账号进入停更状态。</p>";
    } else {
      intro = "<p>据多处公开信息交叉整理，小禾是远声传媒旗下主播。她在 3 月 16 日的一场旧物盲盒直播后停更，事故内容与一面铜镜有关。</p>";
      identityNote = "<p>有网友称，她的短视频主页仍保留商务联系邮箱。相关合作邮件可能仍同步在本机邮箱客户端中。</p>";
    }

    showFakeResultPage({
      title: title,
      url: "https://news.local/live-0316",
      body:
        '<div class="news-article-page">' +
          '<p class="fake-page-label">14 / 40 新闻资讯</p>' +
          '<h2>某传媒旗下女主播直播事故后停更，镜中疑似无脸画面引热议</h2>' +
          '<p class="news-meta">城市晚报 · 网络热点　2021 年 3 月 22 日 06:42　记者：周宁</p>' +
          '<p>3 月 16 日晚，一名以收藏旧物、修复老物件为主要内容的女主播，在直播展示一面仿古铜镜时，引发大量网友讨论。部分观众表示，在直播画面中，主播本人能够正常出现在镜头内，但铜镜中的倒影却疑似无法显示其面部，引发关于设备故障、滤镜异常以及后期处理的猜测。</p>' +
          '<p>事件发生后，该主播已连续停更 5 天，直播回放、相关切片及涉事商品页面也陆续无法访问。虽然其账号主页仍显示正常状态，但截至目前，主播本人尚未再次公开露面，也未对直播事故作出明确回应。有网友因此质疑其可能已经失联，也有人认为账号后续内容并非本人操作。</p>' +
          '<p>目前，平台方面暂未给出进一步说明，相关情况仍待确认。</p>' +
          intro +
          identityNote +
          '<div class="blur-live-shot">直播截图已压缩，画面模糊。</div>' +
          '<p class="shot-caption">画面中疑似出现一面旧铜镜，评论区有人留言：“她脸呢？”</p>' +
          '<div class="news-comments">' +
            '<p><strong>旧城区收音机：</strong>我直播时看的时候不是这样的。刚开始只是有点模糊，后来镜子里的脸越来越淡。</p>' +
            '<p><strong>今天也在整理旧物：</strong>有没有人注意到镜子背面？我暂停的时候看到好像刻着字。</p>' +
            '<p><strong>南桥路口：</strong>回放和直播不一样，回放里脸更空。</p>' +
            '<p><strong>夜行镜：</strong>有人截到镜子里有一张白色动物脸，我看着像狐狸。</p>' +
            '<p><strong>旧城区收音机：</strong>别吓人，就是反光吧。</p>' +
          '</div>' +
        '</div>'
    });
  }

  // 点击白页搜索结果中的历史快照，只能看到 404，不能直接进入隐藏档案。
  function showArchive404() {
    showFakeResultPage({
      title: "404 Not Found",
      url: "https://baiye-oldthings.local/archive/007",
      body:
        '<div class="not-found-page">' +
          '<h2>404 Not Found</h2>' +
          '<p>该归档记录不支持直接访问。</p>' +
          '<p>请通过服务查询入口确认归档路径。</p>' +
        '</div>'
    });
  }

  // 搜索本地模拟网页。注意：archive/007 在普通搜索页不会进入档案。
  function searchSite() {
    var keyword = siteSearchInput.value.trim();
    var compactKeyword = normalizeKeyword(keyword);

    if (!keyword) {
      showSearchNotice("请输入关键词。");
      return;
    }

    addSearchHistory(keyword);

    if (compactKeyword.indexOf("archive/007") !== -1 || compactKeyword.indexOf("archive007") !== -1) {
      showSearchNotice("该归档记录不支持直接访问，请通过服务查询入口确认归档路径。");
    } else if (compactKeyword.indexOf("face-004") !== -1 || compactKeyword.indexOf("face004") !== -1) {
      showSearchNotice("未找到公开结果 / 权限不足。");
    } else if (compactKeyword.indexOf("吴晗") !== -1 && compactKeyword.indexOf("小禾真名") === -1) {
      showSearchNotice("搜索结果多为同名用户、旧论坛发言与无关通讯录碎片，未发现与直播事故相关的公开信息。");
    } else if (hasAllKeywords(compactKeyword, ["小禾", "真名"])) {
      showSearchNotice("多个营销号内容互相矛盾，无法确认真实姓名。请勿传播未经证实的个人信息。");
    } else if (hasAnyKeyword(compactKeyword, ["白页旧物社", "白页", "白页官网", "旧物社", "baiye"])) {
      showBaiyeSearchResults();
    } else if (hasAllKeywords(compactKeyword, ["远声", "小禾"]) || hasAllKeywords(compactKeyword, ["小禾", "直播"]) || hasAllKeywords(compactKeyword, ["小禾", "事故"])) {
      showNewsPage("xiaohe");
    } else if (hasAllKeywords(compactKeyword, ["远声", "女主播"]) || hasAllKeywords(compactKeyword, ["远声", "铜镜"]) || hasAllKeywords(compactKeyword, ["女主播", "铜镜"])) {
      showNewsPage("company");
    } else if (hasAllKeywords(compactKeyword, ["0316", "事故"]) || hasAllKeywords(compactKeyword, ["0316", "直播"])) {
      showNewsPage("0316");
    } else {
      searchResults.innerHTML = '<p class="no-results">未找到相关结果。<br>你可能需要更准确的关键词。</p>';
    }
  }

  // 在同一个浏览器窗口内显示白页旧物社官网。
  function showBaiyeSite() {
    addressBar.value = "https://baiye-oldthings.local";
    chromeTab.textContent = "白页旧物社";
    searchPage.classList.remove("active");
    baiyePage.classList.add("active");
    fakeResultPage.classList.remove("active");
    showBaiyeSection("home");
    caseQueryInput.value = "";
    caseResult.innerHTML = "";
  }

  // 白页官网内部切换：home 是官网首页，query 是服务查询，archive 是隐藏档案。
  function showBaiyeSection(sectionName) {
    baiyeHomeSection.classList.toggle("active", sectionName === "home");
    baiyeQuerySection.classList.toggle("active", sectionName === "query");
    baiyeArchiveSection.classList.toggle("active", sectionName === "archive");

    baiyeNavLinks.forEach(function (link) {
      var isHomeButton = sectionName === "home" && link.textContent === "首页";
      var isQueryButton = sectionName === "query" && link.dataset.baiyeSection === "query";
      link.classList.toggle("active", isHomeButton || isQueryButton);
    });

    if (sectionName === "home") {
      addressBar.value = "https://baiye-oldthings.local";
      chromeTab.textContent = "白页旧物社";
    } else if (sectionName === "query") {
      addressBar.value = "https://baiye-oldthings.local/service-query";
      chromeTab.textContent = "白页旧物社 - 服务查询";
      caseQueryInput.focus();
    } else if (sectionName === "archive") {
      addressBar.value = "https://baiye-oldthings.local/archive/007";
      chromeTab.textContent = "白页整理服务 #007";
      archiveMoreInfo.hidden = true;
    }
  }

  // 显示假资料页，给搜索结果增加可探索但未必可靠的信息。
  function showFakeResultPage(entry) {
    addressBar.value = entry.url;
    chromeTab.textContent = entry.title;
    searchPage.classList.remove("active");
    baiyePage.classList.remove("active");
    fakeResultPage.classList.add("active");
    fakePageTitle.textContent = entry.title;
    fakePageBody.innerHTML = entry.body;
  }

  // 20/40 服务查询页规则：只有在这里输入 archive/007 才能进入隐藏档案。
  function queryCase() {
    var query = normalizeKeyword(caseQueryInput.value.trim());

    if (query === "007") {
      caseResult.innerHTML = '<p class="case-not-found">请输入完整服务编号。</p>';
    } else if (query === "#007") {
      updateTodoStage("service007");
      caseResult.innerHTML =
        '<div class="case-result-card">' +
          '记录已归档。<br>' +
          '<span class="weak-hint">已归档服务请使用归档路径查询。路径格式：archive/[服务编号]。</span>' +
        '</div>';
    } else if (query === "archive/007") {
      caseResult.innerHTML = "";
      showBaiyeSection("archive");
    } else if (query === "face-004") {
      caseResult.innerHTML = '<p class="case-not-found">权限不足。</p>';
    } else {
      caseResult.innerHTML = '<p class="case-not-found">未找到公开案例。请确认编号。</p>';
    }
  }

  // 真实官网 baiye-query.html 的查询规则，与游戏内规则保持一致。
  function queryRealBaiyeService() {
    var query = normalizeKeyword(realQueryInput.value.trim());

    if (query === "007") {
      realQueryResult.innerHTML = '<p class="real-query-message">请输入完整服务编号。</p>';
    } else if (query === "#007") {
      realQueryResult.innerHTML =
        '<div class="real-query-message">' +
          '记录已归档。' +
          '<span>已归档服务请使用归档路径查询。路径格式：archive/[服务编号]</span>' +
        '</div>';
    } else if (query === "archive/007") {
      window.location.href = "baiye-archive-007.html";
    } else if (query === "face-004") {
      realQueryResult.innerHTML = '<p class="real-query-message">权限不足。</p>';
    } else {
      realQueryResult.innerHTML = '<p class="real-query-message">未找到公开案例。请确认编号。</p>';
    }
  }

  // 白页官网首页的旧物/商品检索：必须输入邮箱附件里的商品编号，才会出现仿古铜镜。
  function searchBaiyeObject() {
    var keyword = normalizeKeyword(baiyeObjectSearchInput.value.trim());
    var matchedMirror = keyword === "by-ac-mr-0719";

    if (matchedMirror) {
      baiyeObjectResult.innerHTML =
        '<article class="baiye-object-card">' +
          '<strong>检索结果：仿古铜镜</strong>' +
          '<p>商品编号：<b>BY-AC-MR-0719</b></p>' +
          '<p>状态：已归档</p>' +
          '<p>关联服务：<b>#007</b></p>' +
          '<p>说明：仿古铜镜，旧物直播合作素材之一。建议最后展示。不建议长时间正面照人。</p>' +
          '<a href="baiye-query.html">查看归档服务</a>' +
        '</article>';
    } else {
      baiyeObjectResult.innerHTML = '<p class="real-query-message">未找到相关旧物。该旧物可能已下架或归档。</p>';
    }
  }

  // 白页员工后台 v1：输入口令后在当前官网内开启临时员工权限。
  function searchStaffLog() {
    var rawKeyword = staffLogInput.value.trim();
    var keyword = normalizeKeyword(rawKeyword);

    if (!keyword) {
      staffLogResult.textContent = "请输入内部口令。";
    } else if (rawKeyword === "我想有脸") {
      enableTemporaryStaffAccess();
    } else {
      staffLogResult.textContent = "口令错误。";
    }
  }

  // 开启临时员工权限：显示权限徽章、隐藏导航和员工后台面板。
  function enableTemporaryStaffAccess() {
    if (!staffPanel) return;

    staffLogPanel.hidden = true;
    staffLogInput.value = "";
    staffLogResult.textContent = "";
    staffPermissionBadge.hidden = false;
    staffHiddenNavButtons.forEach(function (button) {
      button.hidden = false;
    });
    staffPanel.hidden = false;
    showStaffSection("storage");
    staffPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // 员工后台内部切换：只切换 staffPanel 内部内容，不影响白页官网外框。
  function showStaffSection(sectionName) {
    if (!staffPanel) return;

    storageSystemSection.hidden = sectionName !== "storage";
    faceMaintenanceSection.hidden = sectionName !== "face";
    takeFaceExplainSection.hidden = sectionName !== "explain";
    activationSection.hidden = sectionName !== "activation";
    observeRecordSection.hidden = sectionName !== "observe";

    staffHiddenNavButtons.forEach(function (button) {
      button.classList.toggle("active", button.dataset.staffSection === sectionName);
    });

    if (sectionName === "explain") {
      startTakeFaceExplainLoad();
    }

    if (sectionName === "activation") {
      updateTodoStage("activation");
    }

    staffPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // 取面说明进入时先短暂黑屏，模拟内部非公开记录载入。
  function startTakeFaceExplainLoad() {
    if (!takeFaceLoading || !takeFaceContent) return;

    takeFaceLoading.hidden = false;
    takeFaceContent.hidden = true;

    window.setTimeout(function () {
      takeFaceLoading.hidden = true;
      takeFaceContent.hidden = false;
    }, 500);
  }

  function showFaceSummary() {
    if (!faceSummaryPanel) return;

    faceSummaryPanel.hidden = false;
    updateTodoStage("face004Found");
  }

  function showWarehouseDetail() {
    if (!warehouseDetailPanel) return;

    warehouseDetailPanel.hidden = false;
    updateTodoStage("face004");
  }

  function showCasePreview() {
    if (!casePreviewPanel) return;

    casePreviewPanel.hidden = false;
    updateTodoStage("casePreview");
  }

  // 玩家点击旧物卡片后，先弹出确认框，避免误触。
  function openCoreItemConfirm(button) {
    pendingCoreItem = {
      name: button.dataset.coreItem,
      correct: button.dataset.correct === "true"
    };
    coreConfirmItemName.textContent = pendingCoreItem.name;
    coreConfirmModal.hidden = false;
  }

  function closeCoreItemConfirm() {
    coreConfirmModal.hidden = true;
    pendingCoreItem = null;
  }

  function confirmCoreItemSelection() {
    if (!pendingCoreItem || !coreVerificationPanel) return;

    coreConfirmModal.hidden = true;
    coreVerificationPanel.hidden = false;

    if (!pendingCoreItem.correct) {
      coreVerificationPanel.innerHTML =
        '<div class="core-verification-failed">' +
          '<p>核心留物验证失败。</p>' +
          '<p>该旧物无法稳定原寄主身份。</p>' +
          '<p>归零交接仍在等待。</p>' +
        '</div>';
      pendingCoreItem = null;
      return;
    }

    runCorrectCoreItemSequence();
  }

  // 正确选择“伪宝石项链”后的验证流程。
  function runCorrectCoreItemSequence() {
    var verifyLines = [
      "核心留物验证中……",
      "身份锚点检测：通过",
      "童年记忆残留：强",
      "真实姓名残留：吴晗",
      "FACE-004 启用条件：不满足",
      "归零交接：中断中"
    ];

    coreVerificationPanel.innerHTML = '<div class="core-verification-success"></div>';
    var successBox = coreVerificationPanel.querySelector(".core-verification-success");

    verifyLines.forEach(function (line, index) {
      window.setTimeout(function () {
        var item = document.createElement("p");
        item.textContent = line;
        successBox.appendChild(item);
      }, index * 520);
    });

    window.setTimeout(function () {
      interruptFace004();
      showWhitefoxIntervention();
      showChapterOneEnding();
    }, verifyLines.length * 520 + 300);
  }

  // 更新 FACE-004 摘要与启用条件，让系统状态承认“启用中断”。
  function interruptFace004() {
    gameState.coreItemSelected = true;
    gameState.correctCoreItem = true;
    gameState.face004Interrupted = true;

    if (activationOldItemStatus) activationOldItemStatus.textContent = "核心留物已确认";
    if (activationMaskStatus) activationMaskStatus.textContent = "已确认";
    if (activationHandoverStatus) activationHandoverStatus.textContent = "暂停";
    if (activationFinalHint) activationFinalHint.textContent = "FACE-004 启用条件不满足。";
    if (activationMaskHint) activationMaskHint.textContent = "遮面者干扰已确认。";

    if (faceSummaryCoreItem) faceSummaryCoreItem.textContent = "伪宝石项链";
    if (faceSummaryStatus) faceSummaryStatus.textContent = "启用中断 / 待复核";
    if (faceSummaryHandoverTime) faceSummaryHandoverTime.textContent = "23:40 已暂停";
    if (faceSummaryHint) faceSummaryHint.textContent = "核心留物已确认。归零交接暂时中断。";
    if (obs008LatestAction) obs008LatestAction.textContent = "阻止 FACE-004 启用";
    if (obs008RiskNote) obs008RiskNote.textContent = "命主反应待确认";

    document.body.classList.add("face-status-interrupted");
    try {
      localStorage.setItem("xinjinChapterOneEndingReady", "true");
      localStorage.setItem("xinjinDesktopEndingPending", "true");
    } catch (error) {
      console.log("第一章结局状态暂时无法写入。");
    }
    updateTodoStage("interrupted");
  }

  // 第一章收束面板：只有 FACE-004 中断后才允许出现。
  function showChapterOneEnding() {
    if (!chapterEndingPanel || !gameState.face004Interrupted) return;

    window.setTimeout(function () {
      chapterEndingPanel.hidden = false;
    }, 2300);
  }

  // 点击“继续”后逐行显示 OBS-008 同步异常，并自动跳转正式恐怖结尾。
  function startObsSyncEnding() {
    if (!obsSyncPanel || !obsSyncLines) return;

    chapterEndingPanel.hidden = true;
    obsSyncPanel.hidden = false;
    obsSyncLines.innerHTML = "";
    if (obsSyncTransfer) obsSyncTransfer.hidden = true;

    var syncLines = [
      "白页归档系统同步中……",
      "FACE-004 状态：启用中断 / 待复核",
      "遮面者干扰：持续存在",
      "熟人连接：未断开",
      "外部查询者：仍在线",
      "正在生成观测记录……",
      "OBS-008 已生成。",
      "对象：W",
      "最近操作：阻止 FACE-004 启用",
      "风险备注：命主反应待确认"
    ];

    syncLines.forEach(function (line, index) {
      window.setTimeout(function () {
        var item = document.createElement("p");
        item.textContent = line;
        obsSyncLines.appendChild(item);
      }, index * 430);
    });

    window.setTimeout(function () {
      if (obsSyncTransfer) obsSyncTransfer.hidden = false;
      obsSyncPanel.classList.add("sync-flash");
    }, syncLines.length * 430 + 400);

    window.setTimeout(function () {
      window.location.href = "baiye-horror-test.html?from=ending";
    }, syncLines.length * 430 + 2400);
  }

  // 白狐第一次明确介入：克制的白色闪屏与系统文字。
  function showWhitefoxIntervention() {
    if (!whitefoxIntervention) return;

    whitefoxIntervention.hidden = false;
    whitefoxIntervention.classList.add("whitefox-flash");
    window.setTimeout(function () {
      whitefoxIntervention.classList.remove("whitefox-flash");
    }, 450);

    // 白狐介入只短暂出现，随后让出画面给第一章收束面板。
    window.setTimeout(function () {
      whitefoxIntervention.hidden = true;
    }, 1800);
  }

  function showFace004Tooltip() {
    if (!face004Tooltip) return;

    face004Tooltip.hidden = false;
    updateTodoStage("face004");
  }

  function showInternalLog() {
    if (internalLogModal) internalLogModal.hidden = false;
  }

  // 恐怖元素测试页：生成文字墙，并分批让文字产生错乱变化。
  function startHorrorTextTest() {
    if (!horrorTextWall) return;

    var params = new URLSearchParams(window.location.search);
    var fromEnding = params.get("from") === "ending";

    if (fromEnding) {
      document.body.classList.add("ending-horror-mode");
      if (horrorBackLink) {
        horrorBackLink.textContent = "返回调查桌面";
        horrorBackLink.href = "desktop.html";
      }
    }

    var wordCount = Math.ceil((window.innerWidth * window.innerHeight) / 620);
    var words = [];
    var middleTexts = ["我是吴□", "我是□□", "我是吴晗"];
    var observerTexts = ["查询者 008", "FACE008", "观测者 008"];
    var unstableTexts = ["请勿离开", "观测者 008"];
    var lastSignalTime = Date.now();
    var signalLineElement = null;
    var inputLineElement = null;
    var unstableHintElement = null;
    var stableMarked = false;
    var unstableMarked = false;

    // 生成文字墙：先铺满“我是吴晗”，每个 span 都有一点不同的动画延迟。
    for (var i = 0; i < wordCount; i += 1) {
      var word = document.createElement("span");
      word.className = "horror-word";
      word.textContent = "我是吴晗";
      word.style.animationDelay = (Math.random() * 1.6).toFixed(2) + "s";
      word.style.transform = "translate(" + (Math.random() * 4 - 2).toFixed(1) + "px," + (Math.random() * 4 - 2).toFixed(1) + "px)";
      horrorTextWall.appendChild(word);
      words.push(word);
    }

    // 工具函数：让文字墙短暂闪一下，模拟后台捕获瞬间。
    function flashWall() {
      document.body.classList.add("capture-flash");
      window.setTimeout(function () {
        document.body.classList.remove("capture-flash");
      }, 520);
    }

    // 读取浏览器允许的非敏感环境信息：不请求权限，不读取文件、定位、摄像头、麦克风等。
    function getSafeEnvironmentInfo() {
      var userAgent = navigator.userAgent || "UNKNOWN";
      var shortUserAgent = userAgent.length > 80 ? userAgent.slice(0, 80) + "..." : userAgent;
      var timeZone = "UNKNOWN";

      try {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UNKNOWN";
      } catch (error) {
        timeZone = "UNKNOWN";
      }

      return {
        userAgent: shortUserAgent,
        platform: navigator.platform || "UNKNOWN",
        language: navigator.language || "UNKNOWN",
        screenSize: screen.width + " × " + screen.height,
        windowSize: window.innerWidth + " × " + window.innerHeight,
        timeZone: formatTimeZoneToChinese(timeZone),
        localTime: new Date().toLocaleString(),
        online: navigator.onLine ? "ONLINE" : "OFFLINE"
      };
    }

    // 将浏览器时区转换成更像“地区标记”的中文显示，不展示 Asia/Tokyo 这种技术字符串。
    function formatTimeZoneToChinese(timeZone) {
      var timeZoneMap = {
        "Asia/Tokyo": "东京",
        "Asia/Shanghai": "上海",
        "Asia/Hong_Kong": "香港",
        "Asia/Taipei": "台北",
        "Asia/Seoul": "首尔",
        "Asia/Singapore": "新加坡",
        "America/New_York": "纽约",
        "America/Los_Angeles": "洛杉矶",
        "America/Chicago": "芝加哥",
        "America/Toronto": "多伦多",
        "Europe/London": "伦敦",
        "Europe/Paris": "巴黎",
        "Europe/Berlin": "柏林",
        "Australia/Sydney": "悉尼"
      };

      if (timeZoneMap[timeZone]) return timeZoneMap[timeZone];
      if (timeZone && timeZone.indexOf("/") !== -1) {
        return timeZone.split("/").pop().replace(/_/g, " ");
      }
      return timeZone || "UNKNOWN";
    }

    // 在中央日志面板中逐行打印文字。
    function addLogLine(text, className) {
      var line = document.createElement("p");
      line.className = "horror-log-line" + (className ? " " + className : "");
      line.textContent = text;
      horrorLogLines.appendChild(line);
      return line;
    }

    // 更新某一行日志，如果还没有对应行就创建。
    function updateOrCreateLogLine(currentLine, text, className) {
      if (!currentLine) return addLogLine(text, className);
      currentLine.textContent = text;
      if (className) currentLine.className = "horror-log-line " + className;
      return currentLine;
    }

    // 随机挑选少量文字进行替换，用于和日志状态联动。
    function markSomeWords(textOptions, chance, className) {
      words.forEach(function (word) {
        if (Math.random() < chance) {
          word.textContent = textOptions[Math.floor(Math.random() * textOptions.length)];
          word.classList.add(className);
        }
      });
    }

    // 扭曲阶段会把部分背景文字污染成乱码或系统指令。
    function corruptSomeWords(chance) {
      markSomeWords(["□□□", "采集中", "观测者008", "FACE008", "请勿离开"], chance, "observer-mark");
    }

    // 中央日志按时间逐行打印，制造“真实环境读取”的演出感。
    function startCaptureLogTimeline() {
      var info = getSafeEnvironmentInfo();
      if (horrorFinalRegion) {
        horrorFinalRegion.textContent = info.timeZone;
      }
      var logSteps = [
        { time: 500, title: "[BAIYE_CAPTURE_LOG]" },
        { time: 1000, text: "正在建立查询者连接……" },
        { time: 1500, text: "查询者连接已建立。" },
        { time: 2000, text: "已采集查询者信息，编号 008", flash: true, className: "warning" },
        { time: 2250, text: "查询者编号：008", className: "dim" },
        { time: 2500, text: "浏览器环境：" + info.userAgent },
        { time: 3000, text: "系统平台：" + info.platform },
        { time: 3500, text: "系统语言：" + info.language },
        { time: 4000, text: "屏幕尺寸：" + info.screenSize },
        { time: 4500, text: "窗口尺寸：" + info.windowSize },
        { time: 5000, text: "时区：" + info.timeZone },
        { time: 5250, text: "观测者连接：未断开", className: "warning" },
        { time: 5500, text: "本地时间：" + info.localTime },
        { time: 5750, text: "熟人连接残留：检测中", className: "dim" },
        { time: 6000, text: "连接状态：" + info.online },
        { time: 6250, text: "当前对象：屏幕前查询者", className: "warning" },
        { time: 6500, text: "请保持手在鼠标上，或将手指停留在键盘上，以维持信号稳定。", flash: true },
        { time: 6750, text: "请保持接触设备", className: "dim" },
        { time: 7000, signal: true }
      ];

      if (fromEnding) {
        logSteps = logSteps.concat([
          { time: 7250, text: "FACE-004 启用中断。", className: "warning" },
          { time: 7500, text: "遮面者干扰未排除。", className: "warning" },
          { time: 7750, text: "核心留物：伪宝石项链。", className: "warning" },
          { time: 8000, text: "原寄主未归零。", className: "warning" },
          { time: 8300, text: "外部查询者连接未断开。", className: "warning" },
          { time: 8550, text: "熟人连接残留：W。", className: "warning" },
          { time: 8800, text: "OBS-008 接入中。", className: "warning" },
          { time: 9100, text: "观测者 008：已记录。", className: "warning" },
          { time: 9350, text: "命主反应：待确认。", className: "warning" }
        ]);
      }

      horrorCaptureLog.classList.add("show");

      logSteps.forEach(function (step) {
        window.setTimeout(function () {
          if (step.title) {
            horrorLogTitle.textContent = step.title;
          }

          if (step.text) {
            addLogLine(step.text, step.className);
          }

          if (step.flash) {
            flashWall();
          }

          if (step.signal) {
            inputLineElement = addLogLine("输入信号：等待输入", "dim");
            signalLineElement = addLogLine("信号状态：等待稳定", "warning");
            unstableHintElement = addLogLine("请勿离开查询界面。", "dim");
          }
        }, step.time);
      });
    }

    // 监听鼠标和键盘：只根据当前页面内的操作更新“稳定/不稳定”，不请求权限、不读取隐私。
    function markSignalStable(event) {
      lastSignalTime = Date.now();
      if (signalLineElement) {
        var inputType = event.type === "keydown" ? "键盘已检测" : "鼠标已检测";
        inputLineElement = updateOrCreateLogLine(inputLineElement, "输入信号：" + inputType);
        signalLineElement = updateOrCreateLogLine(signalLineElement, "信号状态：稳定");

        if (!stableMarked) {
          stableMarked = true;
          markSomeWords(["观测者 008"], 0.06, "observer-mark");
          flashWall();
        }
      }
    }

    // 如果 5 秒没有移动鼠标或按键，就显示不稳定提示。
    function watchSignalStatus() {
      if (!signalLineElement) return;
      if (Date.now() - lastSignalTime > 5000) {
        signalLineElement = updateOrCreateLogLine(signalLineElement, "信号状态：不稳定", "warning");
        unstableHintElement = updateOrCreateLogLine(unstableHintElement, "请勿离开查询界面。", "warning");

        if (!unstableMarked) {
          unstableMarked = true;
          markSomeWords(unstableTexts, 0.06, "observer-mark");
          flashWall();
        }
      }
    }

    window.addEventListener("mousemove", markSignalStable);
    window.addEventListener("keydown", markSignalStable);
    window.setInterval(watchSignalStatus, 1000);

    // 2 秒后开始分阶段替换文字；每个文字的变化时间不同，制造不同步的错乱感。
    window.setTimeout(function () {
      words.forEach(function (word) {
        var firstDelay = Math.random() * 4200;
        var secondDelay = firstDelay + 900 + Math.random() * 1600;
        var finalDelay = secondDelay + 900 + Math.random() * 1800;

        window.setTimeout(function () {
          word.textContent = middleTexts[Math.floor(Math.random() * middleTexts.length)];
        }, firstDelay);

        window.setTimeout(function () {
          word.textContent = "我是□□";
          word.classList.add("changed");
        }, secondDelay);

        window.setTimeout(function () {
          // 大部分文字最终变为“我是 FACE007”，少数保留残缺感。
          word.textContent = Math.random() > 0.08 ? "我是 FACE007" : "我是□□";
        }, finalDelay);
      });
    }, 2000);

    // 中央采集日志从页面打开后 0.5 秒开始逐行打印。
    startCaptureLogTimeline();

    // 8 秒后，让少量文字被标记为 008，制造“查询者也被记录”的感觉。
    window.setTimeout(function () {
      flashWall();
      words.forEach(function (word) {
        if (Math.random() < 0.1) {
          window.setTimeout(function () {
            word.textContent = observerTexts[Math.floor(Math.random() * observerTexts.length)];
            word.classList.add("observer-mark");
          }, Math.random() * 2800);
        }
      });
    }, 8000);

    // 8 秒后：轻微异常，页面开始放大、倾斜、扫描线增强。
    window.setTimeout(function () {
      document.body.classList.add("distortion-light");
      corruptSomeWords(0.05);
    }, 8000);

    // 11 秒后：扭曲加重，并追加采集进度日志。
    window.setTimeout(function () {
      document.body.classList.add("distortion-heavy");
      addLogLine("采集进度：73%", "warning");
      addLogLine("观测者连接固定中……", "warning");
      addLogLine("区域标记完成。", "dim");
      corruptSomeWords(0.1);
      flashWall();
    }, 11000);

    // 14 秒后：接近不可读，红色遮罩闪烁，追加 100% 和锁定日志。
    window.setTimeout(function () {
      document.body.classList.add("distortion-final");
      addLogLine("采集进度：100%", "warning");
      addLogLine("查询者 008 信息锁定。", "warning");
      corruptSomeWords(0.18);
      flashWall();
    }, 14000);

    // 16 秒后：显示最终大字，但保留右下角“返回官网”，不阻止退出。
    window.setTimeout(function () {
      document.body.classList.add("capture-complete");
      if (fromEnding && finalRecordPaused) {
        window.setTimeout(function () {
          finalRecordPaused.hidden = false;
        }, 5000);
      }
    }, 16000);
  }

  // 让最近打开或最近点击的窗口显示在最前面。
  function bringToFront(windowElement) {
    if (!windowElement) return;
    nextWindowZIndex += 1;
    windowElement.style.zIndex = nextWindowZIndex;
  }

  // 为一个窗口绑定标题栏拖动行为。
  function makeWindowDraggable(windowElement, handleElement) {
    if (!windowElement || !handleElement) return;

    handleElement.addEventListener("pointerdown", function (event) {
      // 点击输入框或关闭按钮时，保留它们原本的交互，不开始拖动。
      if (event.target.closest("button, input, textarea, a")) return;

      var windowRect = windowElement.getBoundingClientRect();
      var offsetX = event.clientX - windowRect.left;
      var offsetY = event.clientY - windowRect.top;
      bringToFront(windowElement);

      // 首次拖动时，将居中定位改为明确的左上角坐标。
      windowElement.style.left = windowRect.left + "px";
      windowElement.style.top = windowRect.top + "px";
      windowElement.style.transform = "none";
      handleElement.setPointerCapture(event.pointerId);

      function moveWindow(moveEvent) {
        var maxLeft = Math.max(0, window.innerWidth - windowRect.width);
        var maxTop = Math.max(0, window.innerHeight - windowRect.height);
        var newLeft = Math.min(maxLeft, Math.max(0, moveEvent.clientX - offsetX));
        var newTop = Math.min(maxTop, Math.max(0, moveEvent.clientY - offsetY));
        windowElement.style.left = newLeft + "px";
        windowElement.style.top = newTop + "px";
      }

      function stopDragging() {
        handleElement.removeEventListener("pointermove", moveWindow);
        handleElement.removeEventListener("pointerup", stopDragging);
        handleElement.removeEventListener("pointercancel", stopDragging);
      }

      handleElement.addEventListener("pointermove", moveWindow);
      handleElement.addEventListener("pointerup", stopDragging);
      handleElement.addEventListener("pointercancel", stopDragging);
    });

    // 即使点击内容区域，也把该窗口带到最前面。
    windowElement.addEventListener("pointerdown", function () {
      bringToFront(windowElement);
    });
  }

  // 只有 desktop.html 才有微信消息；延迟一点出现会更像系统通知。
  if (wechatMessage) {
    window.setTimeout(function () {
      wechatMessage.classList.add("show");
    }, 500);
  }

  // 点击右上角的 × 可以关闭微信消息。
  if (closeMessage) {
    closeMessage.addEventListener("click", function () {
      wechatMessage.classList.remove("show");
    });
  }

  // 点击整张新消息提醒（但不是 ×）也能进入微信窗口。
  if (wechatMessage) {
    wechatMessage.addEventListener("click", function (event) {
      if (event.target !== closeMessage) openWechat();
    });
  }

  if (wechatDesktopIcon) {
    wechatDesktopIcon.addEventListener("click", openWechat);
  }

  if (wechatCloseButton) {
    wechatCloseButton.addEventListener("click", closeWechat);
  }

  if (wechatNewsCard) {
    wechatNewsCard.addEventListener("click", openNewsFromWechat);
  }

  if (classNewsCard) {
    classNewsCard.addEventListener("click", openNewsFromWechat);
  }

  if (wechatSendButton) {
    wechatSendButton.addEventListener("click", sendWechatReply);
    wechatReplyInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendWechatReply();
      }
    });
  }

  // 抖音主页图标交互。
  if (douyinDesktopIcon) {
    douyinDesktopIcon.addEventListener("click", openDouyin);
    douyinCloseButton.addEventListener("click", closeDouyin);
    douyinWindow.addEventListener("pointerdown", function () {
      bringToFront(douyinWindow);
    });
  }

  if (profileEmailButton) {
    profileEmailButton.addEventListener("click", function () {
      if (mailLoginInput) {
        mailLoginInput.value = discoveredProfileEmail;
        showDesktopTip("主页邮箱已复制到邮箱登录框。");
      }
    });
  }

  // 邮箱图标交互。
  if (mailDesktopIcon) {
    mailDesktopIcon.addEventListener("click", openMail);
    mailCloseButton.addEventListener("click", closeMail);
    mailLoginButton.addEventListener("click", loginMail);
    mailLoginInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") loginMail();
    });
    mailPasswordInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") loginMail();
    });
    mailWindow.addEventListener("pointerdown", function () {
      bringToFront(mailWindow);
    });
  }

  // 回收站图标交互。
  if (recycleDesktopIcon) {
    recycleDesktopIcon.addEventListener("click", openRecycleBin);
    recycleCloseButton.addEventListener("click", closeRecycleBin);
    recycleWindow.addEventListener("pointerdown", function () {
      bringToFront(recycleWindow);
    });
  }

  contactItems.forEach(function (item) {
    item.addEventListener("click", function () {
      switchChat(item.dataset.contact);
    });
  });

  // 下载文件夹图标、文件夹窗口和压缩包的交互。
  // 判断图标是否存在，避免 index.html 载入同一份脚本时报错。
  if (downloadsDesktopIcon) {
    downloadsDesktopIcon.addEventListener("click", openFolder);
    folderCloseButton.addEventListener("click", closeFolder);
    mirrorZipFile.addEventListener("click", openPasswordWindow);
    passwordCloseButton.addEventListener("click", closePasswordWindow);
    passwordCancelButton.addEventListener("click", closePasswordWindow);
    passwordConfirmButton.addEventListener("click", checkPassword);

    // 按 Enter 键也可以确认密码，更接近常见电脑操作。
    passwordInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") checkPassword();
    });

    damagedMirrorFile.addEventListener("click", function () {
      if (filesExtracted) openImageViewer("mirror");
    });
    liveScreenshotFile.addEventListener("click", function () {
      if (filesExtracted) openImageViewer("live");
    });
    imageCacheInfoFile.addEventListener("click", function () {
      imageViewerTitle.textContent = "图片缓存说明.txt";
      imagePlaceholder.textContent = "图片缓存已被清理";
      imageDescription.textContent = "部分图片缓存已被清理。请尝试通过原始素材编号或合作方页面查询。";
      imageViewerWindow.classList.add("show");
      imageViewerWindow.setAttribute("aria-hidden", "false");
      bringToFront(imageViewerWindow);
      updateTodoStage("xiaoheReplied");
    });
    imageViewerCloseButton.addEventListener("click", closeImageViewer);
  }

  // 浏览器图标、站内搜索和官网案例查询。
  if (browserDesktopIcon) {
    browserDesktopIcon.addEventListener("click", openBrowser);
    browserCloseButton.addEventListener("click", closeBrowser);
    siteSearchButton.addEventListener("click", searchSite);
    caseQueryButton.addEventListener("click", queryCase);

    siteSearchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") searchSite();
    });
    caseQueryInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") queryCase();
    });
    backToSearchButton.addEventListener("click", function () {
      // 返回时保留原来的关键词与搜索结果，方便继续探索。
      addressBar.value = "https://search.local";
      chromeTab.textContent = "搜索 - Google";
      fakeResultPage.classList.remove("active");
      searchPage.classList.add("active");
    });

    // 白页官网顶部导航：只有“服务查询”会进入查询页，其余先回到官网首页。
    baiyeNavLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        showBaiyeSection(link.dataset.baiyeSection);
      });
    });

    // 隐藏档案的第二层信息，需要玩家主动点击才出现。
    archiveMoreButton.addEventListener("click", function () {
      archiveMoreInfo.hidden = false;
      updateTodoStage("face004");
    });

    // Chrome 顶部按钮的简单模拟：后退回搜索页，刷新保持当前页，前进暂未开放。
    chromeNavButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        if (index === 0 && !searchPage.classList.contains("active")) {
          showSearchPage();
          return;
        }

        if (index === 2) {
          showDesktopTip("页面已重新载入。");
          return;
        }

        showDesktopTip("没有更多浏览记录。");
      });
    });
  }

  // 所有已完成的电脑窗口都使用相同的拖动与置顶规则。
  makeWindowDraggable(wechatWindow, document.querySelector(".wechat-window .chat-header"));
  makeWindowDraggable(folderWindow, document.querySelector(".folder-window .window-header"));
  makeWindowDraggable(passwordWindow, document.querySelector(".password-window .window-header"));
  makeWindowDraggable(imageViewerWindow, document.querySelector(".image-viewer-window .window-header"));
  makeWindowDraggable(browserWindow, document.querySelector(".browser-window .browser-topbar"));
  makeWindowDraggable(douyinWindow, document.querySelector(".douyin-window .window-header"));
  makeWindowDraggable(mailWindow, document.querySelector(".mail-window .window-header"));
  makeWindowDraggable(recycleWindow, document.querySelector(".recycle-window .window-header"));

  // 第一版先让图标显示提示；以后可把这里改成打开对应窗口。
  iconButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var appName = button.dataset.app;
      // 微信、下载文件夹、浏览器、邮箱、抖音、回收站有自己的窗口功能，不显示“暂未开放”。
      if (appName === "微信" || appName === "下载文件夹" || appName === "浏览器" || appName === "邮箱" || appName === "抖音" || appName === "回收站") return;

      showDesktopTip("“" + appName + "”暂未开放，线索正在整理中。");
    });
  });

  // Dock 也可以打开常用窗口，更接近 Mac 的使用习惯。
  dockButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var appName = button.dataset.dockApp;

      if (appName === "微信") {
        openWechat();
      } else if (appName === "浏览器") {
        openBrowser();
      } else if (appName === "邮箱") {
        openMail();
      } else if (appName === "下载文件夹") {
        openFolder();
      } else if (appName === "抖音") {
        openDouyin();
      } else if (appName === "回收站") {
        openRecycleBin();
      } else {
        showDesktopTip("“" + appName + "”暂未开放，线索正在整理中。");
      }
    });
  });

  // 独立官网的服务查询页交互。
  if (realQueryButton) {
    realQueryButton.addEventListener("click", queryRealBaiyeService);
    realQueryInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") queryRealBaiyeService();
    });
  }

  // 白页官网首页的旧物检索。
  if (baiyeObjectSearchButton) {
    baiyeObjectSearchButton.addEventListener("click", searchBaiyeObject);
    baiyeObjectSearchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") searchBaiyeObject();
    });
  }

  // 白页官网的内部员工日志入口：默认隐藏，点击后展开。
  if (staffLogLink) {
    staffLogLink.addEventListener("click", function () {
      staffLogPanel.hidden = !staffLogPanel.hidden;
      if (!staffLogPanel.hidden) staffLogInput.focus();
    });
    staffLogButton.addEventListener("click", searchStaffLog);
    staffLogInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") searchStaffLog();
    });
  }

  // 员工后台 v1 的隐藏导航与内部面板交互。
  staffHiddenNavButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      showStaffSection(button.dataset.staffSection);
    });
  });

  if (viewFaceSummaryButton) {
    viewFaceSummaryButton.addEventListener("click", showFaceSummary);
  }

  if (openWarehouseDetailButton) {
    openWarehouseDetailButton.addEventListener("click", showWarehouseDetail);
  }

  if (openCasePreviewButton) {
    openCasePreviewButton.addEventListener("click", showCasePreview);
  }

  selectCoreItemButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      openCoreItemConfirm(button);
    });
  });

  if (coreConfirmButton) {
    coreConfirmButton.addEventListener("click", confirmCoreItemSelection);
  }

  if (coreCancelButton) {
    coreCancelButton.addEventListener("click", closeCoreItemConfirm);
  }

  if (whitefoxIntervention) {
    whitefoxIntervention.addEventListener("click", function () {
      whitefoxIntervention.hidden = true;
    });
  }

  if (continueToObsSyncButton) {
    continueToObsSyncButton.addEventListener("click", startObsSyncEnding);
  }

  if (face004MaintenanceRow) {
    face004MaintenanceRow.addEventListener("mouseenter", showFace004Tooltip);
    face004MaintenanceRow.addEventListener("click", showFace004Tooltip);
  }

  if (openInternalLogButton) {
    openInternalLogButton.addEventListener("click", showInternalLog);
  }

  document.querySelectorAll(".permission-denied").forEach(function (button) {
    button.addEventListener("click", function () {
      if (staffLogResult) {
        staffLogResult.textContent = "权限不足。";
      } else if (desktopTip) {
        showDesktopTip("权限不足。");
      }
    });
  });

  internalModalCloseButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var modalId = button.dataset.closeInternal;
      var modal = document.getElementById(modalId);
      if (modal) modal.hidden = true;
    });
  });

  // 独立隐藏档案页的“展开更多记录”按钮。
  if (realArchiveMoreButton) {
    realArchiveMoreButton.addEventListener("click", function () {
      realArchiveMoreInfo.hidden = false;
    });
  }

  // 进入桌面时读取其他页面写入的主线进度，刷新今日待办。
  applyStoredTodoStage();
  startDesktopEndingEcho();

  // 如果当前页面是 baiye-horror-test.html，就启动文字墙测试。
  startHorrorTextTest();
});
