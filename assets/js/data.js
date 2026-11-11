/* =========================================================
   ★★★ 文案数据文件 ★★★
   小檀（泽茹）· 生日纪念网站
   tanzeru.top

   换内容只改这个文件，不要动其它文件。
   站内所有数字（在一起多久、倒计时）都按 facts 里的日期实时计算。
   ========================================================= */
window.SITE = {
  /* ---------- 基本信息 ---------- */
  her: {
    name: '泽茹',
    nick: '小檀'
  },
  me: {
    sign: '你的爱人'
  },
  facts: {
    birthday: '2026-11-12',       // 生日 YYYY-MM-DD，用于算倒计时
    birthdayAge: 20,              // 这次满几岁
    togetherFrom: '2024-12-08',   // 在一起的日期，用于算「在一起X年X个月」
    togetherFromText: '2024年12月8号'
  },

  /* ---------- 顶栏 / 底栏 ---------- */
  hud: {
    player: 'PLAYER 02',
    tag: 'LOVE +999',
    fullscreenOn: '全屏沉浸',
    fullscreenOff: '退出全屏',
    musicOn: '音乐已开启',
    musicOff: '音乐未开启',
    musicMissing: '暂无音乐'
  },
  bar: {
    right: '给小檀的独一份 ♡'
  },

  /* ---------- 访问密码门 ---------- */
  /* enabled:true 时打开网站要先输密码；hash 是密码的哈希（看不到明文） */
  /* enabled:false 时无密码门，打开直接进第一幕 */
  /* 想重新加密码：把 enabled 改成 true，改 hash。当前密码（已停用）是 1112 */
  gate: {
    enabled: false,
    hash: '1n2zr55',
    title: '这里是一份私人礼物',
    sub: '这份礼物只给一个人看，先对个暗号吧。',
    placeholder: '输入密码',
    hint: '提示：你的生日，四个数字',
    wrong: '不对哦，再想想 ♡',
    button: '打开它',
    ok: '是了，进来吧 ♡'
  },

  /* ---------- 照片（拍立得） ---------- */
  /* pos 是取景位置，竖图/宽图用得上，不写就是居中 */
  photos: {
    /* 第2幕：生日页的拍立得 */
    hero: [
      { src: 'assets/img/p3.jpg',  mini: 'assets/img/p3-s.jpg',  alt: '阳光下的你，举着那杯蜜雪冰城', tag: '阳光刚好' },
      { src: 'assets/img/p1.jpg',  mini: 'assets/img/p1-s.jpg',  alt: '你在石家庄的打卡框里比着剪刀手', tag: '石家庄' },
      { src: 'assets/img/p10.jpg', mini: 'assets/img/p10-s.jpg', alt: '商场里抱着那只大熊二', tag: '抱着熊二', pos: '45% 45%' },
      { src: 'assets/img/p11.jpg', mini: 'assets/img/p11-s.jpg', alt: '戴眼镜的俯拍自拍', tag: '眼镜版', pos: '50% 26%' }
    ],
    /* 第7幕：纪念墙的定格照 */
    wall: [
      { src: 'assets/img/p2.jpg', mini: 'assets/img/p2-s.jpg', alt: '教学楼下，头上的小熊和手里的汽水', tag: '教学楼' },
      { src: 'assets/img/p8.jpg', mini: 'assets/img/p8-s.jpg', alt: '靠在那棵大树边，手里捧着奶茶', tag: '梧桐树' },
      { src: 'assets/img/p4.jpg', mini: 'assets/img/p4-s.jpg', alt: '金色梧桐树下，你捧着那杯奶茶自带的小熊', tag: '秋天的路' }
    ]
  },

  /* ---------- 七个场景 ---------- */
  scenes: [
    /* ===== 01 开场 ===== */
    {
      id: 1,
      label: '为你而来',
      tone: 'night',
      eyebrow: '♡ 你收到了一份神秘礼物 ♡',
      title: '小檀，等你好久了。',
      sub: '把烦心事留在门外。\n接下来的几分钟，只属于你。',
      giftTag: '给小檀 ♡',
      hint: '轻轻点开，里面藏着我的偏心。'
    },

    /* ===== 02 生日页 ===== */
    {
      id: 2,
      label: '今日限定主角',
      tone: 'day',
      eyebrow: 'HAPPY BIRTHDAY！今日限定主角',
      title: '生日快乐',
      titleBoom: '！',
      titleSub: '我最最偏爱的小檀。今天什么都依你。',
      stickers: ['今天你最大 ♡', '可爱超标啦！'],
      hint: '点一下，继续 →'
    },

    /* ===== 03 小提问 ===== */
    {
      id: 3,
      label: '一点小调皮',
      tone: 'day',
      eyebrow: '先等一下，有个非常严肃的问题',
      bubble: '请寿星认真作答！',
      question: ['你男朋友是不是', '全世界最可爱的人？'],
      answers: [
        {
          key: 'a',
          text: '是啦是啦，超可爱 ♡',
          solid: true,
          reply: '被你夸到脸红啦 ♡',
          line: '不对，标准答案是你。我只是全世界最喜欢你的人。'
        },
        {
          key: 'b',
          text: '明明才不是',
          solid: false,
          reply: '咦？给我一点面子嘛～',
          line: '那也没关系，反正我已经被你迷得团团转了。'
        }
      ],
      cta: '好呀，带你去许个愿 →'
    },

    /* ===== 04 许愿 / 吹蜡烛 ===== */
    {
      id: 4,
      label: '愿望会发光',
      tone: 'night',
      eyebrow: 'MAKE A WISH, MY FAVORITE GIRL',
      title: '闭上眼睛，许一个愿望吧。',
      sub: '这一次，不用告诉我。悄悄告诉星星就好。',
      button: '呼——把愿望送给星星',
      holding: '正在把愿望送给星星…再按一会儿',
      released: '再按久一点，愿望才飞得起来。',
      done: '你许的愿望，愿它成真。我的愿望，是你快乐。',
      doneButton: '愿望已送出 ♡',
      hint: '按住鼠标或空格2秒，让愿望轻轻起飞。',
      cta: '还有一句话，我想认真对你说 →'
    },

    /* ===== 05 回忆卡片 ===== */
    /* 卡片支持：title / title+sub / title+body[] / photo+photoAlt+photoTag */
    /* 最后一张用 envelope:true + opensLetter:true 来打开信件 */
    {
      id: 5,
      label: '认真喜欢你',
      tone: 'night',
      eyebrow: '只说给你听',
      meta: '只说给你听',
      cards: [
        {
          title: '我在给你准备礼物的时候，一直在想。',
          sub: '我们会一直走下去，我会一直爱着你，希望以后的每一天都开心。',
          photo: 'assets/img/p7.jpg',
          photoAlt: '你靠在那棵大树边，捧着奶茶笑',
          photoTag: '那天下午',
          button: '我在听，你说 ♡'
        },
        {
          title: '你不用一直表现得很开心。',
          sub: '不想笑的时候，在我面前可以不笑。'
        },
        {
          title: '你不用每天都很懂事。',
          body: ['也不用把所有委屈，都自己消化掉。', '累了就说，我不会嫌烦。'],
          photo: 'assets/img/p6.jpg',
          photoAlt: '树下你举着手机和袋子，笑得很自然',
          photoTag: '随手一张'
        },
        {
          title: '你不用变得完美，才值得被好好爱着。',
          sub: '开心的你，累了的你，我都喜欢。',
          photo: 'assets/img/p5.jpg',
          photoAlt: '银杏树下，你手里握着那杯汽水',
          photoTag: '银杏树下'
        },
        {
          title: '在我这里，你可以放心做你自己。',
          sub: '不是谁期待的样子，只是你自己。',
          photo: 'assets/img/p9.jpg',
          photoAlt: '假山前，你安安静静地看着镜头',
          photoTag: '就这样很好'
        },
        {
          title: '往后的普通日子，我也想认真陪你过。',
          body: ['生日只有一天，但可以有很多很多天。'],
          envelope: true,
          button: '剩下的话，都写在这封信里了 ♡',
          opensLetter: true
        }
      ]
    },

    /* ===== 06 结尾 ===== */
    {
      id: 6,
      label: '故事未完待续',
      tone: 'day',
      eyebrow: 'QUEST COMPLETE / 解锁无限拥抱',
      title: '生日快乐，我的小檀。',
      lines: ['新的一岁，你往前走。', '我陪着你。'],
      button: '再抱一会儿 ♡',
      hint: '这个拥抱，没有倒计时。',
      hugLine: '嗯，再抱一会儿。我们还有好多好多明天。',
      link: '再读一遍那封信'
    },

    /* ===== 07 纪念爱情 ===== */
    {
      id: 7,
      label: '纪念爱情',
      tone: 'night',
      eyebrow: 'LOVE ARCHIVE / 纪念爱情',
      title: '今天是你生日，我们的日子还长。',
      sub: '礼物会拆完，生日会过去。只有这些数字，每天都在往上涨。',
      note: '上面这些数字都是真的，每一秒打开，都和上一秒不一样。',
      backTo: 6,
      marks: [
        { id: 'loveWeeks',   label: '我们在一起', unit: '周', hint: '一周一周地数' },
        { id: 'loveMonths',  label: '换成月是',   unit: '个月', hint: '一个月一个月地过' },
        { id: 'loveDays2',   label: '也走过',     unit: '天', hint: '一天一天地数' }
      ],
      timeline: [
        { date: '2024年12月8号',    text: '我遇见了你。' },
        { date: '从那天起',           text: '日子有人一起过了。' },
        { date: '2026年11月12号',     text: '你二十岁了，这一天我记很久。' },
        { date: '往后',               text: '一天一天，接着过。' }
      ],
      stamps: ['HAPPY BIRTHDAY', 'LOVE +999', 'OUR DAYS'],
      lines: ['我爱你，不止今朝。', '是朝朝暮暮。'],
      button: '回到今天这个生日 ♡',
      hint: '这上面的每一秒，都算数。'
    }
  ],

  /* ---------- 那封信 ---------- */
  /* 支持 <em>重点</em>，会显示成玫红色 */
  letter: {
    eyebrow: 'A LETTER TO MY FAVORITE PERSON',
    greet: '亲爱的小檀：',
    paragraphs: [
      '写到这里的时候，前面闹了那么久，却想把声音放轻一点。',
      '我希望你今天带走的，不只是「有人给我准备了礼物」这件事，还有一种很踏实的感觉：<em>原来，我是被认真放在心上的</em>。',
      '新的一岁，你不必一下子变成很厉害的大人。累了就休息，难过了就说出来。你可以有小脾气，可以偶尔搞砸事情，也可以什么都没做成，就来找我要一个拥抱。',
      '我喜欢的不是一个永远懂事、永远开心的小檀，是你。开心的你，累了的你，我都喜欢。',
      '我不想只说一句遥远的「永远」。我更想在具体的日子里，好好听你说话，记得你的在意，吵架时也不忘记，我们是想一起走下去的人。',
      '你可以朝着自己喜欢的方向走，不用为了被爱，把自己变成别人的样子。',
      '谢谢你的出现，让我开始期待那些还没有发生的明天。愿你快乐，愿你自由，愿你总有重新出发的勇气。',
      '生日快乐，我的小檀。',
      '如果世界偶尔不够温柔，就先到我这里来。'
    ],
    sign: ['一直站在你这边的，', '你的爱人 ♡']
  }
};